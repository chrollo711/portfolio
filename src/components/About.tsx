function About() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <img 
                src="/src/assets/profile.jpg" 
                alt="Syed Mikraam"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1e293b/3b82f6?text=SM'
                }}
              />
              <div className="absolute bottom-4 right-4 bg-green-500 w-5 h-5 rounded-full border-4 border-gray-900"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm Syed Mikraam, a passionate Full-Stack Developer with over 3 years of experience building modern web applications. 
              I specialize in creating scalable solutions using React, FastAPI, and cutting-edge AI technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines clean code practices with user-centric design, ensuring every project I work on 
              is both powerful and intuitive to use. I'm dedicated to delivering production-ready MVPs that make a real impact.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-2 text-blue-400">
                <span className="text-2xl">⚡</span>
                <span>Always in hustle mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About