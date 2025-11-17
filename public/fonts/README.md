# Rimba Andalas Font Installation

## 📁 Font Files Required

To use the Rimba Andalas font properly, you need to add the following font files to the `/public/fonts/` directory:

### Required Font Files:
- `RimbaAndalas-Regular.woff2`
- `RimbaAndalas-Regular.woff`
- `RimbaAndalas-Regular.ttf`
- `RimbaAndalas-Bold.woff2`
- `RimbaAndalas-Bold.woff`
- `RimbaAndalas-Bold.ttf`

### Optional Weight Variations:
- `RimbaAndalas-Light.woff2`
- `RimbaAndalas-Medium.woff2`
- `RimbaAndalas-SemiBold.woff2`

## 🔍 Where to Find Rimba Andalas Font

### Option 1: Download from Font Sources
1. **DaFont** - Search for "Rimba Andalas"
2. **Google Fonts** - Check if available
3. **Font Squirrel** - Free commercial fonts
4. **Adobe Fonts** - If you have Creative Cloud

### Option 2: Font Foundries
- **MyFonts.com**
- **Fontspring.com**
- **Typography.com**

## ⚡ Current Fallback System

The website is configured with intelligent fallbacks:

```css
Primary: 'Rimba Andalas'
Fallback 1: 'Kalam' (Google Fonts - Similar style)
Fallback 2: 'Berkshire Swash' (Decorative script)
Fallback 3: 'Griffy' (Rough, jungle-like)
Fallback 4: System fonts
```

## 🎨 Font Usage Classes

Once installed, you can use these classes:

- `.rimba-font` - Regular Rimba Andalas
- `.rimba-bold` - Bold Rimba Andalas  
- `.rimba-display` - Enhanced display version
- `.jungle-title` - Main headings with effects
- `.jungle-text` - Body text with subtle effects

## 📝 Installation Steps

1. **Download Rimba Andalas font files**
2. **Convert to web formats** (if only TTF available):
   - Use online converters like CloudConvert
   - Generate WOFF2, WOFF, and TTF formats
3. **Place files in `/public/fonts/` directory**
4. **Test the font** by refreshing your website

## 🔧 Troubleshooting

### Font Not Loading?
1. Check file paths in `/public/fonts/`
2. Verify font file names match exactly
3. Check browser developer tools for 404 errors
4. Clear browser cache

### Font Licensing
- Ensure you have proper licensing for web use
- Some fonts require commercial licenses
- Check font license terms before deployment

## 🌟 Current Status

✅ Font configuration applied
✅ Fallback fonts loaded  
✅ CSS utilities created
⏳ Waiting for actual Rimba Andalas font files

The website will use the closest available fonts until you add the actual Rimba Andalas files!