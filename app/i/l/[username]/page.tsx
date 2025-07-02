import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  ArrowRight,
  Scale, 
  Award, 
  Trophy,
  Star,
  MapPin,
  Calendar,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield,
  Users,
  BookOpen,
  ExternalLink,
  Mail,
  Phone
} from "lucide-react";

// Sample data - in production this would come from Supabase
const lawyerProfile = {
  id: "sarah-chen",
  name: "Sarah Chen, Esq.",
  title: "Senior Employment Law Attorney",
  firm: "Chen & Associates",
  firmSlug: "chen-associates",
  location: "San Francisco, CA",
  joinedDate: "2021-03-15",
  verified: true,
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah-chen",
  
  // Professional Info
  barNumber: "CA 287654",
  education: [
    "JD, Stanford Law School (2009)",
    "BA Political Science, UC Berkeley (2006)"
  ],
  experience: "15 years",
  specialties: ["Employment Law", "Wrongful Termination", "Discrimination", "Wage & Hour"],
  languages: ["English", "Mandarin"],
  
  // Stats
  stats: {
    answersCount: 342,
    questionsHelped: 289,
    avgResponseTime: "2.5 hours",
    successRate: "94%",
    rating: 4.9,
    totalReviews: 156,
  },
  
  // Gamification
  level: 28,
  currentXP: 42750,
  nextLevelXP: 45000,
  tier: "Legal Authority",
  rank: 15, // out of all lawyers
  badges: [
    { id: "early-adopter", name: "Early Adopter", icon: "🚀", description: "Joined in first month" },
    { id: "top-contributor", name: "Top Contributor", icon: "⭐", description: "Top 10% of lawyers" },
    { id: "fast-responder", name: "Fast Responder", icon: "⚡", description: "Average response < 3 hours" },
    { id: "citation-master", name: "Citation Master", icon: "📚", description: "Cites sources in 90%+ answers" },
    { id: "consensus-builder", name: "Consensus Builder", icon: "🤝", description: "High agreement with other lawyers" },
    { id: "verified-expert", name: "Verified Expert", icon: "✓", description: "Verified bar credentials" },
  ],
  featuredBadges: ["top-contributor", "citation-master", "verified-expert"],
  
  // Recent Activity
  recentAnswers: [
    {
      questionSlug: "wrongful-termination-california",
      questionTitle: "Can I sue for wrongful termination in California?",
      verdictScore: 8.5,
      opinionScore: 9.0,
      timeAgo: "2 hours ago",
      upvotes: 45,
    },
    {
      questionSlug: "overtime-pay-exempt-employee",
      questionTitle: "Am I entitled to overtime pay as an exempt employee?",
      verdictScore: 7.2,
      opinionScore: 8.0,
      timeAgo: "5 hours ago",
      upvotes: 23,
    },
    {
      questionSlug: "hostile-work-environment",
      questionTitle: "What constitutes a hostile work environment?",
      verdictScore: 8.8,
      opinionScore: 9.2,
      timeAgo: "1 day ago",
      upvotes: 67,
    },
  ],
  
  // Expertise Areas with scores
  expertiseAreas: [
    { name: "Wrongful Termination", score: 95, count: 89 },
    { name: "Discrimination", score: 92, count: 67 },
    { name: "Wage & Hour", score: 88, count: 54 },
    { name: "Harassment", score: 85, count: 43 },
    { name: "Retaliation", score: 90, count: 39 },
  ],
};

const reviews = [
  {
    id: "1",
    author: "Anonymous User",
    rating: 5,
    date: "2024-01-10",
    text: "Sarah provided incredibly detailed and actionable advice. Her expertise in employment law really shows.",
  },
  {
    id: "2",
    author: "John D.",
    rating: 5,
    date: "2024-01-05",
    text: "Quick response and thorough analysis. She cited specific California laws that applied to my situation.",
  },
  {
    id: "3",
    author: "Maria S.",
    rating: 4,
    date: "2023-12-28",
    text: "Very helpful perspective on my wrongful termination case. Would recommend.",
  },
];

function LevelProgressCard({ lawyer }: { lawyer: typeof lawyerProfile }) {
  const levelProgress = ((lawyer.currentXP - 40000) / (lawyer.nextLevelXP - 40000)) * 100;
  
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Level {lawyer.level}</CardTitle>
            <CardDescription>{lawyer.tier}</CardDescription>
          </div>
          <Trophy className="h-8 w-8 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{lawyer.currentXP.toLocaleString()} XP</span>
            <span>{lawyer.nextLevelXP.toLocaleString()} XP</span>
          </div>
          <Progress value={levelProgress} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {(lawyer.nextLevelXP - lawyer.currentXP).toLocaleString()} XP to Level {lawyer.level + 1}
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Platform Rank</span>
          <Badge variant="secondary">#{lawyer.rank}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function BadgeShowcase({ badges, featured }: { badges: typeof lawyerProfile.badges; featured: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Achievements
        </CardTitle>
        <CardDescription>{badges.length} badges earned</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-center p-3 rounded-lg border ${featured.includes(badge.id) ? 'border-primary bg-primary/5' : 'border-border'}`}
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <p className="text-xs font-medium">{badge.name}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function LawyerProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/l">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Legal Hub
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm text-muted-foreground">Professional Profile</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            <Button asChild>
              <Link href="/l/ask">Ask {lawyerProfile.name.split(',')[0]}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Info */}
            <div className="flex items-start gap-6 flex-1">
              <Avatar className="h-24 w-24">
                <AvatarImage src={lawyerProfile.avatar} />
                <AvatarFallback>{lawyerProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{lawyerProfile.name}</h1>
                  {lawyerProfile.verified && (
                    <Badge variant="secondary">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-muted-foreground mb-1">{lawyerProfile.title}</p>
                <Link href={`/o/l/${lawyerProfile.firmSlug}`} className="text-primary hover:underline">
                  {lawyerProfile.firm} <ExternalLink className="inline h-3 w-3" />
                </Link>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {lawyerProfile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {new Date(lawyerProfile.joinedDate).getFullYear()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    Bar #{lawyerProfile.barNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="w-full md:w-auto">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{lawyerProfile.stats.answersCount}</div>
                    <div className="text-xs text-muted-foreground">Answers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{lawyerProfile.stats.rating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{lawyerProfile.stats.avgResponseTime}</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{lawyerProfile.stats.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Expertise Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
                <CardDescription>Based on {lawyerProfile.stats.answersCount} answers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {lawyerProfile.expertiseAreas.map((area) => (
                  <div key={area.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{area.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{area.count} answers</Badge>
                        <span className="text-sm font-bold">{area.score}%</span>
                      </div>
                    </div>
                    <Progress value={area.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity Tabs */}
            <Tabs defaultValue="answers" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="answers">Recent Answers</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="answers" className="space-y-4">
                {lawyerProfile.recentAnswers.map((answer) => (
                  <Card key={answer.questionSlug}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Link href={`/l/q/${answer.questionSlug}`}>
                            <CardTitle className="text-lg hover:text-primary cursor-pointer">
                              {answer.questionTitle}
                            </CardTitle>
                          </Link>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Scale className="h-3 w-3" />
                              Verdict: {answer.verdictScore}/10
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              Opinion: {answer.opinionScore}/10
                            </span>
                            <span>{answer.timeAgo}</span>
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {answer.upvotes}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                <div className="text-center">
                  <Button variant="outline">
                    View All Answers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Background</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Education</h4>
                      <ul className="space-y-1">
                        {lawyerProfile.education.map((edu, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {edu}</li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">{lawyerProfile.experience} of practice</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {lawyerProfile.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <p className="text-sm text-muted-foreground">{lawyerProfile.languages.join(', ')}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">{lawyerProfile.stats.rating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.round(lawyerProfile.stats.rating)
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {lawyerProfile.stats.totalReviews} reviews
                    </p>
                  </div>
                </div>
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base">{review.author}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-3 w-3 ${
                                    star <= review.rating
                                      ? 'fill-primary text-primary'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Level Progress */}
            <LevelProgressCard lawyer={lawyerProfile} />

            {/* Badges */}
            <BadgeShowcase badges={lawyerProfile.badges} featured={lawyerProfile.featuredBadges} />

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get Legal Advice</CardTitle>
                <CardDescription>
                  Ask {lawyerProfile.name.split(',')[0]} a question about {lawyerProfile.specialties[0]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href={`/l/ask?lawyer=${lawyerProfile.id}`}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ask a Question
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Clients Helped
                  </span>
                  <span className="font-bold">{lawyerProfile.stats.questionsHelped}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    Response Time
                  </span>
                  <span className="font-bold">{lawyerProfile.stats.avgResponseTime}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Success Rate
                  </span>
                  <span className="font-bold">{lawyerProfile.stats.successRate}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}