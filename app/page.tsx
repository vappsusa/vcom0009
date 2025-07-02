import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Scale, Users, Brain, Shield, Clock, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            VERDICT
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/l" className="text-sm font-medium hover:text-primary">
              Legal Hub
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Button asChild variant="outline">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Get AI-Powered Legal Answers
            <br />
            <span className="text-primary">From Verified Lawyers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ask legal questions and receive expert opinions with AI-generated consensus scores. 
            Democratizing access to professional legal knowledge.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/l/ask">
                Ask a Legal Question <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/l">Browse Questions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How VERDICT Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-4" />
                <CardTitle>AI Classification</CardTitle>
                <CardDescription>
                  Every question is instantly classified by AI for relevance, 
                  category, and routing to the right legal experts.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Expert Opinions</CardTitle>
                <CardDescription>
                  Verified lawyers provide detailed opinions, building consensus 
                  through multiple perspectives on your legal question.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Verdict Score</CardTitle>
                <CardDescription>
                  AI analyzes all opinions to generate a consensus verdict score, 
                  giving you clear guidance on your legal matter.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Questions Answered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Verified Lawyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary"><30min</div>
              <div className="text-muted-foreground">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VERDICT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle>Verified Professionals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All lawyers are verified with bar credentials and professional experience. 
                  Get answers from real legal experts, not anonymous users.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle>Fast Responses</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI classification ensures your question reaches the right experts quickly. 
                  Most questions receive multiple opinions within hours.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Star className="h-8 w-8 text-primary" />
                  <CardTitle>Quality Assured</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  5-stage AI moderation ensures high-quality questions and answers. 
                  Gamification rewards thoughtful, detailed legal opinions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle>AI-Enhanced</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced AI analyzes multiple opinions to generate consensus verdicts. 
                  Get clear, data-driven guidance on your legal questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Legal Clarity?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands getting expert legal opinions powered by AI
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">VERDICT</h3>
              <p className="text-sm text-muted-foreground">
                Democratizing professional legal knowledge through AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/l" className="hover:text-primary">Legal Hub</Link></li>
                <li><Link href="/l/ask" className="hover:text-primary">Ask Question</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
                <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
                <li><Link href="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 VERDICT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}