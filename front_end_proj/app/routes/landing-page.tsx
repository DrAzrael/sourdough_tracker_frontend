import { BarChart3, Users, ArrowRight, Wheat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#2D1B0A] text-[#DDD4D5]">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-[#6F4B2B] bg-[#3E250F]">
        <div className="  flex h-16 items-center justify-between px-5 w-ull">
          <div className="flex items-center">
            {/* Logo Image Placeholder */}
            <div className="h-12">
              <img src="/logo.svg" alt="Sourdough Tracker Logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <Button className="bg-[#E99B31] text-[#2D1B0A] hover:bg-[#B97413]" asChild>
            <a href="/login">Login</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="  py-12 md:py-24 lg:py-32 bg-[#3E250F]">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter text-[#DDD4D5] md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Track & Share Your Village Stats in Breadwinner World.
          </h1>
          <p className="max-w-[750px] text-lg text-[#B1A6A3] sm:text-xl">
            Join the community of players tracking village growth and economy stats.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="bg-[#E99B31] text-[#2D1B0A] hover:bg-[#B97413]" size="lg" asChild>
              <a href="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              className="border-[#6F4B2B] bg-transparent text-[#DDD4D5] hover:bg-[#50321A] hover:text-[#DDD4D5]"
              variant="outline"
              size="lg"
              asChild
            >
              <a href="/more_info">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="  py-12 md:py-24 lg:py-32 bg-[#2D1B0A]">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-[#DDD4D5] md:text-4xl">
            Simple Tool for Village Stat Tracking
          </h2>
          <p className="max-w-[750px] text-lg text-[#B1A6A3]">
            Everything you need to monitor and village economy
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#6F4B2B] bg-[#3E250F] p-6">
            <div className="rounded-full bg-[#E99B31]/10 p-3">
                <Wheat className="h-6 w-6 text-[#E99B31]" />
            </div>
            <h3 className="text-xl font-bold text-[#DDD4D5]">Resource Tracking</h3>
            <p className="text-center text-[#B1A6A3]">
              Track and report payback time, mana price, divident penalty, BBB and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#6F4B2B] bg-[#3E250F] p-6">
            <div className="rounded-full bg-[#E99B31]/10 p-3">
                <BarChart3 className="h-6 w-6 text-[#E99B31]" />
              
            </div>
            <h3 className="text-xl font-bold text-[#DDD4D5]">Data Visualisation</h3>
            <p className="text-center text-[#B1A6A3]">
              Compare your village stats with neighboring villages.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#6F4B2B] bg-[#3E250F] p-6">
            <div className="rounded-full bg-[#E99B31]/10 p-3">
                <Users className="h-6 w-6 text-[#E99B31]" />
              
            </div>
            <h3 className="text-xl font-bold text-[#DDD4D5]">Comunity Input</h3>
            <p className="text-center text-[#B1A6A3]">
              Post stats of any village u want to support and enrich the comunity.
            </p>
          </div>
        </div>
      </section>

{/* Player-Driven Insights Section */}
<section className="  py-12 md:py-24 lg:py-32 bg-[#3E250F]">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter text-[#DDD4D5] md:text-4xl">
              Player-Driven Insights
            </h2>
            <p className="text-lg text-[#B1A6A3]">
              Sourdough Tracker evolves with each contribution. As players share their village data, everyone benefits
              from richer insights.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-[#E99B31]"></div>
                <span className="text-[#DDD4D5]">Contribute your village stats when you play</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-[#E99B31]"></div>
                <span className="text-[#DDD4D5]">See how your strategies compare to others</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-[#E99B31]"></div>
                <span className="text-[#DDD4D5]">Track market trends based on real player data</span>
              </li>
            </ul>
            <Button className="w-fit bg-[#E99B31] text-[#2D1B0A] hover:bg-[#B97413]" asChild>
                <a href="/register">Start Tracking</a>
            </Button>
          </div>
          <div className="rounded-xl bg-[#50321A] p-6 flex items-center justify-center border border-[#6F4B2B]">
            <div className="text-center text-[#B1A6A3]">
              <p className="mb-2 font-medium">Service screenshot placeholder</p>
              <p className="text-sm">
                Ill add a screenshot of the tool in use here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E99B31] text-[#2D1B0A]">
        <div className="  py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Ready to optimize your village?
            </h2>
            <p className="max-w-[750px] text-lg opacity-90">
              Join Sourdough Tracker today and take your Breadwinner World gameplay to the next level.
            </p>
            <Button asChild size="lg" className="bg-[#2D1B0A] text-[#DDD4D5] hover:bg-[#3E250F]" variant="secondary">
              <a href="/register">Sign Up Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#6F4B2B] bg-[#2D1B0A]">
        <div className="  py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 px-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#DDD4D5]">Resources</h3>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Guides
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Tutorials
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#DDD4D5]">Community</h3>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Discord
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Forums
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Events
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#DDD4D5]">Legal</h3>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Privacy Policy
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Terms of Service
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Cookie Policy
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#DDD4D5]">Company</h3>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                About Us
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Contact
              </a>
              <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
                Blog
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#6F4B2B] pt-8 px-5 md:flex-row">
            <div className="flex items-center gap-2">
              {/* Footer Logo */}
              <div className="h-8 w-fit">
                <img src="/logo.svg" alt="Sourdough Tracker Logo" className="h-full w-full object-contain" />
              </div>
            </div>
            <p className="text-center text-sm text-[#B1A6A3]">
              © {new Date().getFullYear()} Sourdough Tracker - Not affiliated with Roblox or Breadwinner World.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
