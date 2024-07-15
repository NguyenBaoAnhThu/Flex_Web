import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import HomePage2 from "pages/Home_Page2";
import HomePage3 from "pages/Home_Page3";
import Demo2 from "pages/Demo2";
import Demo3 from "pages/Demo3";
import Demo4 from "pages/Demo4";
import Demo5 from "pages/Demo5";
import Demo6 from "pages/Demo6";
import Demo7 from "pages/Demo7";
import Demo8 from "pages/Demo8";
import HomePage4 from "pages/Home_Page4";
import About from "pages/About";
import Contact from "pages/Contact";
import Features from "pages/Features";
import Error from "pages/Error";
import Business from "pages/Business";
import Fashion from "pages/Fashion";
import FashionPage2 from "pages/FashionPage2";
import FashionPage3 from "pages/FashionPage3";
import Featured from "pages/Featured";
import Photography from "pages/Photography";
import PhotographyPage2 from "pages/PhotographyPage2";
import PhotographyPage3 from "pages/PhotographyPage3";
import TravelCategogy from "pages/TravelCategory";
import Uncategorized from "pages/Uncategorized";
import Art from "pages/Art";
import ArtPage2 from "pages/ArtPage2";
import ArtPage3 from "pages/ArtPage3";
import BusinessTags from "pages/Business_Tags";
import BusinessPage2 from "pages/Business_Tags2";
import BusinessPage3 from "pages/Business_Tags3";
import ColdPlayBenefit from "pages/Posts/ColdPlayBenefit";
import BackToDrake from "pages/Posts/BackToDrake";
import MyWinterDiary from "pages/Posts/MyWinterDiary";
import TheColdWeather from "pages/Posts/TheColdWeather";
import PhotographerDiary from "pages/Posts/PhotographerDiary";
import MyExteriorBehaviors from "pages/Posts/MyExteriorBehaviors";
import LongLegsWalking from "pages/Posts/LongLegsWalking";
import PageDefault from "pages/Posts/PageDefault/index";
import PostFullWidth from "pages/Posts/PostFullWidth/index";
import PageLeftSidebar from "pages/Posts/PageLeftSidebar/index";
import PageRightSidebar from "pages/Posts/PageRightSidebar/index";
import PageFullWidth from "pages/Posts/PageFullWidth/index";
import DesignTags from "pages/Design_Tags/index";
import DesignPage2 from "pages/Design_Tags2/index";
import DesignPage3 from "pages/Design_Tags3/index";
import DesignPage4 from "pages/Design_Tags4/index";
import FashionTags from "pages/Fashion_Tags/index";
import Lifestyle from "pages/Lifestyle/index";
import Lifestyle2 from "pages/Lifestyle2/index";
import Music from "pages/Music/index";
import Music2 from "pages/Music2/index";
import PhotographyTags1 from "pages/Photography_Tags1/index";
import PhotographyTags2 from "pages/Photography_Tags2/index";
import Travel_Tags from "pages/Travel_Tags/index";
import ForestHungerGame from "pages/Posts/ForestHungerGame/index";
import TheSecretsOfRelationships from "pages/Posts/TheSecretsOfRelationships/index";
import LanscapePhotoWalk from "pages/Posts/LanscapePhotoWalk/index";
import MyPersonalAround from "pages/Posts/MyPersonalAround/index";
import ObjectPhotography from "pages/Posts/ObjectPhotography/index";
import FlowerFiesta from "pages/Posts/FlowerFiesta/index";
import GossipInTheTown from "pages/Posts/GossipInTheTown/index";
import YourPersona from "pages/Posts/YourPersona/index";
import MoveThinkingForward from "pages/Posts/MoveThinkingForward/index";
import LetTheBaggageGo from "pages/Posts/LetTheBaggageGo/index";
import BeautifulLight from "pages/Posts/BeautifulLight/index";
import CrustiesCones from "pages/Posts/CrustiesCones/index";
import SaturdayNight from "pages/Posts/SaturdayNight/index";
import ChaseYourDreams from "pages/Posts/ChaseYourDreams/index";
import GoneWithTheWind from "pages/Posts/GoneWithTheWind/index";
import ReasonToBeHappy from "pages/Posts/ReasonToBeHappy/index";
import TeaWithSugar from "pages/Posts/TeaWithSugar/index";
import SleepingBeauty from "pages/Posts/SleepingBeauty/index";
import WildLikeWorkshop from "pages/Posts/WildLikeTheWorkshop/index";
import ElevationPhotosInTrend from "pages/Posts/ElevationPhotosInTrend/index";
import LazySundayMorning from "pages/Posts/LazySundayMorning/index";
import JazzyHaultersInTrend from "pages/Posts/JazzyHaultersInTrend/index";

const publicRouters = [
  // không cần đăng nhập vẫn xem được
  { path: "/", component: Home },
  { path: "/Home/Page/2", component: HomePage2 },
  { path: "/Home/Page/3", component: HomePage3 },
  { path: "/Home/Page/4", component: HomePage4 },
  { path: "/demo=2", component: Demo2, layout: null },
  { path: "/demo=3", component: Demo3, layout: null },
  { path: "/demo=4", component: Demo4, layout: null },
  { path: "/demo=5", component: Demo5, layout: null },
  { path: "/demo=6", component: Demo6, layout: null },
  { path: "/demo=7", component: Demo7, layout: null },
  { path: "/demo=8", component: Demo8, layout: null },
  { path: "/about", component: About, layout: null },
  { path: "/contact", component: Contact, layout: null },
  {
    path: "/features",
    component: Features,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      featuresClassName: "custom-features-class",
    },
  },
  { path: "/wp-comments-post.php", component: Error, layout: null },
  {
    path: "/category/business",
    component: Business,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "BUSINESS",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameBusiness: "custom-business-class" },
  },
  {
    path: "/category/fashion",
    component: Fashion,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FASHION",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/category/fashion/page/2/",
    component: FashionPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FASHION",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/category/fashion/page/3/",
    component: FashionPage3,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FASHION",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/category/featured",
    component: Featured,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FEATURED",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameFeatured: "custom-featured-class" },
  },
 {
    path: "/category/photography",
    component: Photography,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNamePhotography: "custom-photography-class" },
  },
  {
    path: "/category/photography/page/2/",
    component: PhotographyPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNamePhotography: "custom-photography-class" },
  },
  {
    path: "/category/photography/page/3/",
    component: PhotographyPage3,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNamePhotography: "custom-photography-class" },
  },
  {
    path: "/category/travel",
    component: TravelCategogy,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "TRAVEL",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameTravel: "custom-travel-class" },
  },
  {
    path: "/category/uncategorized",
    component: Uncategorized,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "UNCATEGORIZED",
    headerProps: { customHomeClassName: "custom-home-class" },
    sidebarProps: { classNameUncategorized: "custom-uncategorized-class" },
  },
  {
    path: "/tag/art/",
    component: Art,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "ART",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/art/page/2/",
    component: ArtPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "ART",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/art/page/3/",
    component: ArtPage3,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "ART",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/business/",
    component: BusinessTags,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "BUSINESS",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/business/page/2/",
    component: BusinessPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "BUSINESS",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/business/page/3/",
    component: BusinessPage3,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "BUSINESS",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/design/",
    component: DesignTags,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "DESIGN",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/design/page/2/",
    component: DesignPage2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "DESIGN",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/design/page/3/",
    component: DesignPage3,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "DESIGN",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/design/page/4/",
    component: DesignPage4,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "DESIGN",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/design/",
    component: DesignTags,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "DESIGN",
    headerProps: { customHomeClassName: "custom-home-class" },
  },  
  {
    path: "/tag/fashion/",
    component: FashionTags,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "FASHION",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/lifestyle/",
    component: Lifestyle,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "LIFESTYLE",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/lifestyle/page/2/",
    component: Lifestyle2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "LIFESTYLE",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/music/",
    component: Music,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "MUSIC",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/music/page/2/",
    component: Music2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "MUSIC",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/photography/",
    component: PhotographyTags1,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/photography/page/2/",
    component: PhotographyTags2,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "PHOTOGRAPHY",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/tag/travel/",
    component: Travel_Tags,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "TRAVEL",
    headerProps: { customHomeClassName: "custom-home-class" },
  },
  {
    path: "/coldplay-beneath/",
    component: ColdPlayBenefit,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName9 : "custom-video-posts"
    },
  },
  {
    path: "/back-to-drake/",
    component: BackToDrake,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName10 : "custom-audio-posts"
    },
  },
  {
    path: "/my-winter-diary/",
    component: MyWinterDiary,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName11 : "custom-slideshow"
    },
  },
  {
    path: "/the-cold-weather/",
    component: TheColdWeather,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName12 : "custom-gallery-post"
    },
  },
  {
    path: "/photographers-diary/",
    component: PhotographerDiary,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName13 : "custom-image-post"
    },
  },
  {
    path: "/my-exterior-behaviors/",
    component: MyExteriorBehaviors,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName14 : "custom-quote-post"
    },
  },  
  {
    path: "/long-legs-walking/",
    component: LongLegsWalking,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      customPostClassName :"custom-post-class",
      tableCellClassName15 : "custom-link-post"
    },
  }, 
  {
    path: "/forest-hunger-game/",
    component: ForestHungerGame,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
    },
  }, 
  {
    path: "/the-secrets-of-relationships/",
    component: TheSecretsOfRelationships,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/lanscape-photo-walk/",
    component: LanscapePhotoWalk,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/my-persona-around/",
    component: MyPersonalAround,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/object-photography/",
    component: ObjectPhotography,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/flower-fiesta/",
    component: FlowerFiesta,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/gossip-in-the-town/",
    component: GossipInTheTown,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/your-persona/",
    component: YourPersona,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/move-thinking-forward/",
    component: MoveThinkingForward,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
    },
  }, 
  {
    path: "/let-the-baggage-go/",
    component: LetTheBaggageGo,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/beautiful-light/",
    component: BeautifulLight,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/crusties-cones/",
    component: CrustiesCones,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/saturday-night/",
    component: SaturdayNight,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/chase-your-dreams/",
    component: ChaseYourDreams,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/gone-with-the-wind/",
    component: GoneWithTheWind,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/reason-to-be-happy/",
    component: ReasonToBeHappy,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/tea-with-sugar/",
    component: TeaWithSugar,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/sleeping-beauty/",
    component: SleepingBeauty,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  {
    path: "/wild-like-workshop/",
    component: WildLikeWorkshop,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/elevation-photos-in-trend/",
    component: ElevationPhotosInTrend,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/lazy-sunday-morning/",
    component: LazySundayMorning,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      photographyClassName: "custom-photography"
    },
  }, 
  {
    path: "/jazzy-haulters-in-trend/",
    component: JazzyHaultersInTrend,
    hideUnderHeader: true,
    headerProps: {
      customHomeClassName: "custom-home-class",
      fashionClassName: "custom-fashion"
    },
  }, 
  { path: "/postlayout=full", component: PostFullWidth, layout: null },
  { path: "/page-default/", component: PageDefault, layout: null ,  },
  { path: "/page-left-sidebar/", component: PageLeftSidebar, layout: null ,  },
  { path: "/page-right-sidebar/", component: PageRightSidebar, layout: null ,  },
  { path: "/page-full-width-alternate/", component: PageFullWidth, layout: null ,  },
  { path: "/following", component: Following, hideUnderHeader: true },
  { path: "/upload", component: Upload, hideUnderHeader: true },
];

const privateRouters = [
  // nếu không đăng nhập thì dẫn tới trang login
];

export { publicRouters, privateRouters };
