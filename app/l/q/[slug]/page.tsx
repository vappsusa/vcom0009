"use client"

import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Scale, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Bookmark,
  Clock,
  MapPin,
  Award,
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// Sample data - in production this would come from Supabase
const questionData = {
  id: "1",
  slug: "wrongful-termination-california",
  title: "Can I sue for wrongful termination in California?",
  body: `I was recently terminated from my position at a tech company in San Francisco after 3 years of employment. The termination came suddenly after I reported workplace safety violations to HR. 

My manager had been pressuring me to work with equipment that hadn't been properly maintained, and when I raised concerns, I was told to "stop making waves." Two weeks after filing a formal complaint with HR, I was called into a meeting and terminated for "performance issues," despite having received positive reviews just two months prior.

I have documentation of my complaints to HR and my recent performance reviews. Do I have grounds for a wrongful termination lawsuit? What should my next steps be?`,
  category: "Employment Law",
  subcategory: "Wrongful Termination",
  keywords: ["wrongful termination", "retaliation", "whistleblower", "California employment law"],
  askedBy: "anonymous_user_123",
  askedAt: "2024-01-15T10:30:00Z",
  views: 234,
  aiClassification: {
    category: "Employment Law",
    confidence: 0.95,
    complexity: "moderate",
    urgency: "high",
  },
  verdictScore: 8.5,
  verdictConfidence: 0.87,
};

const lawyerOpinions = [
  {
    id: "1",
    lawyerId: "sarah-chen",
    lawyerName: "Sarah Chen, Esq.",
    lawyerTitle: "Employment Law Attorney",
    lawyerLocation: "San Francisco, CA",
    lawyerExperience: "15 years",
    lawyerRating: 4.9,
    lawyerVerified: true,
    opinion: `Based on your description, you may have a strong case for wrongful termination under California's whistleblower protection laws.

Key points in your favor:
1. **Temporal proximity**: You were terminated just two weeks after filing a complaint, which suggests retaliation.
2. **Documentation**: You have written evidence of your safety complaints to HR.
3. **Performance history**: Recent positive reviews contradict the stated reason for termination.
4. **Protected activity**: Reporting workplace safety violations is a protected activity under California Labor Code § 6310.

Recommended next steps:
1. Gather all documentation (emails, performance reviews, termination letter)
2. File a complaint with the California Labor Commissioner within 6 months
3. Consider filing with Cal/OSHA if safety violations persist
4. Consult with an employment attorney immediately to preserve your rights

The statute of limitations for wrongful termination in California is generally 2 years, but some claims have shorter deadlines. Time is of the essence.`,
    score: 9,
    upvotes: 45,
    timestamp: "2024-01-15T11:45:00Z",
  },
  {
    id: "2",
    lawyerId: "michael-rodriguez",
    lawyerName: "Michael Rodriguez",
    lawyerTitle: "Labor & Employment Partner",
    lawyerLocation: "Los Angeles, CA",
    lawyerExperience: "20 years",
    lawyerRating: 4.8,
    lawyerVerified: true,
    opinion: `I agree with the assessment that you likely have a viable wrongful termination claim. In addition to the whistleblower retaliation angle, consider:

**Additional legal theories:**
- Violation of public policy (protecting workplace safety)
- Breach of implied covenant of good faith and fair dealing
- Possible disability discrimination if safety concerns related to a disability

**Damages you may recover:**
- Lost wages (past and future)
- Benefits and bonuses
- Emotional distress damages
- Punitive damages (if employer acted with malice)
- Attorney's fees in some cases

**Important:** California is an at-will employment state, but exceptions apply when termination violates public policy or specific statutes. Your case appears to fall within these exceptions.

**Evidence to preserve:**
- All written communications about safety concerns
- Witness contact information
- Company policies on safety reporting
- Any recordings (if legally made)

I strongly recommend engaging counsel within the next 30 days to ensure all claims are timely filed.`,
    score: 8,
    upvotes: 32,
    timestamp: "2024-01-15T12:30:00Z",
  },
  {
    id: "3",
    lawyerId: "jennifer-park",
    lawyerName: "Jennifer Park, JD",
    lawyerTitle: "Employment Rights Advocate",
    lawyerLocation: "Sacramento, CA",
    lawyerExperience: "12 years",
    lawyerRating: 4.7,
    lawyerVerified: true,
    opinion: `While you likely have a case, I want to provide a balanced perspective on challenges you may face:

**Strengths of your case:**
- Clear timeline linking complaint to termination
- Documentary evidence
- Specific safety violations (strengthens public policy claim)

**Potential challenges:**
- Employer may argue legitimate performance issues
- At-will employment presumption
- Litigation can be lengthy (12-18 months average)
- Emotional toll of litigation

**Alternative considerations:**
1. **Demand letter**: Sometimes leads to quicker settlement
2. **EEOC/DFEH mediation**: Free alternative dispute resolution
3. **Unemployment benefits**: File immediately regardless of lawsuit
4. **New employment**: Don't let litigation prevent job searching

**Settlement reality**: Most cases settle for 3-12 months of salary plus benefits. Trials are rare (\u003c5% of cases).

**Practical tip**: Many attorneys offer contingency fee arrangements for strong cases like yours, meaning no upfront costs.

Your case has merit, but go in with realistic expectations about timeline and outcomes.`,
    score: 7.5,
    upvotes: 28,
    timestamp: "2024-01-15T13:15:00Z",
  },
];

const relatedQuestions = [
  {
    slug: "california-retaliation-laws",
    title: "What constitutes illegal retaliation under California law?",
    verdictScore: 8.2,
  },
  {
    slug: "whistleblower-protections-tech",
    title: "Whistleblower protections for tech employees in California",
    verdictScore: 7.8,
  },
  {
    slug: "documenting-workplace-violations",
    title: "How to properly document workplace safety violations",
    verdictScore: 9.0,
  },
];

function VerdictScoreDisplay({ score, confidence }: { score: number; confidence: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-lg">AI Verdict Score</CardTitle>
          <CardDescription>Based on {lawyerOpinions.length} expert opinions</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl font-bold text-primary mb-4"
          >
            {score}/10
          </motion.div>
          <Progress value={score * 10} className="h-3 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Weak Case</span>
            <span>Strong Case</span>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Confidence Level</span>
              <span className="font-medium">{(confidence * 100).toFixed(0)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Consensus</span>
              <Badge variant="default">High Agreement</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LawyerOpinionCard({ opinion }: { opinion: typeof lawyerOpinions[0] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${opinion.lawyerId}`} />
              <AvatarFallback>{opinion.lawyerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/i/l/${opinion.lawyerId}`}>
                <CardTitle className="text-lg hover:text-primary cursor-pointer">
                  {opinion.lawyerName}
                </CardTitle>
              </Link>
              <CardDescription className="flex items-center gap-2">
                <span>{opinion.lawyerTitle}</span>
                {opinion.lawyerVerified && (
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{opinion.score}/10</div>
            <div className="text-xs text-muted-foreground">Opinion Score</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {opinion.lawyerLocation}
          </span>
          <span className="flex items-center gap-1">
            <Award className="h-3 w-3" />
            {opinion.lawyerExperience}
          </span>
          <span className="flex items-center gap-1">
            ⭐ {opinion.lawyerRating}/5.0
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          {opinion.opinion.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-2 whitespace-pre-wrap">{paragraph}</p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            Helpful ({opinion.upvotes})
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            Reply
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          {new Date(opinion.timestamp).toLocaleDateString()}
        </span>
      </CardFooter>
    </Card>
  );
}

export default function QuestionPage({ params }: { params: { slug: string } }) {
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
            <Badge variant="outline">{questionData.category}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button asChild>
              <Link href="/l/ask">Ask Question</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Question and Answers */}
          <div className="lg:col-span-2 space-y-6">
            {/* Question Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{questionData.title}</CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(questionData.askedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    {questionData.views} views
                  </span>
                  <Badge variant="secondary">{questionData.aiClassification.complexity}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {questionData.body.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3">{paragraph}</p>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Keywords:</span>
                  {questionData.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lawyer Opinions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Expert Legal Opinions</h2>
                <Select defaultValue="helpful">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="helpful">Most Helpful</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="score">Highest Score</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {lawyerOpinions.map((opinion) => (
                <LawyerOpinionCard key={opinion.id} opinion={opinion} />
              ))}

              <div className="text-center pt-4">
                <Button variant="outline">
                  Load More Opinions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Verdict Score */}
            <VerdictScoreDisplay 
              score={questionData.verdictScore} 
              confidence={questionData.verdictConfidence} 
            />

            {/* AI Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-medium">Category Match</span>
                  <Progress value={questionData.aiClassification.confidence * 100} className="h-2 mt-1" />
                  <span className="text-xs text-muted-foreground">
                    {(questionData.aiClassification.confidence * 100).toFixed(0)}% confidence
                  </span>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Complexity</span>
                    <Badge variant="outline">{questionData.aiClassification.complexity}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Urgency</span>
                    <Badge variant="destructive">{questionData.aiClassification.urgency}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">~2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedQuestions.map((question) => (
                  <Link key={question.slug} href={`/l/q/${question.slug}`}>
                    <div className="p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                      <p className="text-sm font-medium line-clamp-2">{question.title}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">Verdict Score</span>
                        <span className="text-sm font-bold text-primary">{question.verdictScore}/10</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Need Legal Help?</CardTitle>
                <CardDescription>
                  Connect with verified lawyers who specialize in {questionData.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/l/lawyers?category=employment">
                    Find a Lawyer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}