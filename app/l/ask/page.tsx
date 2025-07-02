"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  ArrowRight,
  AlertCircle, 
  CheckCircle2,
  Info,
  Sparkles,
  FileText,
  Shield,
  Clock,
  DollarSign
} from "lucide-react";
import { toast } from "sonner";

const categories = [
  { value: "employment", label: "Employment Law", description: "Workplace issues, termination, discrimination" },
  { value: "family", label: "Family Law", description: "Divorce, custody, support" },
  { value: "criminal", label: "Criminal Law", description: "Charges, defense, rights" },
  { value: "real-estate", label: "Real Estate", description: "Property, leases, disputes" },
  { value: "business", label: "Business Law", description: "Contracts, formation, disputes" },
  { value: "immigration", label: "Immigration", description: "Visas, status, deportation" },
  { value: "intellectual-property", label: "IP Law", description: "Patents, trademarks, copyright" },
  { value: "personal-injury", label: "Personal Injury", description: "Accidents, medical malpractice" },
  { value: "other", label: "Other", description: "General legal questions" },
];

export default function AskQuestionPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    body: "",
    location: "",
    urgency: "normal",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - in production this would submit to Supabase
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Question submitted successfully!", {
      description: "AI is classifying your question...",
    });

    // Redirect to question page
    router.push("/l/q/sample-question-slug");
  };

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
            <span className="text-sm text-muted-foreground">Ask a Legal Question</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Question Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Ask Your Legal Question</CardTitle>
                <CardDescription>
                  Get expert opinions from verified lawyers. Be specific and include relevant details.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Question Title*</Label>
                    <Input
                      id="title"
                      placeholder="Brief, clear summary of your legal issue"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      maxLength={150}
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.title.length}/150 characters
                    </p>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Legal Category*</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                      required
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select the area of law" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div>
                              <div className="font-medium">{cat.label}</div>
                              <div className="text-xs text-muted-foreground">{cat.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <Label htmlFor="body">Question Details*</Label>
                    <Textarea
                      id="body"
                      placeholder="Provide context and specific details about your situation. Include relevant dates, locations, and any documentation you have."
                      value={formData.body}
                      onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                      required
                      rows={8}
                      maxLength={3000}
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.body.length}/3000 characters
                    </p>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      placeholder="City, State (e.g., San Francisco, CA)"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Laws vary by location. This helps match you with relevant lawyers.
                    </p>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select 
                      value={formData.urgency} 
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger id="urgency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Low - General inquiry</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="normal">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Normal - Standard timeframe</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="high">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-destructive" />
                            <span>High - Time-sensitive matter</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Privacy Notice */}
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <div className="flex gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Your Privacy Matters</p>
                        <p className="text-xs text-muted-foreground">
                          Questions are posted anonymously by default. Personal details are never shared 
                          with lawyers without your explicit consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting || !formData.title || !formData.category || !formData.body}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Question
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-sm">AI Classification</p>
                    <p className="text-xs text-muted-foreground">
                      Your question is instantly analyzed and categorized
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-sm">Lawyer Matching</p>
                    <p className="text-xs text-muted-foreground">
                      Notifies relevant lawyers in your practice area
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-sm">Expert Opinions</p>
                    <p className="text-xs text-muted-foreground">
                      Receive multiple perspectives from verified lawyers
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-sm">AI Verdict Score</p>
                    <p className="text-xs text-muted-foreground">
                      Get consensus analysis of all opinions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Tips for Good Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Be specific about dates and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Include your location (laws vary by state)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Mention any documentation you have</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>Ask one clear question per submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                    <span>Avoid sharing identifying information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Free During Beta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ask unlimited questions during our beta period. Get expert legal opinions at no cost.
                </p>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Coming Soon</Badge>
                    <span className="text-xs">Premium Features</span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Priority lawyer matching</li>
                    <li>• Direct lawyer messaging</li>
                    <li>• Document review</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}