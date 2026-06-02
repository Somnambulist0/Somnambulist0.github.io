const CONFIG = {
    // 个人信息
    personal: {
        name: "Jingcheng Ni",
        chineseName: "倪敬程",
        shortName: "J.Ni",
        title: "Researcher",
        bio: [
            "I am a Master's student in Computer Science at <a href='https://www.brown.edu/' class='link-pro'>Brown University</a>.",
            "During this summer (2026), I am interning at <a href='https://waymo.com/' class='link-pro'>Waymo</a> as a Machine Learning Engineer on the Perception team, working on world models for autonomous driving.",
            "Previously, I completed my undergraduate studies with distinction in Computer Science at <a href='https://undergraduate.bulletins.duke.edu/allprograms/dukekunshanprogram' class='link-pro'>Duke Kunshan University</a> and <a href='https://www.duke.edu/' class='link-pro'>Duke University</a> (2021-2025), where I had the privilege of being advised by Prof. Kaizhu Huang.",
            "During 2025 Summer, I had the pleasure of working at <a href='https://ai.sony/' class='link-pro'>Sony AI</a> on 3D human generation.",
            "In the summer of 2024, I spent an enriching time at <a href='https://vision.cs.yale.edu/' class='link-pro'>Yale Vision Lab</a> under the guidance of Prof. Alex Wong.",
        ],
        researchInterests: "I work on multimodal representations for spatial intelligence. I build models that perceive, reconstruct, and generate the physical world from multimodal inputs. My long-term goal is to enable embodied agents, such as vehicles and robots, to better understand and interact with real world environments.",
    },

    // 联系方式
    contact: {
        email: "jingcheng_ni@brown.edu",
        // github: "https://github.com/",
        linkedin: "https://www.linkedin.com/in/jingcheng-ni/",
        scholar: "https://scholar.google.com/citations?user=ZYocoJcAAAAJ&hl=zh-CN&oi=ao"
    },

    // 导航菜单
    navigation: [
        { label: "About", href: "#about" },
        { label: "News", href: "#news" },
        { label: "Work Experience", href: "#work-experience" },
        { label: "Selected Research", href: "#Research" }
    ],

    // 新闻动态
    news: [
        {
            date: "2026.05",
            category: "Work",
            categoryColor: "bg-gray-100 text-gray-600 border-gray-200",
            content: "Excited to join <strong>Waymo</strong> as a Machine Learning Engineer Intern in Summer 2026. See you in Mountain View!",
            highlight: true
        },
            {
            date: "2026.05",
            category: "Research",
            categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
            content: "Paper <a href='https://hongyang-du.github.io/VideoGPA-Website/' class='link-pro'>VideoGPA</a> is selected as <em>Oral</em> at CVPR 2026 Workshop!",
            // highlight: true
        },
        {
            date: "2026.04",
            category: "Research",
            categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
            content: "Paper <a href='https://hongyang-du.github.io/VideoGPA-Website/' class='link-pro'>VideoGPA</a> is accepted by ICML 2026!",
            // highlight: true
        },
        {
            date: "2026.02",
            category: "Research",
            categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
            content: "Paper <a href='https://adonis-galaxy.github.io/Iris-website/' class='link-pro'>Iris</a> is accepted by CVPR 2026!",
            // highlight: true
        },
        {
            date: "2025.09",
            category: "School",
            categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
            content: "Joined <strong>Brown University</strong> as a Master's Student with Scholarship.",
            // highlight: true
        },
        {
            date: "2025.05",
            category: "Work",
            categoryColor: "bg-gray-100 text-gray-600 border-gray-200",
            content: "Joined <strong>Sony R&D Center</strong> as a Machine Learning Engineer Intern."
        },
        {
            date: "2025.05",
            category: "Award",
            categoryColor: "bg-yellow-50 text-yellow-600 border-yellow-100",
            content: "Graduated from <strong>Duke / DKU</strong> with Distinction."
        },
        {
            date: "2024.05",
            category: "Research",
            categoryColor: "bg-gray-100 text-gray-600 border-gray-200",
            content: "Visiting student at <a href='https://vision.cs.yale.edu/' class='link-pro'>Yale Vision Lab</a>."
        }
    ],

    // 研究内容
    Research: [
        {
            title: "Iris: Integrating Language into Diffusion-based Monocular Depth Estimation",
            authors: "Ziyao Zeng*, <strong>Jingcheng Ni</strong>*, Daniel Wang, Patrick Rim, Younjoon Chung, Fengyu Yang, Byung-Woo Hong, Alex Wong",
            image: "./images/iris.png",
            status: "CVPR 2026",
            links: {
                pdf: "https://arxiv.org/abs/2411.16750",
                code: "https://github.com/Adonis-galaxy/iris",
                project: "https://adonis-galaxy.github.io/Iris-website/"
            },
            abstract: "Traditional monocular depth estimation suffers from inherent ambiguity and visual nuisances. We demonstrate that language can enhance monocular depth estimation by providing an additional condition (rather than images alone) aligned with plausible 3D scenes, thereby reducing the solution space for depth estimation. This conditional distribution is learned during the text-to-image pre-training of diffusion models. To generate images under various viewpoints and layouts that precisely reflect textual descriptions, the model implicitly models object sizes, shapes, and scales, their spatial relationships, and the overall scene structure. In this paper, Iris, we investigate the benefits of our strategy to integrate text descriptions into training and inference of diffusion-based depth estimation models. We experiment with three different diffusion-based monocular depth estimators (Marigold, Lotus, and E2E-FT) and their variants. By training on HyperSim and Virtual KITTI, and evaluating on NYUv2, KITTI, ETH3D, ScanNet, and DIODE, we find that our strategy improves the overall monocular depth estimation accuracy, especially in small areas. It also improves the model's depth perception of specific regions described in the text. We find that by providing more details in the text, the depth prediction can be iteratively refined. Simultaneously, we find that language can act as a constraint to accelerate the convergence of both training and the inference diffusion trajectory. Code and generated text data will be released upon acceptance."
        },
        {
            title: "VideoGPA: Distilling Geometry Priors for 3D-Consistent Video Generation",
            authors: "Hongyang Du*, Junjie Ye*, Xiaoyan Cong*, Runhao Li, <strong>Jingcheng Ni</strong>, Aman Agarwal, Zeqi Zhou, Zekun Li, Randall Balestriero, Yue Wang",
            image: "./images/videogpa.png",
            status: "ICML 2026",
            extraStatuses: ["CVPRWS 2026 Oral"],
            links: {
                pdf: "https://arxiv.org/abs/2601.23286",
                code: "https://github.com/Hongyang-Du/VideoGPA",
                project: "https://hongyang-du.github.io/VideoGPA-Website/"
            },
            abstract: "While recent video diffusion models (VDMs) produce visually impressive results, they fundamentally struggle to maintain 3D structural consistency, often resulting in object deformation or spatial drift. We hypothesize that these failures arise because standard denoising objectives lack explicit incentives for geometric coherence. To address this, we introduce VideoGPA (Video Geometric Preference Alignment), a data-efficient self-supervised framework that leverages a geometry foundation model to automatically derive dense preference signals that guide VDMs via Direct Preference Optimization (DPO). This approach effectively steers the generative distribution toward inherent 3D consistency without requiring human annotations. VideoGPA significantly enhances temporal stability, physical plausibility, and motion coherence using minimal preference pairs, consistently outperforming state-of-the-art baselines in extensive experiments."
        },
        {
            title: "HOMER: Homography-Based Efficient Multi-view 3D Object Removal",
            authors: "<strong>Jingcheng Ni</strong>*, Weiguang Zhao*, Daniel Wang, Ziyao Zeng, Chenyu You, Alex Wong, Kaizhu Huang",
            image: "./images/pipeline_00.png",
            status: "Under Review",
            links: {
                pdf: "https://arxiv.org/abs/2501.17636",
                // code: "#",
                // project: "#"
            },
            abstract: "3D object removal is an important sub-task in 3D scene editing, with broad applications in scene understanding, augmented reality, and robotics. However, existing methods struggle to achieve a desirable balance among consistency, usability, and computational efficiency in multi-view settings. These limitations are primarily due to unintuitive user interaction in the source view, inefficient multi-view object mask generation, computationally expensive inpainting procedures, and a lack of applicability across different radiance field representations. To address these challenges, we propose a novel pipeline that improves the quality and efficiency of multi-view object mask generation and inpainting. Our method introduces an intuitive region-based interaction mechanism in the source view and eliminates the need for camera poses or extra model training. Our lightweight HoMM module is employed to achieve high-quality multi-view mask propagation with enhanced efficiency. In the inpainting stage, we further reduce computational costs by performing inpainting only on selected key views and propagating the results to other views via homography-based mapping. Our pipeline is compatible with a variety of radiance field frameworks, including NeRF and 3D Gaussian Splatting, demonstrating improved generalizability and practicality in real-world scenarios. Additionally, we present a new 3D multi-object removal dataset with greater object diversity and viewpoint variation than existing datasets. Experiments on public benchmarks and our proposed dataset show that our method achieves state-of-the-art performance while reducing runtime to one-fifth of that required by leading baselines."
        },
        {
            title: "Coffee: Controllable Diffusion Fine-tuning",
            authors: "Ziyao Zeng, <strong>Jingcheng Ni</strong>, Ruyi Liu, Alex Wong",
            image: "./images/coffee.png",
            status: "Under Review",
            links: {
                pdf: "https://arxiv.org/abs/2511.14113",
                // code: "#"
            },
            abstract: "Text-to-image diffusion models can generate diverse content with flexible prompts, which makes them well-suited for customization through fine-tuning with a small amount of user-provided data. However, controllable fine-tuning that prevents models from learning undesired concepts present in the fine-tuning data, and from entangling those concepts with user prompts, remains an open challenge. It is crucial for downstream tasks like bias mitigation, preventing malicious adaptation, attribute disentanglement, and generalizable fine-tuning of diffusion policy. We propose Coffee that allows using language to specify undesired concepts to regularize the adaptation process. The crux of our method lies in keeping the embeddings of the user prompt from aligning with undesired concepts. Crucially, Coffee requires no additional training and enables flexible modification of undesired concepts by modifying textual descriptions. We evaluate Coffee by fine-tuning on images associated with user prompts paired with undesired concepts. Experimental results demonstrate that Coffee can prevent text-to-image models from learning specified undesired concepts during fine-tuning and outperforms existing methods. Code will be released upon acceptance."
        }
    ],

    // 项目
    // projects: [
    //     {
    //         name: "Gulu-Verse",
    //         description: "Personalized recommendation website designed to bring meaning to life.",
    //         image: "images/gulu.jpg",
    //         tags: "Web / Tool",
    //         link: "https://guluverse.com/"
    //     },
    //     {
    //         name: "Speech Recognition",
    //         description: "Manual implementation of speech recognition algorithms (CS304).",
    //         image: "images/speech.jpg",
    //         tags: "Pytorch / Audio",
    //         link: "https://github.com/Somnambulist0/Speech-Recognition-Manual-Implementation"
    //     }
    // ],

    // 工作经历
    workExperience: [
        {
            company: "Waymo",
            role: "Machine Learning Engineer Intern",
            team: "Perception",
            location: "Mountain View, CA",
            startDate: "2026.05",
            endDate: "2026.08",
            displayDate: "2026 Summer",
            logo: "./images/logo-waymo.png",
            logoText: "WAYMO",
            link: "https://waymo.com/",
            description: " Working on perception world model for cccupancy forecasting."
        },
        {
            company: "Sony AI",
            role: "Machine Learning Engineer Intern",
            team: "Research",
            location: "Tokyo, Japan",
            startDate: "2025.05",
            endDate: "2025.08",
            displayDate: "2025 Summer",
            logo: "./images/logo-sony-ai.svg",
            link: "https://ai.sony/",
            description: "Worked on 3D human generation from a single image."
        }
    ],

    // 教育背景
    education: [
        {
            startDate: "2025.08",
            endDate: "2027.05",
            expected: true,
            degree: "MS in Computer Science",
            school: "Brown University"
        },
        {
            startDate: "2021.08",
            endDate: "2025.05",
            degree: "BS in Computer Science",
            school: "Duke University, Duke Kunshan University"
        },
        {
            startDate: "2024.05",
            endDate: "2024.08",
            degree: "Visiting Student",
            school: "Yale University"
        }
    ],

    // 页脚
    footer: {
        copyright: "© 2026 Jingcheng Ni. All rights reserved.",
        lastUpdated: "Last updated May 2026"
    }
};
