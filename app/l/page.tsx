import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Scale, Search, TrendingUp, Clock, MessageSquare, Users } from "lucide-react";

// Sample data - in production this would come from Supabase
const categories = [
  { id: "employment", name: "Employment Law", count: 1234, icon: "💼" },
  { id: "family", name: "Family Law", count: 987, icon: "👨‍👩‍👧‍👦" },
  { id: "criminal", name: "Criminal Law", count: 765, icon: "⚖️" },
  { id: "real-estate", name: "Real Estate", count: 654, icon: "🏠" },
  { id: "business", name: "Business Law", count: 543, icon: "🏢" },
  { id: "immigration", name: "Immigration", count: 432, icon: "✈️" },
  { id: "intellectual-property", name: "IP Law", count: 321, icon: "💡" },
  { id: "personal-injury", name: "Personal Injury", count: 210, icon: "🏥" },
];

const recentQuestions = [
  {
    id: "1",
    slug: "wrongful-termination-california",
    title: "Can I sue for wrongful termination in California?",
    category: "Employment Law",
    verdictScore: 8.5,
    lawyerCount: 5,
    timeAgo: "2 hours ago",
    views: 234,
  },
  {
    id: "2",
    slug: "child-custody-relocation",
    title: "Ex-spouse wants to relocate with our children - what are my rights?",
    category: "Family Law",
    verdictScore: 7.2,
    lawyerCount: 3,
    timeAgo: "4 hours ago",
    views: 189,
  },
  {
    id: "3",
    slug: "startup-equity-vesting",
    title: "Startup equity vesting schedule - is 4 years standard?",
    category: "Business Law",
    verdictScore: 9.1,
    lawyerCount: 7,
    timeAgo: "5 hours ago",
    views: 456,
  },
  {
    id: "4",
    slug: "dui-first-offense",
    title: "First DUI offense - what should I expect?",
    category: "Criminal Law",
    verdictScore: 6.8,
    lawyerCount: 4,
    timeAgo: "8 hours ago",
    views: 312,
  },
];

const topLawyers = [
  {
    id: "1",
    username: "sarah-chen",
    name: "Sarah Chen, Esq.",
    specialty: "Employment Law",
    location: "San Francisco, CA",
    rating: 4.9,
    answersCount: 342,
    badge: "Top Contributor",
  },
  {
    id: "2",
    username: "michael-rodriguez",
    name: "Michael Rodriguez",
    specialty: "Family Law",
    location: "Los Angeles, CA",
    rating: 4.8,
    answersCount: 267,
    badge: "Verified Expert",
  },
  {
    id: "3",
    username: "emily-johnson",
    name: "Emily Johnson, JD",
    specialty: "Criminal Defense",
    location: "New York, NY",
    rating: 4.9,
    answersCount: 189,
    badge: "Rising Star",
  },
];

export default function LegalHubPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              VERDICT
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/l" className="text-sm font-medium text-primary">
                Legal Hub
              </Link>
              <Link href="/l/categories" className="text-sm font-medium hover:text-primary">
                Categories
              </Link>
              <Link href="/l/lawyers" className="text-sm font-medium hover:text-primary">
                Find Lawyers
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/l/ask">
                Ask Question
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Legal Questions & Expert Answers
            </h1>
            <p className="text-xl text-muted-foreground">
              Get AI-powered consensus from verified lawyers on your legal matters
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search legal questions..."
                  className="pl-10"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="employment">Employment</SelectItem>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="criminal">Criminal Law</SelectItem>
                  <SelectItem value="business">Business Law</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/l/${category.id}`}>
                <Card className="hover:border-primary transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{category.icon}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Tabs defaultValue="recent" className="space-y-6">
            <TabsList className="grid w-full max-w-[400px] grid-cols-3">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              {recentQuestions.map((question) => (
                <Card key={question.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <Link href={`/l/q/${question.slug}`}>
                          <CardTitle className="text-xl hover:text-primary cursor-pointer">
                            {question.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="flex items-center gap-4">
                          <Badge variant="outline">{question.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {question.timeAgo}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {question.lawyerCount} lawyers
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {question.views} views
                          </span>
                        </CardDescription>
                      </div>
                      {question.verdictScore && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {question.verdictScore}/10
                          </div>
                          <div className="text-xs text-muted-foreground">Verdict Score</div>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              ))}
              <div className="text-center pt-4">
                <Button variant="outline">
                  Load More Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center py-8">
                    Trending questions will appear here based on engagement metrics
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unanswered">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center py-8">
                    Questions awaiting lawyer responses will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Legal Contributors</h2>
            <Button variant="outline" asChild>
              <Link href="/l/lawyers">
                View All Lawyers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topLawyers.map((lawyer) => (
              <Card key={lawyer.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Link href={`/i/l/${lawyer.username}`}>
                        <CardTitle className="hover:text-primary cursor-pointer">
                          {lawyer.name}
                        </CardTitle>
                      </Link>
                      <CardDescription className="mt-1">
                        {lawyer.specialty} • {lawyer.location}
                      </CardDescription>
                    </div>
                    <Badge>{lawyer.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Scale className="h-4 w-4 text-primary" />
                      {lawyer.answersCount} answers
                    </span>
                    <span className="flex items-center gap-1">
                      ⭐ {lawyer.rating}/5.0
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Legal Question?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get expert opinions from verified lawyers with AI-powered analysis
          </p>
          <Button size="lg" asChild>
            <Link href="/l/ask">
              Ask Your Question Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 VERDICT. All rights reserved. | Legal questions for informational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}