
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, type QuizQuestion } from "@/lib/quiz-data";
import { generateFeedback } from "@/ai/flows/generate-feedback";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2, RotateCcw, CheckCircle2, XCircle, ArrowRight, SkipForward, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type AnswerFeedback = {
  userAnswer: string;
  isCorrect: boolean;
  feedback?: string;
};

type QuizState = {
  currentQuestionIndex: number;
  answers: Record<number, AnswerFeedback>;
  score: number;
  quizFinished: boolean;
};

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: {},
  score: 0,
  quizFinished: false,
};

export function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>(initialState);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const savedState = localStorage.getItem("quizWhizState");
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        // Basic validation of the loaded state
        if (
          typeof parsedState.currentQuestionIndex === 'number' &&
          typeof parsedState.score === 'number'
        ) {
          setQuizState(parsedState);
        } else {
            localStorage.removeItem("quizWhizState");
        }
      }
    } catch (error) {
      console.error("Failed to load quiz state from localStorage", error);
      localStorage.removeItem("quizWhizState");
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem("quizWhizState", JSON.stringify(quizState));
      } catch (error) {
        console.error("Failed to save quiz state to localStorage", error);
      }
    }
  }, [quizState, isClient]);

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
  const answeredCurrentQuestion = quizState.answers[quizState.currentQuestionIndex];

  const handleAnswerSubmit = useCallback(async () => {
    if (!selectedAnswer || answeredCurrentQuestion) return;

    setFeedbackLoading(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    try {
      const feedbackResult = await generateFeedback({
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
      });

      setQuizState(prevState => ({
        ...prevState,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        answers: {
          ...prevState.answers,
          [prevState.currentQuestionIndex]: {
            userAnswer: selectedAnswer,
            isCorrect,
            feedback: feedbackResult.feedback,
          },
        },
      }));
    } catch (error) {
      console.error("Error generating feedback:", error);
      setQuizState(prevState => ({
        ...prevState,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        answers: {
          ...prevState.answers,
          [prevState.currentQuestionIndex]: {
            userAnswer: selectedAnswer,
            isCorrect,
            feedback: isCorrect ? "That's the right answer!" : "That's not correct. The right answer is " + currentQuestion.correctAnswer,
          },
        },
      }));
    } finally {
      setFeedbackLoading(false);
    }
  }, [selectedAnswer, currentQuestion, quizState.currentQuestionIndex, answeredCurrentQuestion]);

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState(prevState => ({ ...prevState, currentQuestionIndex: prevState.currentQuestionIndex + 1 }));
      setSelectedAnswer(null);
    } else {
      setQuizState(prevState => ({ ...prevState, quizFinished: true }));
    }
  };

  const handleSubmitQuiz = () => {
    setQuizState(prevState => ({ ...prevState, quizFinished: true }));
  };

  const handleStartOver = () => {
    setQuizState(initialState);
    setSelectedAnswer(null);
    if (isClient) {
      localStorage.removeItem("quizWhizState");
    }
  };

  const getOptionClassName = (optionText: string) => {
    if (!answeredCurrentQuestion) return "";
    const { userAnswer, isCorrect } = answeredCurrentQuestion;
    const isSelected = optionText === userAnswer;
    const isCorrectAnswer = optionText === currentQuestion.correctAnswer;

    if (isCorrectAnswer) return "bg-green-500/20 border-green-500 text-green-300";
    if (isSelected && !isCorrect) return "bg-red-500/20 border-red-500 text-red-300";
    return "border-border";
  };


  if (!isClient) {
    return (
        <Card className="w-full max-w-2xl animate-pulse">
            <CardHeader><div className="h-8 bg-muted rounded-md w-3/4"></div></CardHeader>
            <CardContent className="space-y-4">
                <div className="h-10 bg-muted rounded-md w-full"></div>
                <div className="h-10 bg-muted rounded-md w-full"></div>
                <div className="h-10 bg-muted rounded-md w-full"></div>
                <div className="h-10 bg-muted rounded-md w-full"></div>
            </CardContent>
            <CardFooter><div className="h-10 bg-muted rounded-md w-32"></div></CardFooter>
        </Card>
    );
  }

  if (quizState.quizFinished) {
    const attemptedQuestions = Object.keys(quizState.answers).length;
    const correctAnswers = quizState.score;
    const incorrectAnswers = attemptedQuestions - correctAnswers;

    return (
      <Card className="w-full max-w-2xl text-center shadow-2xl animate-in fade-in zoom-in-95">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Button onClick={handleStartOver} size="lg">
              <RotateCcw className="mr-2 h-4 w-4" /> Start New Quiz
            </Button>
          </div>
          <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">Quiz Complete! 🎉</CardTitle>
          <CardDescription className="text-lg">
            You scored <span className="text-accent font-bold">{correctAnswers}</span> out of <span className="font-bold">{attemptedQuestions}</span> attempted questions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
            <div className="p-4 bg-secondary rounded-lg">
              <p className="text-2xl font-bold">{attemptedQuestions}</p>
              <p className="text-sm text-muted-foreground">Attempted</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-green-500">{correctAnswers}</p>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-red-500">{incorrectAnswers}</p>
              <p className="text-sm text-muted-foreground">Incorrect</p>
            </div>
          </div>

          <h3 className="font-headline text-xl mb-4">Review Your Answers</h3>
          <Accordion type="single" collapsible className="w-full text-left">
            {Object.entries(quizState.answers).map(([index, userAnswerData]) => {
              const questionIndex = parseInt(index, 10);
              const q = quizQuestions[questionIndex];
              if (!q) return null;

              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                       {userAnswerData.isCorrect ? <CheckCircle2 className="h-5 w-5 text-green-500"/> : <XCircle className="h-5 w-5 text-red-500"/>}
                      <span className="flex-1 text-left">{q.emoji} {q.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p><strong>Your answer:</strong> {userAnswerData.userAnswer}</p>
                    {!userAnswerData.isCorrect && <p><strong>Correct answer:</strong> {q.correctAnswer}</p>}
                    <Alert variant={userAnswerData.isCorrect ? "default" : "destructive"} className={cn(userAnswerData.isCorrect ? "border-green-500/50" : "border-red-500/50")}>
                        <AlertTitle className="font-semibold">{userAnswerData.isCorrect ? "Explanation" : "Why it's incorrect"}</AlertTitle>
                        <AlertDescription>{userAnswerData.feedback}</AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    );
  }

  return (
    <AnimatePresence mode="wait">
    <motion.div
        key={quizState.currentQuestionIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-2xl">
          <CardHeader>
            <CardDescription>Question {quizState.currentQuestionIndex + 1} of {quizQuestions.length}</CardDescription>
            <CardTitle className="font-headline text-2xl sm:text-3xl">
              {currentQuestion.emoji} {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswer || ""}
              onValueChange={setSelectedAnswer}
              disabled={!!answeredCurrentQuestion || feedbackLoading}
            >
              <div className="space-y-3">
                {currentQuestion.answers.map((answer) => (
                  <Label key={answer.text} 
                      className={cn(
                        "flex items-center space-x-3 rounded-lg border-2 p-4 transition-all hover:bg-accent/10 cursor-pointer",
                        getOptionClassName(answer.text),
                        selectedAnswer === answer.text && !answeredCurrentQuestion && "border-primary"
                      )}>
                    <RadioGroupItem value={answer.text} id={answer.text} />
                    <span className="font-normal">{answer.text}</span>
                  </Label>
                ))}
              </div>
            </RadioGroup>
            
            {answeredCurrentQuestion && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-6"
                >
                    <Alert variant={answeredCurrentQuestion.isCorrect ? "default" : "destructive"} className={cn(answeredCurrentQuestion.isCorrect ? "border-green-500/50" : "border-red-500/50")}>
                        <AlertTitle className="flex items-center gap-2 font-bold text-lg">
                            {answeredCurrentQuestion.isCorrect ? <CheckCircle2 className="h-6 w-6 text-green-500"/> : <XCircle className="h-6 w-6 text-red-500"/>}
                            {answeredCurrentQuestion.isCorrect ? "Correct!" : "Incorrect"}
                        </AlertTitle>
                        <AlertDescription className="pt-2">
                        {answeredCurrentQuestion.feedback}
                        </AlertDescription>
                    </Alert>
                </motion.div>
            )}
           
          </CardContent>
          <CardFooter className="flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-2">
                 <Button onClick={handleStartOver} variant="outline" size="lg">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Start Over
                 </Button>
                 <Button onClick={handleSubmitQuiz} variant="secondary" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Submit
                </Button>
              </div>
              <div className="flex gap-2">
                {answeredCurrentQuestion ? (
                  <Button onClick={handleNextQuestion} size="lg">
                      {quizState.currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleNextQuestion} variant="outline" size="lg">
                      <SkipForward className="mr-2 h-4 w-4" />
                      Skip
                    </Button>
                    <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer || feedbackLoading} size="lg">
                      {feedbackLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Submit Answer
                    </Button>
                  </>
                )}
              </div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
