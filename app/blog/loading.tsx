export default function Loading() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="h-10 bg-[#1A1A1A] rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-6 bg-[#1A1A1A] rounded w-2/3 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-lg p-6">
                <div className="flex gap-3 mb-4">
                  <div className="h-6 bg-[#2A2A2A] rounded w-20"></div>
                  <div className="h-6 bg-[#2A2A2A] rounded w-32"></div>
                </div>
                <div className="h-8 bg-[#2A2A2A] rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#2A2A2A] rounded w-full"></div>
                  <div className="h-4 bg-[#2A2A2A] rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

