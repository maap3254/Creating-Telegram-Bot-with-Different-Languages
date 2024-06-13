const { Telegraf, Markup } = require('telegraf');
const fs = require('fs');
const enTranslations = require('./translations/en.json');
const amTranslations = require('./translations/am.json');
const bot = new Telegraf('YOUR TOKEN');
const admin_chat_id = "YOUR ADMIN ID TO GET USE THIS TELEGRAM BOT @useridinfobot";
const icons = {
    our_service: "💼",
    about_us: "ℹ️",
    faq: "❓",
    feedback: "✉️",
    work_with_us: "💻",
    website_category: "🌐",
    businesses_website: "🏢",
    blog_website: "📝",
    ecommerce: "🛒",
    nonprofit_website: "🏥",
    personal_website: "👤",
    profession: "👨",
    custom: "🛠️",
    travel_agency: "✈️",
    restaurant: "☕",
    construction: "👷",
    real_estate: "🏠",
    beauty_salon: "💇",
    news_site: "📰",
    travel_blog: "✈️📝",
    podcast: "🎧",
    magazine: "📖",
    online_shop: "🛍️",
    online_courses: "🎓",
    payment_integration: "💳",
    islamic_website: "🕌",
    church_website: "⛪",
    charity: "❤️",
    portfolio: "📂",
    artist: "🎨",
    photographer: "📷",
    medical: "⚕️",
    web_designer: "🖥️",
    law: "⚖️",
    consultant: "💼",
    change_language: "⬅️",
    english_language: "🇬🇧",
    amharic_language: "🇪🇹"
};
const enMainMenuKeyboard2 = {
    keyboard: [
    [`${icons.website_category} Website Category`], 
    [`${icons.change_language} Change Language`]
    ],
    resize_keyboard: true,
    one_time_keyboard: false // Set to false to keep the keyboard always visible
};
const amMainMenuKeyboard2 = {
    keyboard: [
    [`${icons.website_category} የድህረ-ገጽ መምረጥ`], 
    [`${icons.change_language} ቋንቋ ለመቀየር`]
    ],
    resize_keyboard: true,
    one_time_keyboard: false // Set to false to keep the keyboard always visible
};
const enMainMenuKeyboard = Markup.keyboard([
    [`${icons.website_category} Website Category`], 
    [`${icons.change_language} Change Language`]
]).resize();
const amMainMenuKeyboard = Markup.keyboard([
    [`${icons.website_category} የድህረ-ገጽ መምረጥ`], 
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const changelanguageKeyboard = Markup.keyboard([
     [`${icons.english_language} ${enTranslations.languages.en}`,
            `${icons.amharic_language} ${amTranslations.languages.am}`]
    ]).resize();

const websiteCategoryKeyboard = Markup.keyboard([
    [`${icons.businesses_website} Businesses Website`, `${icons.blog_website} Blog Website`, `${icons.ecommerce} E-commerce`],
    [`${icons.nonprofit_website} Non-profit Website`, `${icons.personal_website} Personal Website`],
    [`${icons.profession} Profession Website`, `${icons.custom} Custom Website`],
    [`${icons.change_language} Change Language`]
]).resize();

const amwebsiteCategoryKeyboard = Markup.keyboard([
    [`${icons.businesses_website} ለቢዝነስዎ`, `${icons.blog_website} ብሎግ ድህረ-ገጽ`, `${icons.ecommerce} ኢ-ኮሜርስ`],
    [`${icons.nonprofit_website} ለትርፍ ያልተቋቋመ ድርጅት`, `${icons.profession} ለሙያ`],
    [`${icons.personal_website} የግል ድህረ-ገጽ`, `${icons.custom} በራስዎ ምርጫ ማዘዝ`],
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();

const businessesWebsiteKeyboard = Markup.keyboard([
    [`${icons.travel_agency} Travel Agency`, `${icons.restaurant} Restaurant`],
    [`${icons.construction} Construction`, `${icons.real_estate} Real Estate`],
    [`${icons.beauty_salon} Beauty Salon`,`${icons.website_category} Back to Website Category`],
    [`${icons.change_language} Change Language`]
]).resize();
const ambusinessesWebsiteKeyboard = Markup.keyboard([
    [`${icons.travel_agency} የጉዞ ወኪል`, `${icons.restaurant} ምግብ ቤት`],
    [`${icons.construction} ለግንባታ`, `${icons.real_estate} እ.እስቴት`],
    [`${icons.beauty_salon} የውበት ሳሎን`,`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const blogWebsiteKeyboard = Markup.keyboard([
    [`${icons.news_site} News Site`, `${icons.travel_blog} Travel Blog`],
    [`${icons.podcast} Podcast`, `${icons.magazine} Magazine`],
    [`${icons.website_category} Back to Website Category`],
   [`${icons.change_language} Change Language`]
]).resize();
const amblogWebsiteKeyboard = Markup.keyboard([
    [`${icons.news_site} የዜና ድህረ-ገጽ`, `${icons.travel_blog} የጉዞ ብሎግ`],
    [`${icons.podcast} ፖድካስት`, `${icons.magazine} መጽሔት`],
    [`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],    
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const ecommerceKeyboard = Markup.keyboard([
    [`${icons.online_shop} Online Shop`, `${icons.online_courses} Online Courses`],
    [`${icons.payment_integration} Payment Integration`],
    [`${icons.website_category} Back to Website Category`],
    [`${icons.change_language} Change Language`]
]).resize();
const amecommerceKeyboard = Markup.keyboard([
    [`${icons.online_shop} የመስመር ላይ ሱቅ`, `${icons.payment_integration} ክፍያ ማገናኘት`],
    [`${icons.online_courses} የመስመር ላይ ትምህርት`],
    [`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],    
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const nonprofitWebsiteKeyboard = Markup.keyboard([
    [`${icons.church_website} Church Website`,`${icons.islamic_website} Islamic Website`],
    [`${icons.charity} Charity`],
    [`${icons.website_category} Back to Website Category`],
    [`${icons.change_language} Change Language`]
]).resize();
const amnonprofitWebsiteKeyboard = Markup.keyboard([
    [`${icons.church_website} የቤተ-ክርስቲያን ድህረ-ገጽ`],
    [`${icons.charity} በጎ አድራጎት`,`${icons.islamic_website} ኢስላማዊ ድህረ-ገጽ`],
    [`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],    
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const personalWebsiteKeyboard = Markup.keyboard([
    [`${icons.portfolio} Portfolio`, `${icons.artist} Artist`],
    [`${icons.photographer} Photographer`],
    [`${icons.website_category} Back to Website Category`],
    [`${icons.change_language} Change Language`]
]).resize();
const ampersonalWebsiteKeyboard = Markup.keyboard([
    [`${icons.portfolio} ፖርትፎሊዮ`, `${icons.artist} አርቲስት`],
    [`${icons.photographer} የፎቶግራፍ ድህረ-ገጽ`],
    [`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],    
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const professionKeyboard = Markup.keyboard([
    [ `${icons.consultant} Consultant`],
    [`${icons.law} Law`,`${icons.medical} Medical`],
    [`${icons.website_category} Back to Website Category`],
    [`${icons.change_language} Change Language`]
]).resize();
const amprofessionKeyboard = Markup.keyboard([
    [`${icons.medical} ለህክምና`, `${icons.consultant} ለአማካሪ`],
    [`${icons.law}ለህግ አካላት`],
    [`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`],    
    [`${icons.change_language} ቋንቋ ለመቀየር`]
]).resize();
const customKeyboard = Markup.keyboard([
]).resize();
const amcustomKeyboard = Markup.keyboard([
]).resize();
function getMainMenuKeyboard(lang) {
    const mainMenuKeyboard = lang === 'am' ? amMainMenuKeyboard : enMainMenuKeyboard;
    return mainMenuKeyboard;
}

function getMainMenuKeyboard2(lang) {
    const MainMenuKeyboard2 = lang === 'am' ? amMainMenuKeyboard2 : enMainMenuKeyboard2;
    return MainMenuKeyboard2;
}
bot.start((ctx) => {
    // Initialize session object if it's not already initialized
    ctx.session = ctx.session || {};
    // Send language selection keyboard
    ctx.reply(
        'Wellcome to our Website collection please Select your language\n \nእንኳን በደህና መጡ እባኮትን ቋንቋ ይምረጡ',
        Markup.keyboard([
            [`${icons.english_language} ${enTranslations.languages.en}`,
            `${icons.amharic_language} ${amTranslations.languages.am}`]
        ]).resize()
    );
});

// Command handler for language selection
bot.hears(`${icons.english_language} ${enTranslations.languages.en}`, (ctx) => {
    // Initialize session object if it's not already initialized
    ctx.session = ctx.session || {};
    // Set user's language to English
    ctx.session.language = 'en';
    // Send welcome message in English and display main menu keyboard
    sendWelcomeMessage(ctx, 'en');
});

bot.hears(`${icons.amharic_language} ${amTranslations.languages.am}`, (ctx) => {
    // Initialize session object if it's not already initialized
    ctx.session = ctx.session || {};
    // Set user's language to Amharic
    ctx.session.language = 'am';
    // Send welcome message in Amharic and display main menu keyboard
    sendWelcomeMessage(ctx, 'am');
});
function sendWelcomeMessage(ctx, lang) {
    const MainMenuKeyboard2 = getMainMenuKeyboard2(lang);
    let welcomeMessage = '';
    let imageData = '';
  if (lang === 'en') {
        welcomeMessage = `Hello, @${ctx.message.from.username || "there"}!\nAgain wellcome to our website collection plseas select websitie category what youwant.`;
        imageData = fs.readFileSync('/home/ethiodan/nodevenv/ibro.com/aboutus2.png');
    } else if (lang === 'am') {
        welcomeMessage = `ሰላም @${ctx.message.from.username || "ሰላም"}! \nበድጋሚ እንኳን ደህና መጡ ወደ ድረ-ገጻችን ስብስብ እባክዎን የሚፈልጉትን የድረ-ገጽ ምድብ ይምረጡ `;
        imageData = fs.readFileSync('/home/ethiodan/nodevenv/ibro.com/aboutus.png');
    }
    ctx.replyWithPhoto({ source: imageData }, {
        caption: welcomeMessage,
        reply_markup: MainMenuKeyboard2
    });
}
bot.hears(`${icons.website_category} Website Category`, (ctx) => {
    ctx.reply('Website Category', websiteCategoryKeyboard);
});
bot.hears(`${icons.website_category} የድህረ-ገጽ መምረጥ`, (ctx) => {
    ctx.reply('የድህረ-ገጽ መምረጥ', amwebsiteCategoryKeyboard);
});
bot.hears(`${icons.website_category} Back to Website Category`, (ctx) => {
    ctx.reply('Back to Website Category', websiteCategoryKeyboard);
});
bot.hears(`${icons.website_category} ወደ ድህረ-ገጽ ምድብ ለመመለስ`,(ctx) => {
    ctx.reply('ወደ ድህረ-ገጽ ምድብ ለመመለስ', amwebsiteCategoryKeyboard);
});
bot.hears(`${icons.change_language} Change Language`, (ctx) => {
    ctx.reply('Change Language', changelanguageKeyboard);
});
bot.hears(`${icons.change_language} ቋንቋ ለመቀየር`, (ctx) => {
    ctx.reply('ቋንቋ ለመቀየር', changelanguageKeyboard);
});
bot.hears(`${icons.businesses_website} Businesses Website`, (ctx) => {
    ctx.reply('Businesses Website Menu', businessesWebsiteKeyboard);
});
bot.hears(`${icons.businesses_website} ለቢዝነስዎ`, (ctx) => {
    ctx.reply('ለቢዝነስዎ', ambusinessesWebsiteKeyboard);
});
bot.hears(`${icons.blog_website} Blog Website`, (ctx) => {
    ctx.reply('Blog Website', blogWebsiteKeyboard );
});
bot.hears(`${icons.blog_website} ብሎግ ድህረ-ገጽ`, (ctx) => {
    ctx.reply('ብሎግ ድህረ-ገጽ', amblogWebsiteKeyboard );
});
bot.hears(`${icons.ecommerce} E-commerce`, (ctx) => {
    ctx.reply('E-commerce Website Menu', ecommerceKeyboard);
});
bot.hears(`${icons.ecommerce} ኢ-ኮሜርስ`, (ctx) => {
    ctx.reply('ኢ-ኮሜርስ', amecommerceKeyboard);
});
bot.hears(`${icons.nonprofit_website} Non-profit Website`, (ctx) => {
    ctx.reply('Non-profit Website Menu', nonprofitWebsiteKeyboard);
});
bot.hears(`${icons.nonprofit_website} ለትርፍ ያልተቋቋመ ድርጅት`,(ctx) => {
    ctx.reply('ለትርፍ ያልተቋቋመ ድርጅት', amnonprofitWebsiteKeyboard);
});
bot.hears(`${icons.personal_website} Personal Website`, (ctx) => {
    ctx.reply('Personal Website Menu', personalWebsiteKeyboard);
});
bot.hears(`${icons.personal_website} የግል ድህረ-ገጽ`, (ctx) => {
    ctx.reply('የግል ድህረ-ገጽ', ampersonalWebsiteKeyboard);
});
bot.hears(`${icons.profession} Profession Website`, (ctx) => {
    ctx.reply('Profession Website Menu', professionKeyboard);
});
bot.hears(`${icons.profession} ለሙያ`, (ctx) => {
    ctx.reply('ለሙያ', amprofessionKeyboard);
});
bot.hears(`${icons.custom} Custom Website`, (ctx) => {
    const product = "Custom Website";
    const message = `Welcome! We specialize in crafting custom websites designed just for you. Our mission is to build a digital space that truly reflects your brand and helps you achieve your goals.\n\nOur team is all about creativity, functionality, and user experience. Whether you're a small business, startup, or large corporation, we're here to work closely with you. We'll listen to your needs, understand your vision, and then create a tailor-made website solution that fits perfectly.\n\nReady to stand out online? Let's bring your vision to life!`;

    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Click here we will contact you', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.custom} በራስዎ ምርጫ ማዘዝ`,(ctx) => {
    const product = "በራስዎ ምርጫ ማዘዝ`";
    const message = `እንኳን ደህና መጣህ! ለእርስዎ ብቻ የተነደፉ ድረ-ገጾችን በመስራት ላይ ልዩ ነን። የእኛ ተልእኮ የምርት ስምዎን በእውነት የሚያንፀባርቅ እና ግቦችዎን ለማሳካት የሚረዳ ዲጂታል ቦታ መገንባት ነው።\n

ቡድናችን ስለ ፈጠራ፣ ተግባራዊነት እና የተጠቃሚ ተሞክሮ ነው። አነስተኛ ንግድ፣ ጅምር ወይም ትልቅ ኮርፖሬሽን፣ ከእርስዎ ጋር በቅርበት ለመስራት እዚህ መጥተናል። ፍላጎቶችዎን እናዳምጣለን፣ ራዕይዎን እንረዳለን፣ እና ከዛም በትክክል የሚስማማ በብስለት የተሰራ የድር ጣቢያ መፍትሄ እንፈጥራለን።`;

    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'እዚህ ጠቅ ያድርጉ እኛ እናገኝዎታለን', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const travel2ImagePath = '/home/ethiodan/nodevenv/ibro.com/travel.png';
bot.hears(`${icons.travel_agency} Travel Agency`, async (ctx) => {
    const product = "Travel Agency";
    const message = `Offers website development and design services tailored for travel agencies, ensuring an attractive online presence and user-friendly experience for travelers.`;
   await ctx.replyWithPhoto({ source: travel2ImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/travel/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.travel_agency} የጉዞ ወኪል`, async (ctx) => {
    const product = "የጉዞ ወኪል";
    const message = `እንኳን በደህና ወደ እኛ መድረክ በደህና መጡ፣ ለጉዞ ኤጀንሲዎች ብቻ የሚገርሙ ድረ-ገጾችን በመፍጠር የላቀ ነው። አላማችን ለመንገደኞች የምታቀርባቸውን አስገራሚ ገጠመኞች እና መድረሻዎችን የሚያጎላ ህያው የመስመር ላይ ተገኝነትን ልንሰጥህ ነው።\nመዳረሻዎችን፣ ስፖትላይት የጉብኝት ፓኬጆችን እንዲያሳዩ እና ለደንበኞችዎ ቦታ ማስያዝን እንዲያቃልሉ እናደርጋለን`;

    await ctx.replyWithPhoto({ source: travel2ImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/travel/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const menuImagePath = '/home/ethiodan/nodevenv/ibro.com/menu.png';
bot.hears(`${icons.restaurant} Restaurant`, async (ctx) => {
    const product = "Restaurant";
    const message = `Welcome to our platform! We design beautiful restaurant websites that showcase your unique atmosphere and offerings. Let's create an irresistible online presence for your restaurant together!`;

    await ctx.replyWithPhoto({ source: menuImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/catering/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.restaurant} ምግብ ቤት`, async (ctx) => {
    const product = "ምግብ ቤት";
    const message = `እንኳን ወደ በደህና መጡ! ልዩ ድባብዎን እና አቅርቦቶችዎን የሚያሳዩ የሚያማምሩ የምግብ ቤት ድረ-ገጾችን እንሰራለን `;
     await ctx.replyWithPhoto({ source: menuImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/catering/'},
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const conImagePath = '/home/ethiodan/nodevenv/ibro.com/_con.jpg';
bot.hears(`${icons.construction} Construction`,async (ctx) => {
    const product = "Construction";
    const message = `Offers professional website development and design services for construction companies, showcasing projects, services, and expertise in the construction industry.`;
    await ctx.replyWithPhoto({ source: conImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://orbitmaap.com/construction' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.construction} ለግንባታ`, async(ctx) => {
    const product = "ለግንባታ";
    const message = `ለኮንስትራክሽን ኩባንያዎች ሙያዊ የድረ-ገጽ ልማት እና ዲዛይን አገልግሎቶችን ያቀርባል፣ ፕሮጀክቶችን፣ አገልግሎቶችን እና በኮንስትራክሽን ኢንዱስትሪ ውስጥ ያለውን እውቀት ያሳያል።`;

     await ctx.replyWithPhoto({ source: conImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://orbitmaap.com/construction' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const realImagePath = '/home/ethiodan/nodevenv/ibro.com/real.png';
bot.hears(`${icons.real_estate} Real Estate`, async(ctx) => {
    const product = "Real Estate";
    const message = `Delivers customized website development and design services for real estate agencies, facilitating property listings, virtual tours, and client interactions for buying, selling, or renting properties.`;
   await ctx.replyWithPhoto({ source: realImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://orbitmaap.com/realestate/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.real_estate} እ.እስቴት`, async(ctx) => {
    const product = "እ.እስቴት";
    const message = `ለሪል እስቴት ኤጀንሲዎች ድረ-ገጽ ያቀርባል፣ የንብረት ዝርዝሮችን፣ ምናባዊ ጉብኝቶችን እና የደንበኛ ግንኙነቶችን ለመግዛት፣ ለመሸጥ ወይም ለመከራየት።`;

    await ctx.replyWithPhoto({ source: realImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://orbitmaap.com/realestate/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.beauty_salon} Beauty Salon`, (ctx) => {
    const product = "Beauty Salon";
    const message = `Crafts visually appealing websites for beauty salons, highlighting services, expertise, and ambiance to attract potential clients and streamline appointment bookings and inquiries.`;
    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://demo.phlox.pro/beauty-salon/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.beauty_salon} የውበት ሳሎን`, (ctx) => {
    const product = "የውበት ሳሎን";
    const message = `የውበት ሳሎኖች ድረ-ገጾችን በማድመቅ አገልግሎቶችን፣ እውቀትን እና ድባብ ደንበኞችን ለመሳብ እና የቀጠሮ ማስያዣዎችን እና ጥያቄዎችን ለማቀላጠፍ።`;
    ctx.reply(message, {
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://demo.phlox.pro/beauty-salon/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const newsImagePath = '/home/ethiodan/nodevenv/ibro.com/news.png';
bot.hears(`${icons.news_site} News Site`, async(ctx) => {
    const product = "News Site";
    const message = `Deliver timely and engaging content with a dynamic news website tailored to your audience's interests. From sleek design to seamless navigation, we'll create a platform that keeps readers informed and captivated.`;
    await ctx.replyWithPhoto({ source: newsImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://themegrilldemos.com/colormag-dark/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});   

bot.hears(`${icons.news_site} የዜና ድህረ-ገጽ`,async (ctx) => {
    const product = "የዜና ድህረ-ገጽ";
    const message = `
ለአንባቢዎች አዳዲስ ዜናዎችን እና መረጃዎችን በቀላሉ ማግኘት እንዲችሉ አሳታፊ የመስመር ላይ መድረክን በማረጋገጥ ለዜና ጣቢያዎች የተበጁ የድር ጣቢያ አገልግሎቶችን ይሰጣል።`;
    await ctx.replyWithPhoto({ source: newsImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ናሙና', url: 'https://themegrilldemos.com/colormag-dark/' },
                    { text: 'ማዘዝ', callback_data: `GOODboy_${product}` }
                ]
            ]
        }
    });
}); 
const travelImagePath = '/home/ethiodan/nodevenv/ibro.com/travel.png';
bot.hears(`${icons.travel_blog} Travel Blog`, async (ctx) => {
    const product = "Travel Blog";
    const message = ` Provides extensive website development and design services for travel blogs, improving their online visibility and presenting captivating travel stories and advice to readers.`;
 await ctx.replyWithPhoto({ source: travelImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://startersites.io/blocksy/travel/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears( `${icons.travel_blog} የጉዞ ብሎግ`, async (ctx) => {
    const product = "የጉዞ ብሎግ";
     const message = `
ለጉዞ ብሎጎች ሰፊ የድር ጣቢያ አገልግሎቶችን እናቀርባለን ፣የመስመር ላይ ታይነታቸውን በማሻሻል እና ማራኪ የጉዞ ታሪኮችን እና ምክሮችን ለአንባቢዎች እናቀርባለን።`;
    await ctx.replyWithPhoto({ source: travelImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                   { text: 'ናሙና', url: 'https://startersites.io/blocksy/travel/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});





const podcastImagePath = '/home/ethiodan/nodevenv/ibro.com/podcast_.png';

bot.hears(`${icons.podcast} Podcast`, async (ctx) => {
    const product = "Podcast";
    const message = `Offers professional website development and design services for podcasts, providing a user-friendly platform for listeners to discover, stream, and engage with podcast episodes.`;
    await ctx.replyWithPhoto({ source: podcastImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://www.joerogan.com/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});

bot.hears(`${icons.podcast} ፖድካስት`, async (ctx) => {
    const product = "ፖድካስት";
    const message = `ለፖድካስቶች ፕሮፌሽናል የድር ጣቢያ አገልግሎቶችን ያቀርባል፣ አድማጮች ከፖድካስት ክፍሎች ጋር እንዲያውቁ፣ እንዲያሰራጩ እና እንዲሳተፉ ለተጠቃሚ ምቹ የሆነ መድረክ ያቀርባል።`;

    await ctx.replyWithPhoto({ source: podcastImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ናሙና', url: 'https://www.joerogan.com/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});



const news2ImagePath = '/home/ethiodan/nodevenv/ibro.com/news2.png';
bot.hears(`${icons.magazine} Magazine`, async (ctx) => {
    const product = "Magazine";
    const message = `Delivers customized website development and design services for online magazines, offering readers an immersive experience to explore articles, features, and multimedia content.`;
    await ctx.replyWithPhoto({ source: news2ImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://themegrilldemos.com/colormag-02/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.magazine} መጽሔት`, async (ctx) => {
    const product = "መጽሔት`";
    const message = `ጽሑፎችን እና የመልቲሚዲያ ይዘቶችን ለመዳሰስ ለአንባቢዎች መሳጭ ልምድ በመስጠት ለኦንላይን መጽሔቶች የድር ጣቢያ አገልግሎቶችን ይሰጣል።`;

     await ctx.replyWithPhoto({ source: news2ImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://themegrilldemos.com/colormag-02/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const onlineshopImagePath = '/home/ethiodan/nodevenv/ibro.com/onlineshop.png';
bot.hears(`${icons.online_shop} Online Shop`, async (ctx) => {
    const product = "Online Shop";
    const message = `We build and customize e-commerce platforms, integrate secure payment systems, manage product catalogs, and optimize user experience for online shops.`;
     await ctx.replyWithPhoto({ source: onlineshopImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://startersites.io/blocksy/garderobe/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.online_shop} የመስመር ላይ ሱቅ`, async (ctx) => {
    const product = "የመስመር ላይ ሱቅ`";
    const message = `የኢ-ኮሜርስ መድረኮችን እንገነባለን እና እናዘጋጃለን፣ ደህንነታቸው የተጠበቁ የክፍያ ሥርዓቶችን እናዋህዳለን፣ የምርት ካታሎጎችን እናስተዳድራለን፣ እና የመስመር ላይ ሱቆች የተጠቃሚ ተሞክሮን እናሳድጋለን።`;

    await ctx.replyWithPhoto({ source: onlineshopImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ናሙና', url: 'https://startersites.io/blocksy/garderobe/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const lmsImagePath = '/home/ethiodan/nodevenv/ibro.com/lms.png';
bot.hears(`${icons.online_courses} Online Courses`, async (ctx) => {
    const product = "Online Courses";
    const message = `Develop engaging learning experiences with our expertise in building learning management systems, multimedia content delivery, assessment modules, and cross-platform compatibility.`;

await ctx.replyWithPhoto({ source: lmsImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Sample', url: 'https://maapdemy.com/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});

bot.hears(`${icons.online_courses} የመስመር ላይ ትምህርት`, async (ctx) => {
    const product = "የመስመር ላይ ትምህርት";
    const message = `
የአመራር ሥርዓቶች፣ የመልቲሚዲያ ይዘት አቅርቦት፣ የግምገማ ሞጁሎች ያላቸው ምርጥ የመማሪያ ድረ-ገጾችን እንገነባለን።`;

    await ctx.replyWithPhoto({ source: lmsImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ናሙና', url: 'https://maapdemy.com/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const payImagePath = '/home/ethiodan/nodevenv/ibro.com/pay.jpg';
bot.hears(`${icons.payment_integration} Payment Integration`, async(ctx) => {
    const product = "Payment Integration";
    const message = `Assists in integrating secure payment systems into websites, ensuring smooth transactions for online purchases and course enrollments.`;
    await ctx.replyWithPhoto({ source: payImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.payment_integration} ክፍያ ማገናኘት`, async(ctx) => {
    const product = " ክፍያ ማገናኘት";
    const message = `ደህንነታቸው የተጠበቁ የክፍያ ሥርዓቶችን ወደ ድረ-ገጾች በማጣመር  የመስመር ላይ ክፍያዎን ቀላል እናደርገዋለን`;
   await ctx.replyWithPhoto({ source: payImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const islamImagePath = '/home/ethiodan/nodevenv/ibro.com/islamic.jpg';
bot.hears(`${icons.islamic_website} Islamic Website`, async (ctx) => {
    const product = "Islamic Website";
    const message = `Provide a digital platform for Islamic communities. Offer resources such as prayer times, Quranic studies, and community outreach programs to strengthen faith and connection.`;
    await ctx.replyWithPhoto({ source: islamImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.islamic_website} ኢስላማዊ ድህረ-ገጽ`, async (ctx) => {
    const product = "ኢስላማዊ ድህረ-ገጽ";
     const message = `ለእስልምና ማህበረሰቦች ዲጂታል መድረክ ያቅርቡ። እምነትን እና ግንኙነትን ለማጠናከር እንደ የጸሎት ጊዜያት፣ የቁርዓን ጥናቶች እና የማህበረሰብ ተደራሽነት ፕሮግራሞች ያሉት`;
    await ctx.replyWithPhoto({ source: islamImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ማዘዝ', callback_data: `GOODboy_${product}` }
                ]
            ]
        }
    });
});
const churchImagePath = '/home/ethiodan/nodevenv/ibro.com/church.png';
bot.hears(`${icons.church_website} Church Website`, async (ctx) => {
    const product = "Church Website";
    const message = `Create an online presence for churches and religious organizations. Offer features like event calendars, sermon archives, and donation portals to engage members and visitors.`;
    await ctx.replyWithPhoto({ source: churchImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.church_website} የቤተ-ክርስቲያን ድህረ-ገጽ`,async (ctx) => {
    const product = "የቤተ-ክርስቲያን ድህረ-ገጽ";
    const message = `ለአብያተ ክርስቲያናት እና ለሃይማኖታዊ ድርጅቶች የመስመር ላይ ተገኝነት ይፍጠሩ። አባላትን እና ጎብኝዎችን ለማሳተፍ እንደ የክስተት ቀን መቁጠሪያ፣ የስብከት ማህደር እና ልገሳ ያሉት`;
    await ctx.replyWithPhoto({ source: churchImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ማዘዝ', callback_data: `GOODboy_${product}` }
                ]
            ]
        }
    });
});

const charityImagePath = '/home/ethiodan/nodevenv/ibro.com/charity.png';
bot.hears(`${icons.charity} Charity`, async (ctx) => {
    const product = "Charity";
    const message = `Support charitable causes and community initiatives. Offer opportunities for fundraising, volunteering, and spreading awareness about various social issues and humanitarian efforts.`;
    await ctx.replyWithPhoto({ source: charityImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/charity/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});

bot.hears(`${icons.charity} በጎ አድራጎት`, async (ctx) => {
    const product = "በጎ አድራጎ";
     const message = `የበጎ አድራጎት እና የማህበረሰብ ተነሳሽነቶችን ይደግፉ። ስለተለያዩ ማህበራዊ ጉዳዮች እና ሰብአዊ ጥረቶች ግንዛቤን ለማሰባሰብ፣በጎ ፈቃደኝነት ለመስራት እና ለማስፋፋት`;
    await ctx.replyWithPhoto({ source: charityImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/charity/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const aportoImagePath = '/home/ethiodan/nodevenv/ibro.com/porto2.png';
bot.hears(`${icons.portfolio} Portfolio`, async (ctx) => {
    const product = "Portfolio";
    const message = `Showcase your professional achievements, skills, and projects with a personalized portfolio website. Impress potential employers or clients by highlighting your work in a visually appealing and organized manner.`;
 await ctx.replyWithPhoto({ source: aportoImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/beverr/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.portfolio} ፖርትፎሊዮ`, async (ctx) => {
    const product = "ፖርትፎሊዮ";
    const message = `የእርስዎን ሙያዊ ስኬቶች፣ ችሎታዎች እና ፕሮጄክቶች በግል ከተበጁ የፖርትፎሊዮ ድር ጣቢያ ጋር። ስራዎን በሚታይ እና በተደራጀ መልኩ በማድመቅ ሊሆኑ የሚችሉ አሰሪዎችን ወይም ደንበኞችን ያስደምሙ።`;
   await ctx.replyWithPhoto({ source: aportoImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/beverr/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const artistImagePath = '/home/ethiodan/nodevenv/ibro.com/artist.png';
bot.hears(`${icons.artist} Artist`, async(ctx) => {
    const product = "Artist";
    const message = `Establish your online presence as an artist with a dedicated website. Display your artworks, share your creative process, and connect with art enthusiasts and potential buyers to promote your talent and expand your audience.`;
    await ctx.replyWithPhoto({ source: artistImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.artist} አርቲስት`, async (ctx) => {
    const product = "አርቲስት";
    const message = `የጥበብ ስራዎችዎን ያሳዩ፣ የፈጠራ ሂደትዎን ያካፍሉ፣ እና ከጥበብ አድናቂዎች እና ገዥዎች ጋር ይገናኙ የእርስዎን ችሎታ ለማስተዋወቅ እና ታዳሚዎን ለማስፋት።`;
   await ctx.replyWithPhoto({ source: artistImagePath }, {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const photoImagePath = '/home/ethiodan/nodevenv/ibro.com/photo.png';
bot.hears(`${icons.photographer} Photographer`,  async (ctx) => {
    const product = "Photographer";
    const message = `Elevate your photography business with a professional website. Display your stunning images, offer photography services, and provide a platform for clients to view and purchase prints. Engage with your audience by sharing photography tips, behind-the-scenes stories, and client testimonials.`;
    await ctx.replyWithPhoto({ source: photoImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/photo-studio/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.photographer} የፎቶግራፍ ድህረ-ገጽ`,  async (ctx) => {
    const product = "የፎቶግራፍ ድህረ-ገጽ";
    const message = `በፕሮፌሽናል ድር ጣቢያ የፎቶግራፍ ንግድዎን ያሳድጉ። አስደናቂ ምስሎችዎን ያሳዩ፣ የፎቶግራፍ አገልግሎቶችን ይስጡ እና ደንበኞች ህትመቶችን እንዲመለከቱ እና እንዲገዙ መድረክ ያቅርቡ። የፎቶግራፍ ጠቃሚ ምክሮችን፣ ከትዕይንት በስተጀርባ ያሉ ታሪኮችን እና የደንበኛ ምስክርነቶችን በማጋራት ከታዳሚዎችዎ ጋር ይሳተፉ።`;
   await ctx.replyWithPhoto({ source: photoImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/photo-studio/' },
                    { text: 'ማዘዝ', callback_data: `GOODboy_${product}` }
                ]
            ]
        }
    });
});
const medicalImagePath = '/home/ethiodan/nodevenv/ibro.com/medical.png';
bot.hears(`${icons.medical} Medical`, async (ctx) => {
    const product = "Medical";
    const message = `Enhance patient engagement and showcase your services with a visually appealing and informative website for your medical practice.`;
    await ctx.replyWithPhoto({ source: medicalImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/smile-dent/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.medical} ለህክምና`, async (ctx) => {
    const product = "ለህክምና";
    const message = `የታካሚ ተሳትፎን ያሳድጉ እና አገልግሎቶችዎን ለህክምና ልምምድ በሚታይ ማራኪ እና መረጃ ሰጭ ድር ጣቢያ ያሳዩ።`;
     await ctx.replyWithPhoto({ source: medicalImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'ናሙና', url: 'https://startersites.io/blocksy/smile-dent/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const consultImagePath = '/home/ethiodan/nodevenv/ibro.com/consulting.jpg';
bot.hears(`${icons.consultant} Consultant`, async (ctx) => {
    const product = "Consultant";
    const message = `Amplify your consultancy business with a compelling online platform that reflects expertise and communicates services effectively.`;
await ctx.replyWithPhoto({ source: consultImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://demo.phlox.pro/consulting/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.consultant} ለአማካሪ`, async (ctx) => {
    const product = "ለአማካሪ";
    const message = `እውቀትን በሚያንፀባርቅ እና አገልግሎቶችን በብቃት የሚያስተላልፍ \nየመስመር ላይ መድረክ የማማከር ስራዎን ያሳድጉ።`;
    await ctx.replyWithPhoto({ source: consultImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'ናሙና', url: 'https://demo.phlox.pro/consulting/' },
                     { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
const lawImagePath = '/home/ethiodan/nodevenv/ibro.com/law.png';
bot.hears(`${icons.law} Law`, async (ctx) => {
    const product = "Law";
    const message = `Establish a professional and authoritative online presence for your legal practice, instilling trust and facilitating client communication.`;
    await ctx.replyWithPhoto({ source: lawImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                     { text: 'Sample', url: 'https://startersites.io/blocksy/justice/' },
                    { text: 'Order', callback_data: `order_${product}` }
                ]
            ]
        }
    });
});
bot.hears(`${icons.law}ለህግ አካላት`, async (ctx) => {
    const product = "ለህግ አካላት";
    const message = `እምነትን ለማፍራት እና የደንበኛ ግንኙነትን በማመቻቸት ለህጋዊ አሰራርዎ ባለሙያ`;
    await ctx.replyWithPhoto({ source: lawImagePath }, {
    caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                      { text: 'ናሙና', url: 'https://startersites.io/blocksy/justice/' },
                    { text: 'ማዘዝ', callback_data: `GOOD_${product}` }
                ]
            ]
        }
    });
});
bot.action(/GOODboy_(.*)/, (ctx) => {
    const product = ctx.match[1]; // Extract product name from callback data
    
    const username = ctx.from.username; // Retrieve the username of the user

    // Notify the admin
    if (username) {
        bot.telegram.sendMessage(admin_chat_id, `ተጠቃሚ ${username} ${product}ን አዟል። በቴሌግራም ተጠቃሚ ስማቸው @${username} በኩል ያግኙዋቸው።`);
    } else {
        // Prompt the user to set their username
        ctx.reply(`የቴሌግራም ስምህ አልተዘጋጀም። እኛ እርስዎን ለማግኘት እባክዎ ስምዎን ያዘጋጁ። Click on your profile picture -> Edit -> Username.`);
        bot.telegram.sendMessage(admin_chat_id, `A user has ordered ${product}. However, their Telegram username is not available. They have been prompted to set their username.`);
    }

    // Send specific notification to the user
   // Notify the user that their order has been received and provide further instructions via Telegram
ctx.reply(`ሰላም @${username || "ሰላም"}!   ${product} ትዕዛዝህ ደርሷል! የቴሌግራም ስምህን ተመልክተናል እና ስለ ${product} ተጨማሪ ዝርዝሮችን ለመስጠት በቅርቡ እናገኝሃለን።`);

  
});
bot.action(/GOOD_(.*)/, (ctx) => {
    const product = ctx.match[1]; // Extract product name from callback data
    
    const username = ctx.from.username; // Retrieve the username of the user

    // Notify the admin
    if (username) {
        bot.telegram.sendMessage(admin_chat_id, `ተጠቃሚ ${username} ${product}ን አዟል። በቴሌግራም ተጠቃሚ ስማቸው @${username} በኩል ያግኙዋቸው።`);
    } else {
        // Prompt the user to set their username
        ctx.reply(`የቴሌግራም ስምህ አልተዘጋጀም። እኛ እርስዎን ለማግኘት እባክዎ ስምዎን ያዘጋጁ። Click on your profile picture -> Edit -> Username.`);
        bot.telegram.sendMessage(admin_chat_id, `A user has ordered ${product}. However, their Telegram username is not available. They have been prompted to set their username.`);
    }

    // Send specific notification to the user
   // Notify the user that their order has been received and provide further instructions via Telegram
ctx.reply(`ሰላም @${username || "ሰላም"}! ${product} ትዕዛዝህ ደርሷል! የቴሌግራም ስምህን ተመልክተናል እና ስለ ${product} ድህረ-ገጽ ተጨማሪ ዝርዝሮችን ለመስጠት በቅርቡ እናገኝሃለን።`);

  
});
bot.action(/order_(.*)/, (ctx) => {
    const product = ctx.match[1]; // Extract product name from callback data
    
    const username = ctx.from.username; // Retrieve the username of the user

    // Notify the admin
    if (username) {
        bot.telegram.sendMessage(admin_chat_id, `User ${username} has ordered ${product}. Contact them via their Telegram username: @${username}.`);
    } else {
        // Prompt the user to set their username
        ctx.reply(`Your Telegram username is not set. Please set your username so we can contact you. Click on your profile picture -> Edit -> Username.`);
        bot.telegram.sendMessage(admin_chat_id, `A user has ordered ${product}. However, their Telegram username is not available. They have been prompted to set their username.`);
    }

    // Send specific notification to the user
   // Notify the user that their order has been received and provide further instructions via Telegram
ctx.reply(`Hello, @${username || "there"}! Your order for ${product} has been received! We have noted your Telegram username and will contact you shortly to provide more details about ${product}.`);
});
bot.catch((err, ctx) => {
    console.error(`Error encountered: ${err}`);
    ctx.reply('Sorry, something went wrong.');
});
bot.launch();
