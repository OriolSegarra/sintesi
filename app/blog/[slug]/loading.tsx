export default function Loading() {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-4 bg-[#2A2A2A] rounded w-24"></div>
              <div className="h-10 bg-[#2A2A2A] rounded w-3/4"></div>
              <div className="flex items-center space-x-4">
                <div className="h-4 bg-[#2A2A2A] rounded w-32"></div>
                <div className="h-4 bg-[#2A2A2A] rounded w-24"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-[#2A2A2A] rounded-full"></div>
                <div className="h-4 bg-[#2A2A2A] rounded w-40"></div>
              </div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-[#2A2A2A] rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  