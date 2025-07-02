import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  ArrowRight,
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  Scale,
  Star,
  Briefcase,
  TrendingUp,
  Shield,
  ExternalLink
} from "lucide-react";

// Sample data - in production this would come from Supabase
const firmData = {
  id: "chen-associates",
  name: "Chen & Associates",
  tagline: "Excellence in Employment Law",
  description: "Chen & Associates is a premier employment law firm serving California businesses and employees. With over 50 years of combined experience, our team provides strategic counsel and vigorous advocacy in all aspects of employment law.",
  founded: "2015",
  size: "11-50 attorneys",
  type: "Boutique Law Firm",
  website: "www.chenassociates.com",
  email: "info@chenassociates.com",
  phone: "(415) 555-0123",
  
  // Locations
  locations: [
    {
      id: "sf",
      name: "San Francisco (HQ)",
      address: "123 Market Street, Suite 500",
      city: "San Francisco, CA 94105",
      isPrimary: true,
    },
    {
      id: "la",
      name: "Los Angeles",
      address: "456 Wilshire Blvd, Floor 12",
      city: "Los Angeles, CA 90017",
      isPrimary: false,
    },
  ],
  
  // Practice Areas
  practiceAreas: [
    { name: "Employment Litigation", percentage: 40 },
    { name: "Wage & Hour Claims", percentage: 25 },
    { name: "Discrimination & Harassment", percentage: 20 },
    { name: "Wrongful Termination", percentage: 15 },
  ],
  
  // Stats
  stats: {
    casesWon: "500+",
    clientSatisfaction: "98%",
    averageRating: 4.8,
    totalReviews: 234,
    attorneyCount: 23,
    yearsExperience: "50+",
    verdictQuestions: 156,
    avgResponseTime: "3.2 hours",
  },
  
  // Attorneys
  featuredAttorneys: [
    {
      id: "sarah-chen",
      name: "Sarah Chen, Esq.",
      title: "Managing Partner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah-chen",
      specialties: ["Employment Law", "Class Actions"],
      experience: "15 years",
      rating: 4.9,
      answers: 342,
      verified: true,
    },
    {
      id: "david-wong",
      name: "David Wong",
      title: "Senior Partner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david-wong",
      specialties: ["Wage & Hour", "PAGA Claims"],
      experience: "12 years",
      rating: 4.8,
      answers: 189,
      verified: true,
    },
    {
      id: "jennifer-liu",
      name: "Jennifer Liu, JD",
      title: "Partner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer-liu",
      specialties: ["Discrimination", "Retaliation"],
      experience: "10 years",
      rating: 4.7,
      answers: 156,
      verified: true,
    },
  ],
  
  // Recent cases/questions
  recentActivity: [
    {
      type: "verdict",
      title: "Class action wage theft settlement",
      description: "Successfully represented 200+ employees in wage theft claim",
      date: "2024-01-10",
      outcome: "$2.3M settlement",
    },
    {
      type: "question",
      title: "Can employers require overtime without notice?",
      verdictScore: 8.7,
      date: "2024-01-08",
      slug: "overtime-notice-requirements",
    },
    {
      type: "verdict",
      title: "Wrongful termination jury verdict",
      description: "Jury awards $1.2M in retaliation case",
      date: "2023-12-15",
      outcome: "$1.2M verdict",
    },
  ],
  
  // Awards & Recognition
  awards: [
    { year: "2023", title: "Best Employment Law Firm", issuer: "California Legal Awards" },
    { year: "2023", title: "Top 100 Law Firms", issuer: "Law360" },
    { year: "2022", title: "Diversity Champion", issuer: "State Bar of California" },
  ],
};

const reviews = [
  {
    id: "1",
    author: "Tech Startup CEO",
    rating: 5,
    date: "2024-01-15",
    text: "Chen & Associates helped us navigate complex employment law issues during our rapid growth. Their proactive approach saved us from potential lawsuits.",
  },
  {
    id: "2",
    author: "Former Employee",
    rating: 5,
    date: "2024-01-05",
    text: "Sarah Chen personally handled my wrongful termination case. Her expertise and dedication resulted in a favorable settlement. Highly recommend.",
  },
  {
    id: "3",
    author: "HR Director",
    rating: 4,
    date: "2023-12-20",
    text: "Excellent employment law counsel. They provide practical advice that helps us maintain compliance while achieving business objectives.",
  },
];

export default function LawFirmProfilePage({ params }: { params: { slug: string } }) {
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
            <span className="text-sm text-muted-foreground">Law Firm Profile</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`https://${firmData.website}`} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-1" />
                Website
              </a>
            </Button>
            <Button asChild>
              <Link href="/l/ask">Get Legal Help</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Firm Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Firm Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{firmData.name}</h1>
                  <p className="text-lg text-muted-foreground">{firmData.tagline}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 max-w-2xl">
                {firmData.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <Badge variant="secondary" className="gap-1">
                  <Users className="h-3 w-3" />
                  {firmData.size}
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Founded {firmData.founded}
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Briefcase className="h-3 w-3" />
                  {firmData.type}
                </Badge>
              </div>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{firmData.stats.attorneyCount}</div>
                    <div className="text-xs text-muted-foreground">Attorneys</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{firmData.stats.casesWon}</div>
                    <div className="text-xs text-muted-foreground">Cases Won</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{firmData.stats.clientSatisfaction}</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{firmData.stats.averageRating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
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
            {/* Practice Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Areas</CardTitle>
                <CardDescription>Specialization breakdown based on case volume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {firmData.practiceAreas.map((area) => (
                  <div key={area.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{area.name}</span>
                      <span className="text-sm text-muted-foreground">{area.percentage}%</span>
                    </div>
                    <Progress value={area.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="attorneys" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="attorneys">Attorneys</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="attorneys" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {firmData.featuredAttorneys.map((attorney) => (
                    <Card key={attorney.id}>
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={attorney.avatar} />
                            <AvatarFallback>{attorney.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Link href={`/i/l/${attorney.id}`}>
                              <CardTitle className="text-base hover:text-primary cursor-pointer">
                                {attorney.name}
                              </CardTitle>
                            </Link>
                            <CardDescription className="flex items-center gap-2">
                              {attorney.title}
                              {attorney.verified && (
                                <Badge variant="secondary" className="text-xs">Verified</Badge>
                              )}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {attorney.specialties.map((specialty) => (
                              <Badge key={specialty} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{attorney.experience}</span>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Scale className="h-3 w-3" />
                                {attorney.answers}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-primary text-primary" />
                                {attorney.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="outline">
                    View All {firmData.stats.attorneyCount} Attorneys
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                {firmData.recentActivity.map((activity, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          {activity.type === "question" ? (
                            <Link href={`/l/q/${activity.slug}`}>
                              <CardTitle className="text-lg hover:text-primary cursor-pointer">
                                {activity.title}
                              </CardTitle>
                            </Link>
                          ) : (
                            <CardTitle className="text-lg">{activity.title}</CardTitle>
                          )}
                          {activity.description && (
                            <CardDescription className="mt-1">
                              {activity.description}
                            </CardDescription>
                          )}
                          <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                            <span>{new Date(activity.date).toLocaleDateString()}</span>
                            {activity.outcome && (
                              <Badge variant="secondary">{activity.outcome}</Badge>
                            )}
                            {activity.verdictScore && (
                              <Badge variant="outline">
                                Verdict: {activity.verdictScore}/10
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge variant={activity.type === "verdict" ? "default" : "secondary"}>
                          {activity.type === "verdict" ? "Case Result" : "Q&A"}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">{firmData.stats.averageRating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.round(firmData.stats.averageRating)
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {firmData.stats.totalReviews} reviews
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
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {firmData.locations.map((location) => (
                    <div key={location.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{location.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">
                        {location.address}<br />
                        {location.city}
                      </p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <a href={`tel:${firmData.phone}`} className="flex items-center gap-2 text-sm hover:text-primary">
                    <Phone className="h-4 w-4" />
                    {firmData.phone}
                  </a>
                  <a href={`mailto:${firmData.email}`} className="flex items-center gap-2 text-sm hover:text-primary">
                    <Mail className="h-4 w-4" />
                    {firmData.email}
                  </a>
                  <a href={`https://${firmData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                    <Globe className="h-4 w-4" />
                    {firmData.website}
                  </a>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/l/ask">
                    Request Consultation
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* VERDICT Performance */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  VERDICT Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Questions Answered</span>
                  <span className="font-bold">{firmData.stats.verdictQuestions}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg Response Time</span>
                  <span className="font-bold">{firmData.stats.avgResponseTime}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                  <span className="font-bold">{firmData.stats.yearsExperience}</span>
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {firmData.awards.map((award, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-sm font-medium">{award.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {award.issuer} • {award.year}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}