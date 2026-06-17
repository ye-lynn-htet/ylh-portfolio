I want to build my premium professional portfolio website in `src/app/page.tsx` using Next.js (App Router), TypeScript, and Tailwind CSS. 

Please pass this task directly to the `ui-engineer` subagent, and ensure the instructions inside the `frontend-design` and `vercel-react-best-practices` skills are strictly followed.

### Structural Requirements
Please structure the page with a clean, scrollable layout containing the following exact sections:

1. **Header / Navigation:** 
   - Minimalist header with my name "Ye Lynn Htet" and quick-jump navigation links to Skills, Experience, Projects, and Contact.

2. **Hero / Introduction Section (Strict Constraints):**
   - Must feature a bold, minimalist headline.
   - Must contain an introductory sentence that is exactly or very close to 10 words stating: "I'm a professional Mobile Developer crafting high-performance iOS and Flutter applications."
   - Include a clean call-to-action button (e.g., "View My Work").
   - Create orbit animation with provided skills and rotating automatically

3. **Technical Skills Section:**
   - Group my skills dynamically into modern visual badges or cards:
     * *Languages/Frameworks:* UIKit, SwiftUI, Swift, Flutter, Dart, Python, FastAPI
     * *Reactive & Data:* RxSwift, RxCocoa, Combine, Riverpods, Realm, CoreData, Firebase, RestAPI, WebSocket, MQTT
     * *Tools/Agile:* GitHub, SourceTree, Backlog
     * *Specialized SDKs:* GoogleMap, Zoom, VdoCipher, BrightCove, TSC Barcode SDKs

4. **Professional Experience Section:**
   - Display a beautifully styled vertical timeline or interactive card layout outlining my career:
     * *Telaaxon* | Senior Application Developer (Jan 2025 - Present) -> Focusing on Flutter refactoring, remote rehabilitation systems via MQTT, and collaborating with tech leads.
     * *CODIGO* | Senior iOS Developer (Nov 2023 - Oct 2024) -> Built SPOTV NOW (streaming) and Pet Lovers Centre (e-commerce), integrating BrightCove SDK, In-App purchases, and Biometrics.
     * *Binary Lab* | Senior iOS Developer (Feb 2023 - Nov 2023) -> Developed SAYA and MCPA applications with Zoom/VdoCipher SDKs, WebSockets, and secure Apple Keychain services.
     * *Light Idea Software Development* | iOS Developer (Jun 2021 - Feb 2023) -> Built iOS apps from scratch using MVVM and RxSwift, including Flash Mall EPOS system (Bluetooth print integration) and Sonix Delivery.

5. **Projects Grid Section:**
   - Create a clean 2- or 3-column responsive grid displaying key highlights:
     * *SPOTV NOW App* (SwiftUI, Combine, Realm, BrightCove SDK) AppStore link => https://apps.apple.com/sg/app/spotv-now-sports-streaming/id1585915793
     * *SAYA - English Learning App* (UIKit, ZoomSDK, VdoCipher) AppStore link => https://apps.apple.com/sg/app/saya-the-learning-app/id1612592914
     * *Kakely App* (Flutter, Dart, Riverpods, RestAPI,) AppStore link => https://apps.apple.com/jp/app/kakely/id6642692743?l=en-US
     * *Pet Lovers Centre App* (UIKit, RxSwift, Realm) AppStore link => https://apps.apple.com/jp/app/plc-vip-concierge-sg/id1471953601?l=en-US
     * *Flash Mall EPOS System* (UIKit, Bluetooth printing, TSC Barcode SDK) AppStore link => https://apps.apple.com/jp/app/flash-mall-shop-epos/id1637021280?l=en-US
   - Each project card should cleanly list the tech stack tags and include slick placeholder buttons for "View on AppStore" or "GitHub".

6. **Footer / Contact Information:**
   - A highly professional, clean footer section showcasing my personal contact channels:
     * Email: yelynnhtet22798@gmail.com
     * Phone: +817085453784
     * Location: Kobe, Japan
     * LinkedIn: linkedin.com/yelynnhtet
     * GitHub: github.com/ye-lynn-htet

### Extra Requirements
- **Asset Generation:** If any iconography, abstract background shapes, or brand logos are needed, please generate clean inline SVGs or custom Tailwind shapes rather than relying on external image networks.
- **Workflow:** Once the code is written and verified, use the `puppeteer` server to inspect `http://localhost:3000` to visually check layout alignment, then run `git add .` and stage a commit with message `feat: build complete mobile developer portfolio structure`.