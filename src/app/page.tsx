import { Quiz } from '@/components/quiz';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-8 transition-colors duration-300">
      <header className="w-full max-w-4xl flex justify-between items-center mb-6 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold text-primary">
          QuizWhiz
        </h1>
        <ThemeToggle />
      </header>
      <main className="w-full flex-grow flex items-start justify-center">
        <Quiz />
      </main>
    </div>
  );
}
