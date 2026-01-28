# 🎬 MovieHub - Next.js Movie Discovery Platform

A modern, high-performance movie discovery platform built with **Next.js 16** and **App Router**, powered by the [TMDB API](https://www.themoviedb.org/). Browse the latest movies and TV shows, watch trailers, explore cast details, and filter content by genre — all optimized for speed and user experience.

---

## 🚀 Features

✨ **Latest Movies & TV Shows**
- Real-time listings powered by TMDB API
- Browse trending, popular, top-rated, and upcoming content

🎯 **Advanced Filtering**
- Search by keywords across movies and TV shows
- Filter by genres (Action, Comedy, Horror, Sci-Fi, and more)
- Sort by popularity, rating, or release date

🎞️ **Rich Media Content**
- Watch trailers and related videos
- View high-quality posters and backdrops
- Smooth infinite scroll for browsing

🧑‍🎤 **Detailed Information**
- Comprehensive cast and crew details
- Movie ratings with visual progress bars
- Release dates, runtime, and overviews
- Similar and recommended content

⚡ **Performance Optimized**
- Built with Next.js 16 and App Router for optimal performance
- Image optimization with Next.js Image component
- Server-side rendering and static generation
- Responsive design for all devices

🎨 **Modern UI/UX**
- Clean, intuitive interface
- Smooth animations and transitions
- Mobile-friendly responsive design
- Dark-themed aesthetic

---

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/charlesaurav13/MovieWebsite/assets/81438796/27377ea2-29c0-4f5a-86e7-6ec18c340c62" width="500" alt="Home Page"/>
  <br/>
  <img src="https://github.com/charlesaurav13/MovieWebsite/assets/81438796/53feef01-e1a6-4e81-8896-7dbbf071ac8a" width="500" alt="Movie Details"/>
</p>

---

## 🛠️ Tech Stack

### Core Framework
- ⚛️ **Next.js 16** - React framework with App Router
- ⚛️ **React 19** - Latest React with concurrent features
- 💪 **TypeScript Ready** - Full TypeScript support

### State Management & Data
- 🔄 **Redux Toolkit** - Efficient state management
- 🌐 **Axios** - HTTP client for API requests
- 🎬 **TMDB API** - Movie and TV show data

### UI & Styling
- 💅 **SASS/SCSS** - Modern CSS preprocessing
- 🎨 **CSS Modules** - Scoped styling
- 📱 **Responsive Design** - Mobile-first approach

### Additional Libraries
- 📅 **Day.js** - Lightweight date formatting
- 🎥 **React Player** - Video playback for trailers
- 📊 **React Circular Progressbar** - Rating visualizations
- 🔄 **React Infinite Scroll** - Seamless content loading
- 🎯 **React Select** - Enhanced dropdown selections
- 🎨 **React Icons** - Comprehensive icon library

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher)
- **npm** or **yarn** package manager
- **TMDB API Key** - [Get one here](https://developer.themoviedb.org/docs/getting-started)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
# TMDB API Configuration
# Get your API token from https://developer.themoviedb.org/docs/getting-started
NEXT_PUBLIC_TMDB_TOKEN=your_tmdb_bearer_token_here
```

### How to Get Your TMDB API Token

1. Sign up at [TMDB](https://www.themoviedb.org/signup)
2. Navigate to [API Settings](https://www.themoviedb.org/settings/api)
3. Request an API key
4. Copy your **API Read Access Token** (Bearer token)
5. Paste it into your `.env.local` file

**Note:** Use the Bearer token, not the API key!

---

## 🧑‍💻 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/charlesaurav13/MovieWebsite.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd MovieWebsite
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your TMDB token
   ```

### Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

### Start Production Server

Run the production server:

```bash
npm start
# or
yarn start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
```

---

## 📁 Project Structure

```
MovieWebsite/
├── app/                          # Next.js App Router directory
│   ├── layout.js                 # Root layout with Redux Provider
│   ├── page.js                   # Home page
│   ├── loading.js                # Global loading component
│   ├── error.js                  # Global error handler
│   ├── not-found.js              # 404 page
│   ├── providers.js              # Redux Provider wrapper
│   ├── AppInitializer.js         # API configuration initializer
│   ├── [mediaType]/[id]/         # Dynamic route for movie/TV details
│   │   └── page.js
│   ├── search/[query]/           # Search results page
│   │   └── page.js
│   └── explore/[mediaType]/      # Explore page by media type
│       └── page.js
├── src/
│   ├── components/               # Reusable components
│   │   ├── header/              # Navigation header
│   │   ├── footer/              # Page footer
│   │   ├── carousel/            # Content carousel
│   │   ├── movieCard/           # Movie/TV card component
│   │   ├── circleRating/        # Rating display
│   │   ├── genres/              # Genre tags
│   │   ├── spinner/             # Loading spinner
│   │   ├── videoPopup/          # Video player modal
│   │   └── ...
│   ├── pages_old/               # Original page components (migrated)
│   │   ├── home/                # Home page sections
│   │   ├── details/             # Detail page sections
│   │   ├── explore/             # Explore page components
│   │   └── searchResult/        # Search components
│   ├── store/                   # Redux store configuration
│   │   ├── store.js             # Redux store setup
│   │   └── homeSlice.js         # Home state slice
│   ├── utils/                   # Utility functions
│   │   └── api.js               # API helper functions
│   ├── hooks/                   # Custom React hooks
│   ├── assets/                  # Static assets (images, icons)
│   ├── index.scss               # Global styles
│   └── mixins.scss              # SASS mixins
├── public/                      # Public static files
├── next.config.js               # Next.js configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

---

## 🔌 API Integration

This application uses the [TMDB API](https://www.themoviedb.org/documentation/api) for fetching movie and TV show data.

### Key Endpoints Used

- `/configuration` - API configuration (image base URLs)
- `/genre/{type}/list` - Genre lists
- `/movie/upcoming` - Upcoming movies
- `/trending/{media_type}/{time_window}` - Trending content
- `/discover/{media_type}` - Discover movies/TV shows with filters
- `/search/multi` - Search across all content
- `/{media_type}/{id}` - Detailed information
- `/{media_type}/{id}/credits` - Cast and crew
- `/{media_type}/{id}/videos` - Trailers and videos

### Rate Limiting

TMDB API has rate limits. For production use, consider:
- Implementing caching strategies
- Using Next.js API routes as a proxy
- Monitoring API usage

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `NEXT_PUBLIC_TMDB_TOKEN` environment variable
4. Deploy!

### Other Platforms

This Next.js application can be deployed to:
- **Netlify** - With Next.js runtime support
- **AWS Amplify** - Full Next.js support
- **Docker** - Container deployment
- **Custom VPS** - Using PM2 or similar

---

## 🎯 Key Features Explained

### Server-Side Rendering (SSR)
- Dynamic routes are server-rendered for better SEO
- Faster initial page loads
- Improved performance metrics

### Image Optimization
- Next.js Image component for automatic optimization
- Responsive images with proper sizing
- Lazy loading for better performance

### State Management
- Redux Toolkit for predictable state
- Global state for API configuration and genres
- Optimized for Next.js with proper hydration

### Code Splitting
- Automatic code splitting by Next.js
- Dynamic imports where beneficial
- Reduced initial bundle size

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

You are free to use, modify, and distribute this software as per the license terms.

---

## 🙏 Acknowledgments

- **[TMDB](https://www.themoviedb.org/)** - For providing the comprehensive movie database API
- **[Next.js](https://nextjs.org/)** - For the amazing React framework
- **[Vercel](https://vercel.com/)** - For hosting and deployment platform
- All contributors and users of this project

---

## 📫 Contact & Support

For questions, feedback, or support:

- 📧 **Email:** [sauravp1236@gmail.com](mailto:sauravp1236@gmail.com)
- 🌐 **LinkedIn:** [linkedin.com/in/saurav7109/](https://www.linkedin.com/in/saurav7109/)
- 💻 **LeetCode:** [leetcode.com/chsaurav_13/](https://leetcode.com/chsaurav_13/)
- 🐛 **Issues:** [GitHub Issues](https://github.com/charlesaurav13/MovieWebsite/issues)

---

## 🌟 Show Your Support

If you find this project helpful or interesting:

⭐️ **Star this repository** on [GitHub](https://github.com/charlesaurav13/MovieWebsite)

🔄 **Share it** with others who might find it useful

🐛 **Report bugs** or **suggest features** via issues

---

## 📈 Roadmap

Future enhancements planned:

- [ ] User authentication and profiles
- [ ] Watchlist and favorites
- [ ] User reviews and ratings
- [ ] Advanced search filters
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) features
- [ ] Performance monitoring and analytics

---

**Built with ❤️ using Next.js and TMDB API**
