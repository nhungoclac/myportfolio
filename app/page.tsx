"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  TrendingUp,
  Users,
  ShoppingCart,
  BarChart3,
  Target,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Inter } from "next/font/google";
import { useState, useCallback } from "react";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const projects = [
  {
    title: "Đội Công tác Xã hội UIT",
    description: [
      {
        heading: "Tổng quan:",
        items: [
          'Fanpage: <a href="https://www.facebook.com/ctxh.uit" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">ctxh.uit</a>',
          "Viết bài, lên ý tưởng cho một số chương trình/chiến dịch, phân công nhiệm vụ, theo dõi tiến độ, nhận xét và đánh giá",
        ],
      },
      {
        heading: "Nhiệm vụ thực hiện:",
        items: [
          "Viết content cho Fanpage <strong>10,000</strong> lượt theo dõi",
          'Nắm chính truyền thông, lên ý tưởng Hoa đa sắc, lên lịch đăng bài, phân công nhiệm vụ, kiểm duyệt sản phẩm, theo dõi tiến độ cho chương trình Bán hoa gây quỹ 2023: <a href="https://docs.google.com/spreadsheets/d/1vvj9rSdFEX_Z28CA56C9kXrgcwClHco_6Xol576UzVs/edit?gid=1648728078#gid=1648728078" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link sheet quản lý</a>',
          'Kết hợp cùng bạn Đạt (nắm chính Design) để lên ý tưởng bài viết, lịch đăng bài, phân công cho truyền thông Tết 2023: <a href="https://docs.google.com/spreadsheets/d/1X7WaLM6a8O78jQCfMgtvw-g5Zq9_wq-W9Rz4fBZoppo/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link sheet quản lý</a>',
          'Cùng các thành viên thảo luận ý tưởng kịch bản, hỗ trợ viết script cho video Sinh nhật Đội 2023: <a href="https://www.facebook.com/ctxh.uit/videos/1601088950373159" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link bài đăng</a>',
        ],
      },
    ],
    metrics: "Thành viên Ban Truyền Thông (10/2022-05/2025)",
    technologies: ["Google Sheet", "Lập kế hoạch", "Sáng tạo nội dung"],
    images: [
      "ctxh.png?height=300&width=400&text=Facebook+Ads+Dashboard",
      "bhgq.png?height=300&width=400&text=Google+Analytics+Report",
      "tet2023.png?height=300&width=400&text=Shopify+Store+Performance",
      "tt.jpg?height=300&width=400&text=ROI+Growth+Chart",
    ],
  },
  {
    title: "Đồ án Thiết kế hệ thống TMĐT",
    description: [
      {
        heading: "Tổng quan:",
        items: [
          'Website tĩnh: <a href="https://mydecobox.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">mydecobox.netlify.app</a>',
        ],
      },
      {
        heading: "Nhiệm vụ thực hiện:",
        items: [
          "Học cách sử dụng WordPress",
          "Cài đặt Flatsome, dùng WooCommerce để tối ưu web Thương mại điện tử",
          "Thành viên nhóm chia nhau chỉnh giao diện bằng UX Builder và CSS",
          "Cài các plugin như VietQR, Translate, Vị trí Việt Nam,...",
          "Kết nối API và webhook để lấy trạng thái thanh toán,...",
          "Tải về file tĩnh của website và deploy lên Netlify",
          'Liên kết với Make.com và dùng AppScript để theo dõi đơn hàng mới và thanh toán mới trong Google Sheet: <a href="https://docs.google.com/spreadsheets/d/13o9OQQ_iSza7RDBVB3kmZiEGfiGGeH2WfmM3pWLQX7w/edit?gid=694812382#gid=694812382" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link sheet</a>',
        ],
      },
    ],
    metrics: "Thành viên nhóm (10/2024-02/2025)",
    technologies: ["Wordpress", "make.com", "CSS"],
    images: [
      "decobox1.png?height=300&width=400&text=Facebook+Ads+Dashboard",
      "decobox2.png?height=300&width=400&text=Google+Analytics+Report",
      "decobox3.png?height=300&width=400&text=Shopify+Store+Performance",
      "figuri1.png?height=300&width=400&text=ROI+Growth+Chart",
    ],
  },
  {
    title: "Đồ án Digital Marketing và CRM",
    description: [
      {
        heading: "Tổng quan:",
        items: [
          'Fanpage: <a href="https://www.facebook.com/delifoodvietnam" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Delifood</a>',
          "Phân tích khách hàng, lên ý tưởng chính, lập kế hoạch, lên lịch đăng bài, phân công thành viên, viết bài, thiết kế ảnh, theo dõi hiệu quả bằng Meta Business, Tiktok Analytics, Google Analytics,...",
          "Dùng Hubspot để tạo lead form và cài workflow tự động gửi email",
        ],
      },
      {
        heading: "Một số thiết kế hình ảnh",
        items: [
          'Thiết kế landing page bằng Figma: <a href="https://www.figma.com/design/bp8TIzDrGAPV26AvrmFNka/Landing-page?node-id=0-1&p=f&t=qX7hKbA4QBI1vHeV-0" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Figma</a>',
          'Thiết kế ảnh sản phẩm 1: <a href="https://www.canva.com/design/DAGXmZkyZ-o/HAeF3ex2qQeQtwRt5XLogQ/edit?utm_content=DAGXmZkyZ-o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế ảnh sản phẩm 2: <a href="https://www.canva.com/design/DAGZAT9km_Q/65Vsbdkp1Vh-72ZSz3m-xA/edit?utm_content=DAGZAT9km_Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế ảnh sản phẩm 3: <a href="https://www.canva.com/design/DAGn_QKoD0c/PXUsoOR144IGQj-2KOCBUg/edit?utm_content=DAGn_QKoD0c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế ảnh sản phẩm 4: <a href="https://www.canva.com/design/DAGn9vXb0cs/bsXurSZABeMGNX-Tu538QQ/edit?utm_content=DAGn9vXb0cs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế nhãn sản phẩm: <a href="https://www.canva.com/design/DAGn6flUJw0/w1k1h15T-RquRGSW6Q3vYw/edit?utm_content=DAGn6flUJw0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
        ],
      },
      {
        heading: "Một số sheet chính:",
        items: [
          'Xác định khách hàng: <a href="https://docs.google.com/spreadsheets/d/1EGUwO55bduOgcLzJZj3gteLVLCtAs5K1W9p23G5uOaY/edit?gid=375562390#gid=375562390" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800"> Link sheet</a>',
          'Định hướng nội dung: <a href="https://docs.google.com/spreadsheets/d/1EGUwO55bduOgcLzJZj3gteLVLCtAs5K1W9p23G5uOaY/edit?gid=625374556#gid=625374556" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800"> Link sheet</a>',
          'Phân công và theo dõi: <a href="https://docs.google.com/spreadsheets/d/1EGUwO55bduOgcLzJZj3gteLVLCtAs5K1W9p23G5uOaY/edit?gid=1556179973#gid=1556179973" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800"> Link sheet</a>',
        ],
      },
      {
        heading: "Kết quả:",
        items: [
          "<strong>7,500</strong> lượt xem trong tháng đầu",
          "<strong>12,600</strong> lượt xem tổng đến 06/2025 (hiện đã dừng hoạt động do kết thúc môn)",
          "Đạt <strong>9/10</strong> Digital Marketing (cao nhất lớp)",
          'File tự đánh giá: <a href="https://docs.google.com/document/d/1A8JeJhsUhVVWsnTgY09tDh70kTX-5PR_zLag70-UXGs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800"> Link</a>',
        ],
      },
    ],
    metrics: "Trưởng nhóm (10/2024-02/2025)",
    technologies: [
      "Google Sheet",
      "Lập kế hoạch",
      "Viết bài",
      "Figma",
      "Canva",
      "Google Search Console",
      "Meta Business",
      "Tiktok Analytics",
      "Google Analytics",
    ],
    images: [
      "deliladi.png?height=300&width=400&text=SEO+Rankings+Report",
      "delifood.png?height=300&width=400&text=Organic+Traffic+Growth",
      "overview.png?height=300&width=400&text=Content+Strategy+Plan",
      "timeline.png?height=300&width=400&text=Keyword+Performance",
      "direction.png?height=300&width=400&text=Content+Strategy+Plan",
      "fanpage.png?height=300&width=400&text=Content+Strategy+Plan",
      "kqdelifood.png?height=300&width=400&text=Content+Strategy+Plan",
    ],
  },
  {
    title: "Đồ án Quản trị sự kiện",
    description: [
      {
        heading: "Tổng quan:",
        items: [
          'Fanpage: <a href="https://www.facebook.com/profile.php?id=61573903788008" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Bật Ký Ức</a>',
          "Lên ý tưởng cho các bài đăng, lên lịch đăng bài, phân công nhiệm vụ, thiết kế hình ảnh, viết bài, theo dõi tiến độ",
        ],
      },
      {
        heading: "Một số thiết kế hình ảnh",
        items: [
          'Sheet quản lý: <a href="https://docs.google.com/spreadsheets/d/1mJlcgfrEx1YWf-kBRo6YstH9mF9kMjDoVEzXC6FoT70/edit?gid=1577216854#gid=1577216854" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link</a>',
          'Thiết kế 1: <a href="https://www.canva.com/design/DAGj2L7PFno/bh0SxYb22h2VrzHxyf6vWQ/edit?utm_content=DAGj2L7PFno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế 2: <a href="https://www.canva.com/design/DAGj7mAJ0Uo/KwA_KCWZ4GS4_E03XVTRhA/edit?utm_content=DAGj7mAJ0Uo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link Canva</a>',
          'Thiết kế 3 (edit bằng Canva Pro và Capcut): <a href="https://www.facebook.com/reel/1194475582317617" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Link bài đăng</a>',
        ],
      },
      {
        heading: "Kết quả:",
        items: [
          "<strong>21,000</strong> lượt xem trong tháng đầu",
          "<strong>24,600</strong> lượt xem tổng đến 06/2025 (hiện đã dừng hoạt động do kết thúc môn)",
          "Đạt <strong>100%</strong> người tham gia so với kỳ vọng",
          "Có nhiều <strong>phản hồi tích cực</strong> về khâu tổ chức và truyền thông",
        ],
      },
    ],
    metrics: "Trưởng ban Truyền thông",
    technologies: [
      "Google Sheet",
      "Lập kế hoạch",
      "Viết bài",
      "Canva",
      "Meta Business",
      "Tiktok Analytics",
    ],
    images: [
      "bku.png?height=300&width=400&text=Email+Funnel+Design",
      "direct.png?height=300&width=400&text=Conversion+Analytics",
      "canva.png?height=300&width=400&text=A/B+Test+Results",
      "kqbku.png?height=300&width=400&text=Automation+Workflow",
    ],
  },
];

const ImageCarousel = ({
  images,
  projectTitle,
}: {
  images: string[];
  projectTitle: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className="relative aspect-video bg-gray-100 overflow-hidden group">
      <img
        src={images[currentImageIndex] || "/placeholder.svg"}
        alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Portfolio() {
  const skills = [
    {
      name: "Làm việc nhóm",
      icon: <Target className="w-5 h-5" />,
      descriptions: [
        "Hòa đồng, chủ động trong công việc",
        "Có chính kiến riêng nhưng không bảo thủ, luôn lắng nghe góp ý để hoàn thiện",
        "Tôn trọng tất cả thành viên. Luôn cố gắng hoàn thành công việc",
      ],
    },
    {
      name: "Khả năng tự học",
      icon: <TrendingUp className="w-5 h-5" />,
      descriptions: [
        "Tìm tài liệu, tự nghiên cứu kiến thức mới",
        "Biết sử dụng AI để hỗ trợ tìm nguồn nhưng không bị phụ thuộc",
        "Sẵn sàng học hỏi, làm quen với các công cụ mới để phục vụ cho công việc",
        "Luôn kiểm tra lại độ chính xác trước khi đưa ra công bố",
        "Đọc hiểu báo cáo số liệu, phân tích báo cáo,...",
      ],
    },
    {
      name: "Phân tích số liệu",
      icon: <TrendingUp className="w-5 h-5" />,
      descriptions: [
        "Theo dõi hiệu suất bằng Meta Business, Tiktok Analytics, Google Analytics",
      ],
    },
    {
      name: "Lên ý tưởng & lập kế hoạch",
      icon: <BarChart3 className="w-5 h-5" />,
      descriptions: [
        "Nghiên cứu để đưa ra ý tưởng truyền thông hợp lý",
        "Sử dụng Google Sheet để lập kế hoạch cho chiến dịch",
        "Biết dùng Appscript để code tính năng cần thiết cho sheet công việc",
      ],
    },
    {
      name: "Đọc hiểu HTML, CSS",
      icon: <Users className="w-5 h-5" />,
      descriptions: [
        "Đọc hiểu được html, css để thiết kế giao diện website, landing page",
      ],
    },
    {
      name: "Thiết kế",
      icon: <ShoppingCart className="w-5 h-5" />,
      descriptions: [
        "Có thể vẽ sơ lược ý tưởng thiết kế để hỗ trợ cho Designer",
        "Biết sử dụng Canva để thiết kế poster, avatar, ảnh bìa,...",
        "Biết sử dụng Figma cơ bản để thiết kế giao diện website",
        "Có khả năng tìm từ khóa để sử dụng mẫu thiết kế phù hợp",
      ],
    },
    {
      name: "SEO & Content Marketing",
      icon: <Zap className="w-5 h-5" />,
      descriptions: [
        "Có tìm hiểu về cấu trúc của bài SEO cơ bản",
        "Biết dùng plugin RankMath SEO để chấm SEO trên Wordpress",
        "Biết phân tích từ khóa và có khả năng viết bài",
        "Có thể viết bài đăng hài hước, lắng đọng, trang nghiêm,...",
      ],
    },
    {
      name: "Wordpress",
      icon: <Mail className="w-5 h-5" />,
      descriptions: [
        "Biết cài và sử dụng các plugin",
        "Có thể tìm hiểu và chỉnh sửa giao diện bằng CSS",
      ],
    },
    {
      name: "Odoo",
      icon: <BarChart3 className="w-5 h-5" />,
      descriptions: ["Quản lý tồn kho, sản phẩm,..."],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${inter.className}`}
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">Portfolio</div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
              >
                Dự án
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
              >
                Kỹ năng
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
              >
                Liên hệ
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Thông tin cơ bản */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-white shadow-lg overflow-hidden">
            <AvatarImage
              src="/avt1.jpg"
              alt="Profile"
              className="w-full h-full object-cover [object-position:center_-2px]"
            />
            <AvatarFallback className="text-2xl bg-blue-500 text-white">
              LNN
            </AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lạc Ngọc Như
          </h1>

          <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            Digital Marketing | Thương mại điện tử
          </p>

          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-700">
              <div className="flex items-center space-x-2">
                <span>Cử nhân Thương mại điện tử</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <span>
                  Trường ĐH Công nghệ Thông tin, Đại học Quốc gia TP.HCM
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mục tiêu nghề nghiệp
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mong muốn cơ hội thực tập Digital Marketing và các lĩnh vực thuộc
              Thương mại điện tử. Có tinh thần cầu tiến và lắng nghe đóng góp để
              hoàn thiện bản thân mỗi ngày. Luôn cố gắng tìm hiểu, học hỏi, đề
              xuất ý tưởng để đạt được KPIs đã đề ra.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://drive.google.com/file/d/1BteMJHl9ePPLNLIb4mEkyFwSPxk72NgU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4 mr-2" />
                Xem CV 1
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Xem CV 2
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dự án đã thực hiện
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các đồ án/hoạt động tiêu biểu trong quá trình học tập
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <ImageCarousel
                  images={project.images}
                  projectTitle={project.title}
                />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-green-600 font-semibold">
                    {project.metrics}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    {project.description.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {section.heading}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start text-gray-600"
                            >
                              <span className="text-blue-500 mr-3 mt-0.5 flex-shrink-0">
                                •
                              </span>
                              <span
                                className="text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kỹ năng chuyên môn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các kỹ năng và công cụ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">{skill.icon}</div>
                  <span className="font-semibold text-gray-800 text-lg">
                    {skill.name}
                  </span>
                </div>
                <ul className="space-y-2">
                  {skill.descriptions.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-blue-500 mr-3 mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Thông tin liên hệ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rất mong được Quý công ty phản hồi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="max-w-md mx-auto">
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-800">
                    Liên hệ trực tiếp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">nhulacngoc@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:bg-green-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Điện thoại</p>
                      <p className="text-gray-600">+84 708 478 108</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 hover:bg-red-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Địa chỉ</p>
                      <p className="text-gray-600">
                        Quận 11, Thành phố Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Gửi tin nhắn ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Lạc Ngọc Như - Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
