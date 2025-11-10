// البيانات
const PASSWORD = '612021';
const IMAGES = [
    {
        path: 'x\\IMG-20241030-WA0041.jpg',
        caption: 'كل صورة من دول بتحكي حكاية جميلة لينا. لما بشوفها بحس إن الدنيا كانت أبسط وأجمل.'
    },
    {
        path: 'x\\Snapchat-648441221.jpg',
        caption: 'ضحكتك كانت دايمًا مصدر راحتي. مفيش حاجة في الدنيا تعوض وجودك جنبي.'
    },
    {
        path: 'x\\Snapchat-1596629058.jpg',
        caption: 'كل لحظة جمعتنا كانت صدفة حلوة من ربنا. بحب التفاصيل الصغيرة اللي بينا.'
    },
    {
        path: 'x\\Snapchat-2067668975.jpg',
        caption: 'كل مرة ببص في عينيك بحس بالأمان. بحس إن قلبي لسه بيتطمن ليك.'
    },
    {
        path: '42\\x\\WhatsApp Image 2025-01-09 at 00.39.58_4ae4a2e0.jpg',
        caption: 'في وجودك كنت بحس إن الدنيا بتضحكلي. يمكن الصور دي أحسن دليل على كده.'
    },
    {
        path: '42\\x\\WhatsApp Image 2025-01-09 at 00.39.58_4c1479ff.jpg',
        caption: 'بحب الطريقة اللي كنت بتبصلي بيها في الصورة دي. فيها كل الكلام اللي مش بيتقال.'
    },
    {
        path: '42\\x\\WhatsApp Image 2025-01-09 at 00.39.58_b1701b37.jpg',
        caption: 'الذكريات دي بتفكرني قد إيه إحنا كنا حلوين سوا. ولسه الحنية دي جوانا.'
    },
    {
        path: '42\\x\\IMG-20240921-WA0006 - Copy.jpg',
        caption: 'عملت الموقع ده علشان أقولك إن الحب لسه موجود. وإنك لسه أغلى حاجة في حياتي.'
    },
    {
        path: '42\\x\\IMG-20240924-WA0070.jpg',
        caption: 'يمكن الوقت يغيّر حاجات، بس إحساسي بيك مبيتغيرش. لسه بحبك بنفس النقاء والبساطة دي.'
    }
];

let currentImageIndex = 0;
let isPasswordCorrect = false;

// التحقق من كلمة المرور
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    
    if (passwordInput.value === PASSWORD) {
        isPasswordCorrect = true;
        errorMsg.classList.remove('show');
        goToPage('messagePage');
        passwordInput.value = '';
    } else {
        errorMsg.textContent = 'كلمة المرور غير صحيحة. حاول مرة أخرى.';
        errorMsg.classList.add('show');
        passwordInput.value = '';
    }
}

// السماح بالضغط على Enter في حقل كلمة المرور
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    // تحميل الصورة الأولى في معرض الصور
    loadImage();
});

// الانتقال إلى صفحة محددة
function goToPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
}

// الصفحة التالية
function nextPage() {
    const pages = ['messagePage', 'videoPage', 'galleryPage'];
    let currentPage = null;
    
    for (let page of pages) {
        if (document.getElementById(page).classList.contains('active')) {
            currentPage = page;
            break;
        }
    }
    
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
        goToPage(pages[currentIndex + 1]);
    }
}

// الصفحة السابقة
function previousPage() {
    const pages = ['messagePage', 'videoPage', 'galleryPage'];
    let currentPage = null;
    
    for (let page of pages) {
        if (document.getElementById(page).classList.contains('active')) {
            currentPage = page;
            break;
        }
    }
    
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
        goToPage(pages[currentIndex - 1]);
    }
}

// تحميل الصورة الحالية
function loadImage() {
    const image = IMAGES[currentImageIndex];
    document.getElementById('galleryImage').src = image.path;
    document.getElementById('galleryCaption').textContent = image.caption;
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
    document.getElementById('totalImages').textContent = IMAGES.length;
}

// الصورة التالية
function nextImage() {
    if (currentImageIndex < IMAGES.length - 1) {
        currentImageIndex++;
        loadImage();
    }
}

// الصورة السابقة
function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        loadImage();
    }
}
