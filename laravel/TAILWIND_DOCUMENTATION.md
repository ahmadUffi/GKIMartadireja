# 📘 Dokumentasi Tailwind CSS - GKI Martadireja

## 🎨 Tema Warna

### Warna Utama (Light Mode)
```css
- Primary: Amber/Orange (Emas Elegant)
  - amber-50: Background subtle
  - amber-400: Hover states
  - amber-500: Accent elements
  - amber-600: Primary buttons & links
  - amber-700: Hover buttons
  - orange-600: Gradients

- Neutral: Gray
  - gray-50: Background sections
  - gray-100: Borders & dividers
  - gray-200: Card borders
  - gray-600: Secondary text
  - gray-800: Primary text
  - gray-900: Headings
```

### Warna Dark Mode
```css
- Background:
  - gray-900: Main background
  - gray-800: Card background
  - gray-700: Hover states
  - black: Footer background

- Text:
  - gray-100: Primary text
  - gray-200: Secondary text
  - gray-300: Tertiary text
  - gray-400: Muted text

- Accent:
  - amber-400: Primary accent
  - amber-500: Buttons & highlights
```

## 🧩 Komponen Utama

### 1. Navbar Component

#### Desktop Navigation
```jsx
// Container
className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"

// Logo
<img className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />

// Nav Items
className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md 
           transition-colors duration-200 hover:bg-amber-50 dark:hover:bg-gray-800"

// Dark Mode Toggle Button
className="p-2 rounded-full transition-all duration-200 
           bg-gray-100 dark:bg-amber-500/20 
           text-gray-600 dark:text-amber-400 
           hover:bg-gray-200 dark:hover:bg-amber-500/30"

// Login Button
className="px-5 py-2 text-sm font-semibold rounded-full 
           transition-all duration-200 shadow-sm hover:shadow-md active:scale-95
           bg-amber-600 dark:bg-amber-500 
           text-white dark:text-gray-900 
           hover:bg-amber-700 dark:hover:bg-amber-400"
```

#### Mobile Menu
```jsx
// Hamburger Button
className="p-2 rounded-lg transition-colors 
           text-gray-600 dark:text-gray-300 
           hover:bg-gray-100 dark:hover:bg-gray-800"

// Mobile Menu Container
className="md:hidden border-t py-3 px-2 space-y-1 animate-slideDown
           bg-white dark:bg-gray-900 
           border-gray-100 dark:border-gray-800"

// Mobile Menu Items
className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg
           text-gray-700 dark:text-gray-300 
           hover:text-amber-600 dark:hover:text-amber-400 
           hover:bg-amber-50 dark:hover:bg-gray-800"
```

#### Dropdown Menu
```jsx
// Dropdown Container
className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-xl border py-2 z-50 animate-fadeIn
           bg-white dark:bg-gray-800 
           border-gray-100 dark:border-gray-700"

// Dropdown Items
className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150
           text-gray-600 dark:text-gray-300 
           hover:text-amber-600 dark:hover:text-amber-400 
           hover:bg-amber-50 dark:hover:bg-gray-700"
```

### 2. Hero Section

#### Container
```jsx
className="relative min-h-screen flex items-center justify-center overflow-hidden 
           transition-colors duration-300
           bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900
           dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black"
```

#### Background Effects
```jsx
// Blur Circles
className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl
           bg-amber-600/20 dark:bg-amber-600/10"

// Cross Pattern Overlay
className="absolute inset-0 opacity-5"
style={{
  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, 
                   rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px), 
                   repeating-linear-gradient(90deg, transparent, transparent 60px, 
                   rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`
}}
```

#### Content Elements
```jsx
// Badge
className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
           rounded-full px-4 py-1.5 mb-6"

// Pulse Dot
className="w-2 h-2 rounded-full animate-pulse 
           bg-orange-400 dark:bg-amber-400"

// Heading
className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
style={{ fontFamily: "'Georgia', serif" }}

// Subtitle
className="block mt-1 text-orange-300 dark:text-amber-300"

// Primary Button
className="px-8 py-3.5 font-bold rounded-full transition-all duration-200 
           shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
           bg-white dark:bg-amber-500 
           text-amber-800 dark:text-gray-900 
           hover:bg-amber-50 dark:hover:bg-amber-400"

// Secondary Button
className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold 
           rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
```

#### Scroll Indicator
```jsx
// Container
className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"

// Mouse Shape
className="w-6 h-10 border-2 border-white/30 rounded-full 
           flex items-start justify-center pt-1.5"

// Scroll Dot
className="w-1.5 h-2 bg-white/50 rounded-full animate-scrollDot"
```

### 3. Agenda Section (Vertikal)

#### Container
```jsx
className="py-16 transition-colors duration-300 
           bg-gray-50 dark:bg-gray-900"
```

#### Card Container
```jsx
className="rounded-2xl shadow-lg overflow-hidden border
           bg-white dark:bg-gray-800 
           border-gray-200 dark:border-gray-700"
```

#### Agenda Item
```jsx
// Item Container
className="flex items-start gap-4 p-5 hover:bg-amber-50/50 dark:hover:bg-gray-700/50 
           transition-colors duration-200 group cursor-pointer"

// Date Badge (Circular)
className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 
           shadow-lg flex flex-col items-center justify-center text-white"

// Date Number
className="text-2xl font-bold leading-none"

// Month Text
className="text-xs font-medium uppercase tracking-wide"

// Title
className="text-sm font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 
           transition-colors line-clamp-2 leading-snug mb-1
           text-gray-800 dark:text-gray-200"

// Location
className="text-xs flex items-center gap-1 
           text-gray-500 dark:text-gray-400"

// Location Icon (Online)
className="text-blue-500"

// Location Icon (Offline)
className="text-amber-500"
```

#### Footer Link
```jsx
className="p-4 text-center border-t 
           border-gray-100 dark:border-gray-700 
           bg-gray-50 dark:bg-gray-800/50"

// Link
className="text-sm font-medium hover:underline
           text-amber-600 dark:text-amber-400 
           hover:text-amber-700 dark:hover:text-amber-300"
```

### 4. Pastor Section (Horizontal Card)

#### Card Container
```jsx
className="rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl
           bg-white dark:bg-gray-800 
           border-gray-200 dark:border-gray-700"
```

#### Layout
```jsx
// Flex Container
className="flex flex-col sm:flex-row"

// Text Content (Left Side)
className="flex-1 p-8 flex flex-col justify-center order-2 sm:order-1"

// Photo Container (Right Side)
className="w-full sm:w-64 flex-shrink-0 order-1 sm:order-2"
```

#### Text Elements
```jsx
// Name
className="font-bold text-2xl mb-2 
           text-gray-900 dark:text-gray-100"

// Title
className="text-sm font-semibold uppercase tracking-wider mb-6
           text-amber-600 dark:text-amber-400"

// Motto Container
className="rounded-xl px-5 py-4 border-l-4 relative
           bg-amber-50 dark:bg-amber-500/10 
           border-amber-600 dark:border-amber-500"

// Quote Mark
className="absolute -top-3 left-4 text-4xl leading-none font-serif
           text-amber-400 dark:text-amber-500/40"

// Motto Text
className="text-base italic leading-relaxed pt-2
           text-gray-700 dark:text-gray-300"
```

#### Photo Section
```jsx
// Photo Container
className="relative h-64 sm:h-full bg-gradient-to-br from-amber-600 to-orange-700 
           flex items-center justify-center overflow-hidden"

// Placeholder Avatar
className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30 
           flex items-center justify-center backdrop-blur-sm shadow-lg"

// Initials
className="text-white font-bold text-4xl"

// Decorative Cross
className="absolute top-4 right-4 opacity-20"
```

### 5. Berita Section (Grid Cards)

#### Section Container
```jsx
className="py-16 transition-colors duration-300 
           bg-white dark:bg-gray-800"
```

#### Grid Layout
```jsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
```

#### Card
```jsx
// Card Container
className="group rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl 
           transition-all duration-300 hover:-translate-y-1 flex flex-col
           bg-white dark:bg-gray-800 
           border-gray-200 dark:border-gray-700"

// Thumbnail Container
className="relative h-48 overflow-hidden flex-shrink-0
           bg-gradient-to-br from-amber-50 to-orange-50 
           dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600"

// Image
className="w-full h-full object-cover group-hover:scale-105 
           transition-transform duration-500"

// Category Badge
className="absolute top-3 left-3 text-white text-xs font-semibold 
           px-3 py-1 rounded-full shadow-md
           bg-amber-600 dark:bg-amber-500"

// Placeholder Icon
className="w-16 h-16 text-amber-200 dark:text-gray-500"
```

#### Card Content
```jsx
// Content Container
className="p-5 flex flex-col flex-1"

// Title
className="font-bold text-base leading-snug mb-2 group-hover:text-amber-600 
           dark:group-hover:text-amber-400 transition-colors line-clamp-2
           text-gray-900 dark:text-gray-100"

// Excerpt
className="text-sm leading-relaxed line-clamp-3 flex-1
           text-gray-600 dark:text-gray-400"

// Footer
className="flex items-center justify-between mt-4 pt-3 border-t
           border-gray-100 dark:border-gray-700"

// Date
className="text-xs text-gray-400 dark:text-gray-500"

// Read More Link
className="text-sm font-semibold flex items-center gap-1
           text-amber-600 dark:text-amber-400 
           group-hover:text-amber-700 dark:group-hover:text-amber-300"
```

### 6. Footer Component

#### Container
```jsx
className="transition-colors duration-300
           bg-gray-900 dark:bg-black 
           text-gray-300"
```

#### Grid Layout
```jsx
className="grid grid-cols-1 md:grid-cols-3 gap-10"
```

#### Brand Section
```jsx
// Logo Container
className="flex items-center gap-3 mb-4"

// Logo Image
className="w-10 h-10 object-contain"

// Brand Name
className="text-white font-bold text-sm"

// Location
className="text-gray-500 text-xs"

// Description
className="text-sm text-gray-400 leading-relaxed"
```

#### Social Media
```jsx
// Container
className="flex items-center gap-3 mt-5"

// Social Button
className="w-9 h-9 rounded-full flex items-center justify-center 
           text-gray-400 transition-all duration-200
           bg-white/10 dark:bg-amber-500/10 
           hover:bg-white/20 dark:hover:bg-amber-500/20
           hover:text-red-400" // YouTube
           hover:text-pink-400" // Instagram
           hover:text-blue-400" // Facebook

// Icon
className="w-5 h-5"
```

#### Quick Links
```jsx
// Section Title
className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"

// Links Container
className="space-y-2.5"

// Link
className="text-sm text-gray-400 transition-colors duration-150 hover:underline
           hover:text-green-400 dark:hover:text-amber-400"
```

#### Map Section
```jsx
// Map Container
className="rounded-xl overflow-hidden border border-white/10 mb-3 shadow-lg"

// Map iframe
className="grayscale hover:grayscale-0 transition-all duration-300"

// Address Container
className="not-italic text-sm text-gray-400 leading-relaxed"

// Address Item
className="flex items-start gap-2"

// Icon
className="text-green-500 dark:text-amber-500 mt-0.5 flex-shrink-0"
```

#### Copyright
```jsx
className="mt-10 pt-6 border-t border-white/10 
           flex flex-col sm:flex-row justify-between items-center gap-3 
           text-xs text-gray-500"
```

## 🎭 Animasi & Transisi

### Keyframe Animations
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-6px)}
    to { opacity: 1; transform: translateY(0)}
}

@keyframes slideDown {
    from { opacity: 0; max-height: 0; }
    to { opacity: 1; max-height: 500px; }
}

@keyframes scrollDot {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(6px); opacity: 0.4; }
}
```

### Utility Classes
```jsx
// Fade In
className="animate-fadeIn"

// Slide Down
className="animate-slideDown"

// Scroll Dot
className="animate-scrollDot"

// Bounce (Built-in Tailwind)
className="animate-bounce"

// Pulse (Built-in Tailwind)
className="animate-pulse"
```

### Transition Classes
```jsx
// All Properties
className="transition-all duration-300"

// Colors Only
className="transition-colors duration-200"

// Transform Only
className="transition-transform duration-500"

// Hover Scale
className="hover:scale-105 active:scale-95"

// Hover Translate
className="hover:-translate-y-1"
```

## 📐 Layout Utilities

### Responsive Grid
```jsx
// 1 Column Mobile, 2 Tablet, 3 Desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 1 Column Mobile, 2 Desktop (Agenda & Pastor)
className="grid grid-cols-1 lg:grid-cols-2 gap-8"
```

### Flexbox
```jsx
// Center Items
className="flex items-center justify-center"

// Space Between
className="flex items-center justify-between"

// Vertical Stack
className="flex flex-col"

// Responsive Direction
className="flex flex-col sm:flex-row"

// Gap
className="flex gap-4" // 1rem
className="flex gap-2" // 0.5rem
```

### Spacing
```jsx
// Padding
className="p-4"   // 1rem all sides
className="px-4"  // 1rem horizontal
className="py-16" // 4rem vertical
className="p-5"   // 1.25rem all sides

// Margin
className="mb-6"  // 1.5rem bottom
className="mt-10" // 2.5rem top
className="mx-auto" // auto horizontal (centering)

// Space Between Children
className="space-y-2.5" // 0.625rem vertical
className="space-x-3"   // 0.75rem horizontal
```

### Sizing
```jsx
// Width
className="w-10"    // 2.5rem (40px)
className="w-16"    // 4rem (64px)
className="w-full"  // 100%
className="w-64"    // 16rem (256px)
className="max-w-7xl" // 80rem max width

// Height
className="h-10"    // 2.5rem (40px)
className="h-16"    // 4rem (64px)
className="h-48"    // 12rem (192px)
className="h-64"    // 16rem (256px)
className="min-h-screen" // 100vh
```

## 🎨 Color Palette Reference

### Amber Scale (Primary)
```jsx
amber-50   #fffbeb  // Lightest background
amber-100  #fef3c7
amber-200  #fde68a
amber-300  #fcd34d
amber-400  #fbbf24  // Hover states
amber-500  #f59e0b  // Primary accent
amber-600  #d97706  // Primary buttons
amber-700  #b45309  // Hover buttons
amber-800  #92400e
amber-900  #78350f  // Darkest
```

### Orange Scale (Accent)
```jsx
orange-50  #fff7ed
orange-300 #fdba74
orange-400 #fb923c
orange-500 #f97316
orange-600 #ea580c  // Gradients
orange-700 #c2410c
orange-800 #9a3412  // Hero gradient
orange-900 #7c2d12
```

### Gray Scale (Neutral)
```jsx
gray-50    #f9fafb  // Light backgrounds
gray-100   #f3f4f6  // Borders
gray-200   #e5e7eb  // Card borders
gray-300   #d1d5db
gray-400   #9ca3af  // Muted text
gray-500   #6b7280  // Secondary text
gray-600   #4b5563  // Body text
gray-700   #374151  // Dark hover
gray-800   #1f2937  // Dark cards
gray-900   #111827  // Dark background
black      #000000  // Darkest
```

## 🔧 Tailwind Config

### Dark Mode Configuration
```javascript
// tailwind.config.js
export default {
    darkMode: 'class', // Enable class-based dark mode
    // ... rest of config
}
```

### Custom Utilities (Already in CSS)
```css
.border-l-3 { 
    border-left-width: 3px; 
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

## 📱 Responsive Breakpoints

```jsx
// Tailwind Default Breakpoints
sm:  640px  // Small devices (tablets)
md:  768px  // Medium devices (small laptops)
lg:  1024px // Large devices (desktops)
xl:  1280px // Extra large devices
2xl: 1536px // 2X Extra large devices

// Usage Examples
className="text-sm sm:text-base lg:text-lg"
className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
className="hidden md:flex"
className="flex-col sm:flex-row"
```

## 🎯 Best Practices

### 1. Consistent Spacing
```jsx
// Use consistent spacing scale
gap-2, gap-4, gap-6, gap-8
p-4, p-5, p-6, p-8
mb-4, mb-6, mb-8, mb-10
```

### 2. Color Consistency
```jsx
// Light Mode: Amber/Orange
bg-amber-600, text-amber-600, hover:bg-amber-700

// Dark Mode: Amber with adjusted opacity
dark:bg-amber-500, dark:text-amber-400
```

### 3. Smooth Transitions
```jsx
// Always add transitions for interactive elements
className="transition-colors duration-200"
className="transition-all duration-300"
```

### 4. Hover States
```jsx
// Buttons
className="hover:bg-amber-700 hover:shadow-md hover:scale-105"

// Links
className="hover:text-amber-600 hover:underline"

// Cards
className="hover:shadow-xl hover:-translate-y-1"
```

### 5. Dark Mode Support
```jsx
// Always provide dark mode variants
className="bg-white dark:bg-gray-800"
className="text-gray-900 dark:text-gray-100"
className="border-gray-200 dark:border-gray-700"
```

## 🚀 Quick Reference

### Common Patterns

#### Card Component
```jsx
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                border border-gray-200 dark:border-gray-700 
                p-6 hover:shadow-xl transition-all duration-300">
    {/* Content */}
</div>
```

#### Button Primary
```jsx
<button className="px-6 py-3 bg-amber-600 dark:bg-amber-500 
                   text-white dark:text-gray-900 
                   rounded-full font-semibold 
                   hover:bg-amber-700 dark:hover:bg-amber-400 
                   transition-all duration-200 
                   shadow-md hover:shadow-lg 
                   active:scale-95">
    Click Me
</button>
```

#### Button Secondary
```jsx
<button className="px-6 py-3 border-2 border-amber-600 dark:border-amber-500 
                   text-amber-600 dark:text-amber-400 
                   rounded-full font-semibold 
                   hover:bg-amber-50 dark:hover:bg-amber-500/10 
                   transition-all duration-200">
    Click Me
</button>
```

#### Link
```jsx
<a className="text-amber-600 dark:text-amber-400 
              hover:text-amber-700 dark:hover:text-amber-300 
              hover:underline transition-colors duration-150">
    Link Text
</a>
```

#### Section Container
```jsx
<section className="py-16 bg-gray-50 dark:bg-gray-900 
                    transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
    </div>
</section>
```

## 📝 Notes

1. **Dark Mode Toggle**: Menggunakan state management di `Index.jsx` dan props drilling ke semua komponen
2. **Logo**: Menggunakan `/assets/images/logo.png` untuk logo GKI
3. **Font**: Georgia serif untuk headings, Figtree sans-serif untuk body
4. **Icons**: Menggunakan emoji dan SVG inline (tidak ada icon library eksternal)
5. **Animations**: Custom keyframes untuk fadeIn, slideDown, scrollDot
6. **Responsive**: Mobile-first approach dengan breakpoints sm, md, lg

## 🔄 Update & Maintenance

Untuk mengupdate styling:
1. Edit komponen di `resources/js/Components/`
2. Jalankan `npm run build` untuk compile
3. Refresh browser untuk melihat perubahan

Untuk menambah warna custom:
1. Edit `tailwind.config.js`
2. Tambahkan di `theme.extend.colors`
3. Rebuild dengan `npm run build`
