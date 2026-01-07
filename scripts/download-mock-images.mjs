import { existsSync, mkdirSync, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const mockDir = join(publicDir, 'mock');

// Image definitions with picsum seeds for consistency
const images = [
  // Hero/Large images (1600x900 - breed)
  { name: 'hero-1.jpg', seed: 'aluvera-hero-1', width: 1600, height: 900 },
  { name: 'hero-2.jpg', seed: 'aluvera-hero-2', width: 1600, height: 900 },
  { name: 'hero-3.jpg', seed: 'aluvera-hero-3', width: 1600, height: 900 },
  { name: 'hero-4.jpg', seed: 'aluvera-hero-4', width: 1600, height: 900 },
  
  // Project/Realisaties images (800x600 - landscape)
  { name: 'project-1.jpg', seed: 'aluvera-project-1', width: 800, height: 600 },
  { name: 'project-2.jpg', seed: 'aluvera-project-2', width: 800, height: 600 },
  { name: 'project-3.jpg', seed: 'aluvera-project-3', width: 800, height: 600 },
  { name: 'project-4.jpg', seed: 'aluvera-project-4', width: 800, height: 600 },
  { name: 'project-5.jpg', seed: 'aluvera-project-5', width: 800, height: 600 },
  { name: 'project-6.jpg', seed: 'aluvera-project-6', width: 800, height: 600 },
  
  // Detail/Close-up images (600x600 - square for materials)
  { name: 'detail-1.jpg', seed: 'aluvera-detail-1', width: 600, height: 600 },
  { name: 'detail-2.jpg', seed: 'aluvera-detail-2', width: 600, height: 600 },
  { name: 'detail-3.jpg', seed: 'aluvera-detail-3', width: 600, height: 600 },
  { name: 'detail-4.jpg', seed: 'aluvera-detail-4', width: 600, height: 600 },
  
  // Blog images (800x450 - 16:9)
  { name: 'blog-1.jpg', seed: 'aluvera-blog-1', width: 800, height: 450 },
  { name: 'blog-2.jpg', seed: 'aluvera-blog-2', width: 800, height: 450 },
  { name: 'blog-3.jpg', seed: 'aluvera-blog-3', width: 800, height: 450 },
  
  // Product images (800x500)
  { name: 'product-1.jpg', seed: 'aluvera-product-1', width: 800, height: 500 },
  { name: 'product-2.jpg', seed: 'aluvera-product-2', width: 800, height: 500 },
  { name: 'product-3.jpg', seed: 'aluvera-product-3', width: 800, height: 500 },
  { name: 'product-4.jpg', seed: 'aluvera-product-4', width: 800, height: 500 },
  { name: 'product-5.jpg', seed: 'aluvera-product-5', width: 800, height: 500 },
  { name: 'product-6.jpg', seed: 'aluvera-product-6', width: 800, height: 500 },
  
  // Craftsmanship/Vakmanschap image
  { name: 'craftsmanship-1.jpg', seed: 'aluvera-craft-1', width: 800, height: 600 },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(filepath);
    
    https.get(url, (response) => {
      // Handle redirects (picsum.photos uses 302)
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirectedResponse) => {
          redirectedResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  console.log('🖼️  Aluvera Mock Images Downloader\n');
  
  // Create mock directory if it doesn't exist
  if (!existsSync(mockDir)) {
    mkdirSync(mockDir, { recursive: true });
    console.log('📁 Created directory: public/mock/\n');
  }
  
  let downloaded = 0;
  let skipped = 0;
  
  for (const img of images) {
    const filepath = join(mockDir, img.name);
    
    // Skip if file already exists
    if (existsSync(filepath)) {
      console.log(`⏭️  Skipping ${img.name} (already exists)`);
      skipped++;
      continue;
    }
    
    const url = `https://picsum.photos/seed/${img.seed}/${img.width}/${img.height}`;
    
    try {
      console.log(`⬇️  Downloading ${img.name}...`);
      await downloadImage(url, filepath);
      console.log(`✅ Saved ${img.name}`);
      downloaded++;
      
      // Small delay to be nice to the server
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      console.error(`❌ Failed to download ${img.name}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${images.length}`);
  console.log('\n✨ Done!');
}

main().catch(console.error);
