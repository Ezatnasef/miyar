const translations = {
  ar: {
    brand: "مِعيار", brandSub: "منصة التقييم الأكاديمي", workspace: "كلية العلوم", workspaceSub: "مساحة العمل",
    mainMenu: "القائمة الرئيسية", dashboard: "لوحة التحكم", exams: "الامتحانات", upload: "رفع الأوراق",
    grading: "مراجعة التصحيح", results: "النتائج والتقارير", settings: "الإعدادات", helpTitle: "هل تحتاج إلى مساعدة؟",
    helpText: "تعرّف على خطوات إعداد أول امتحان.", helpLink: "دليل الاستخدام", profName: "د. مريم حسن",
    profRole: "عضو هيئة تدريس", term: "الفصل الدراسي الأول 2026",
    hello: "مرحبًا د. مريم", welcomeTitle: "تقييم واضح، ووقت أكثر لما يهم", welcomeText: "تابعي أعمال التصحيح من مكان واحد، وراجعي كل درجة قبل اعتمادها.",
    newExam: "إنشاء امتحان", reviewPending: "مراجعة الإجابات", semesterOverview: "نظرة عامة على الفصل الدراسي",
    dashboardIntro: "ملخص سريع لنشاط التقييم خلال الفصل الحالي.", activeExams: "الامتحانات النشطة", submittedPapers: "الأوراق المستلمة",
    awaitingReview: "بانتظار المراجعة", averageScore: "متوسط الدرجات", vsLastMonth: "مقارنة بالشهر الماضي", papers: "ورقة",
    recentlyUpdated: "آخر تحديث", latestExams: "أحدث الامتحانات", viewAll: "عرض الكل", activity: "النشاط الأخير",
    activityIntro: "آخر التحديثات على مساحة العمل", scoreDistribution: "توزيع الدرجات", scoreDistributionSub: "متوسط النتائج حسب الامتحان",
    examName: "الامتحان", course: "المقرر", date: "التاريخ", progress: "التصحيح", status: "الحالة", actions: "الإجراءات",
    biologyExam: "امتحان منتصف الفصل", biology: "الأحياء العامة", chemistryExam: "اختبار الوحدة الثالثة", chemistry: "الكيمياء العضوية",
    physicsExam: "الامتحان العملي", physics: "فيزياء تجريبية", inProgress: "جارٍ التصحيح", completed: "مكتمل", scheduled: "مجدول",
    uploadActivity: "تم رفع أوراق جديدة", ago20: "منذ 20 دقيقة", gradingActivity: "تمت مراجعة 8 إجابات", ago1: "منذ ساعة",
    examCreatedActivity: "تم إنشاء امتحان جديد", ago3: "منذ 3 ساعات", monthJan: "يناير", monthFeb: "فبراير", monthMar: "مارس",
    monthApr: "أبريل", monthMay: "مايو", monthJun: "يونيو", examsHeading: "الامتحانات", examsIntro: "إدارة الامتحانات ومعايير التقييم في مكان واحد.",
    searchExams: "ابحث عن امتحان أو مقرر", allStatuses: "كل الحالات", statusActive: "قيد التصحيح", statusDone: "مكتمل",
    statusScheduled: "مجدول", allCourses: "كل المقررات", review: "مراجعة", open: "فتح", noExams: "لا توجد امتحانات مطابقة للبحث.",
    createHeading: "إنشاء امتحان", createIntro: "أدخل معلومات الامتحان والأسئلة ومعايير التقييم.", examDetails: "معلومات الامتحان",
    examDetailsSub: "ابدأ بتحديد بيانات الامتحان الأساسية.", examTitle: "عنوان الامتحان", titlePlaceholder: "مثال: امتحان منتصف الفصل",
    courseLabel: "المقرر الدراسي", chooseCourse: "اختر المقرر", examDate: "تاريخ الامتحان", totalScore: "الدرجة النهائية",
    duration: "مدة الامتحان (دقيقة)", gradingCriteria: "معايير التصحيح", gradingCriteriaSub: "اكتب عناصر الإجابة التي تُمنح عليها الدرجات.",
    questionLabel: "السؤال", questionPlaceholder: "اكتب نص السؤال هنا...", modelAnswer: "الإجابة النموذجية",
    answerPlaceholder: "اكتب الإجابة أو النقاط الأساسية...", addQuestion: "إضافة سؤال", cancel: "إلغاء", saveExam: "حفظ الامتحان",
    criteriaHint: "يساعد تحديد النقاط الأساسية على توحيد التقييم بين جميع الأوراق.",
    goodPractice: "إعداد عملي", practiceText: "للحصول على نتائج متسقة، حدّد لكل سؤال عناصر الإجابة والدرجة المقابلة لكل عنصر.",
    practiceList: "<li>اكتب الإجابة المتوقعة بوضوح.</li><li>حدّد الدرجة لكل فكرة رئيسية.</li><li>اترك مساحة لمراجعة الدرجة يدويًا.</li>",
    uploadHeading: "رفع أوراق الامتحان", uploadIntro: "أضف ملفات الطلاب إلى امتحان قائم لمتابعة التصحيح.",
    chooseExam: "الامتحان", chooseExamOption: "اختر امتحانًا", dropTitle: "اسحب الملفات وأفلتها هنا",
    orBrowse: "أو اضغط لاختيار الملفات من جهازك", supported: "PDF أو JPG أو PNG، حتى 20 ميجابايت للملف",
    uploadFiles: "إضافة الملفات", uploadNotice: "<strong>ملاحظة:</strong> هذه الواجهة تحفظ قائمة الملفات محليًا للعرض فقط. يلزم توصيلها بخدمة رفع الملفات وOCR في الخادم لمعالجة المحتوى.",
    filesAdded: "الملفات المحددة", noFiles: "لم تختر ملفات بعد.", saveUploadList: "حفظ قائمة الملفات",
    uploadHelpTitle: "قبل رفع الأوراق", uploadHelp: "تأكد من وضوح الصور، وأن كل ملف يخص طالبًا واحدًا. الملفات المقبولة PDF وJPG وPNG.",
    privacyTitle: "خصوصية بيانات الطلاب", privacyText: "لا تحفظ هذه الواجهة محتوى الملفات أو ترسله إلى خادم. يلزم إعداد التكامل الخلفي وسياسة الاحتفاظ بالبيانات قبل التشغيل الفعلي.",
    gradingHeading: "مراجعة التصحيح", gradingIntro: "راجع الإجابات والدرجات وعدّلها قبل اعتماد النتائج.",
    gradingDemoNote: "تُعرض هنا بيانات نموذجية لتوضيح شاشة المراجعة.", selectAnswer: "اختر إجابة للمراجعة",
    answer1: "الطالبة: سارة محمود", answer2: "الطالب: عمر علي", answer3: "الطالبة: نور أحمد",
    q1: "السؤال الأول", q2: "السؤال الثاني", q3: "السؤال الثالث", points: "درجات", model: "الإجابة النموذجية",
    studentResponse: "إجابة الطالب", criteriaMet: "نقاط مستوفاة", criteriaPartial: "نقطة تحتاج إلى مراجعة",
    grade: "الدرجة", outOf: "من", feedback: "ملاحظة للطالب", feedbackPlaceholder: "اكتب ملاحظة اختيارية...",
    saveReview: "حفظ المراجعة", previous: "السابق", next: "التالي", reviewed: "تمت المراجعة",
    resultsHeading: "النتائج والتقارير", resultsIntro: "ملخص الدرجات وتصدير النتائج بعد مراجعتها.",
    resultsSummary: "ملخص النتائج", totalStudents: "عدد الطلاب", gradedPapers: "الأوراق المصححة", classAverage: "متوسط الفصل",
    highestScore: "أعلى درجة", resultExam: "امتحان منتصف الفصل — الأحياء العامة", downloadCsv: "تنزيل CSV", printReport: "طباعة التقرير",
    student: "الطالب", score: "الدرجة", percentage: "النسبة", reviewedStatus: "حالة المراجعة", approved: "مراجَع",
    settingsHeading: "الإعدادات", settingsIntro: "إدارة تفضيلات الحساب ومساحة العمل.", profileSettings: "الملف الشخصي",
    profileSub: "تحديث البيانات التي تظهر في مساحة العمل.", fullName: "الاسم", email: "البريد الإلكتروني", institution: "المؤسسة",
    language: "لغة الواجهة", arabic: "العربية", english: "English", saveSettings: "حفظ التغييرات",
    preferences: "تفضيلات مساحة العمل", preferencesSub: "إعدادات العرض واللغة.", saved: "تم حفظ التغييرات.",
    guideHeading: "دليل الاستخدام", guideIntro: "خطوات واضحة لإعداد الامتحان ومراجعة النتائج.",
    step1Title: "أنشئ الامتحان", step1Text: "أضف اسم المقرر وتاريخ الامتحان والدرجة النهائية، ثم أدخل الأسئلة والإجابات النموذجية.",
    step2Title: "أضف أوراق الطلاب", step2Text: "ارفع ملفات PDF أو الصور، ثم تحقق من وضوح الصفحات وربط كل ملف بالامتحان الصحيح.",
    step3Title: "راجع واعتمد", step3Text: "راجع النصوص والدرجات المقترحة، عدّل ما يلزم، ثم اعتمد النتائج وصدّر التقرير.",
    guideEndTitle: "جاهز لإعداد امتحانك الأول؟", guideEndText: "يمكنك البدء بإنشاء امتحان وإضافة معايير التقييم.", started: "تم إنشاء الامتحان.", uploadSaved: "تم حفظ قائمة الملفات على هذا الجهاز.", reviewSaved: "تم حفظ الدرجة والملاحظة.",
    remove: "إزالة", notConnected: "لا يوجد خادم موصل حاليًا. لم يتم رفع أي ملف.", required: "يرجى استكمال الحقول المطلوبة.",
    exportReady: "تم تجهيز ملف النتائج للتنزيل.", printHint: "استخدم نافذة الطباعة لحفظ التقرير بصيغة PDF.",
    all: "الكل", scoreChart: "الدرجات", noData: "لا توجد بيانات بعد.", unknown: "غير محدد",
    examsThisSemester: "امتحان هذا الفصل", acrossAllExams: "إجمالي الأوراق في كل الامتحانات", pendingReviews: "ورقة بانتظار المراجعة",
    landingTitle: "تقييم أكاديمي أوضح، بثقة أكبر",
    landingDescription: "مِعيار يساعد أعضاء هيئة التدريس على تنظيم تصحيح الإجابات القصيرة والمقالية، ومراجعة كل درجة قبل اعتمادها.",
    landingEyebrow: "للتعليم العالي والتقييم الأكاديمي", landingCta: "دخول مباشر للوحة التحكم", landingSecondary: "كيف تعمل المنصة",
    returnHome: "العودة للصفحة الرئيسية",
    landingNavFeatures: "المزايا", landingNavHow: "آلية العمل", landingNavPrinciples: "مبادئنا",
    landingPreviewLabel: "مساحة مراجعة الإجابة", landingPreviewQuestion: "اشرح دور الجذور في نمو النبات.",
    landingPreviewAnswer: "تثبّت النبات في التربة وتمتص الماء والأملاح المعدنية.",
    landingPreviewScore: "الدرجة المقترحة", landingPreviewPoints: "من 10 درجات",
    landingReviewLabel: "مراجعة المدرّس", landingReviewStatus: "تحتاج إلى اعتمادك",
    landingOverview: "من ورقة الامتحان إلى نتيجة قابلة للمراجعة",
    landingOverviewText: "صُممت مِعيار لتسهيل دورة التقييم كاملة: تنظيم الأسئلة ومعاييرها، تجهيز الأوراق، ومراجعة الدرجات في تجربة واحدة.",
    landingFeature1Title: "فهم الإجابة واستخراج النص",
    landingFeature1Text: "يساعد OCR على استخراج نص الورقة، ثم يقارن نموذج تقييم ذكي معنى الإجابة بمعايير السؤال لا بتطابق الكلمات فقط.",
    landingFeature2Title: "مراجعة بشرية قبل الاعتماد",
    landingFeature2Text: "راجع الإجابة والدرجة ومسوّغها، وعدّلها يدويًا قبل نشر أي نتيجة.",
    landingFeature3Title: "إدارة منظمة للنتائج",
    landingFeature3Text: "تابع تقدّم التصحيح، واجمع الدرجات، وصدّر التقارير للرجوع إليها.",
    landingHowTitle: "من الورقة إلى التقرير، بخطوات مفهومة",
    landingHow1Title: "أنشئ الامتحان", landingHow1Text: "أدخل الأسئلة والإجابات النموذجية ومعايير توزيع الدرجات.",
    landingHow2Title: "أضف أوراق الطلاب", landingHow2Text: "ارفع ملفات الامتحان، ثم جهّز النصوص للمراجعة والتقييم.",
    landingHow3Title: "راجع واعتمد", landingHow3Text: "افحص الدرجات المقترحة، عدّلها عند الحاجة، ثم أخرج النتائج.",
    landingPrincipleEyebrow: "مبدأ المنصة", landingPrincipleTitle: "المعنى أهم من تطابق الكلمات.",
    landingPrincipleText: "صياغة الطالب قد تختلف عن النموذج. لذلك ينبغي أن يراعي التقييم الفكرة والمعنى، مع توضيح ما تحقق وما ينقص، وترك القرار النهائي للمدرّس.",
    landingCtaTitle: "ابدأ بتنظيم تقييمك الأكاديمي",
    landingCtaText: "استكشف مساحة العمل وأنشئ امتحانًا تجريبيًا.",
    landingFooter: "منصة أكاديمية لإدارة التقييم ومراجعته.",
    loginHeading: "تسجيل الدخول", loginIntro: "سجّل الدخول لمتابعة مساحة العمل الأكاديمية.",
    signupHeading: "إنشاء حساب", signupIntro: "أنشئ حسابًا لإعداد مساحة عملك الأكاديمية.",
    password: "كلمة المرور", confirmPassword: "تأكيد كلمة المرور", rememberMe: "تذكرني", forgotPassword: "نسيت كلمة المرور؟",
    loginButton: "دخول إلى المنصة", noAccount: "ليس لديك حساب؟", createAccount: "إنشاء حساب",
    haveAccount: "لديك حساب بالفعل؟", signIn: "تسجيل الدخول", authUnavailable: "واجهة الحساب جاهزة، لكن يلزم ربطها بخدمة المصادقة في الخادم.",
    authMismatch: "كلمتا المرور غير متطابقتين.", signOut: "تسجيل الخروج"
  },
  en: {
    brand: "Miyār", brandSub: "Academic Assessment Platform", workspace: "Faculty of Science", workspaceSub: "Workspace",
    mainMenu: "MAIN MENU", dashboard: "Dashboard", exams: "Exams", upload: "Upload papers", grading: "Grading review",
    results: "Results & reports", settings: "Settings", helpTitle: "Need a hand?", helpText: "Learn how to set up your first exam.",
    helpLink: "User guide",     profName: "Dr. Maryam Hassan", profRole: "Faculty member", term: "Fall semester 2026",
    hello: "Welcome back, Dr. Maryam", welcomeTitle: "Clear assessment. More time for what matters.",
    welcomeText: "Track grading in one place and review every score before finalizing.",
    newExam: "Create exam", reviewPending: "Review answers", semesterOverview: "Semester overview",
    dashboardIntro: "A quick summary of assessment activity this semester.", activeExams: "Active exams",
    submittedPapers: "Papers received", awaitingReview: "Awaiting review", averageScore: "Average score",
    vsLastMonth: "vs. last month", papers: "papers", recentlyUpdated: "Recently updated", latestExams: "Recent exams",
    viewAll: "View all", activity: "Recent activity", activityIntro: "Latest workspace updates", scoreDistribution: "Score distribution",
    scoreDistributionSub: "Average results by exam", examName: "Exam", course: "Course", date: "Date", progress: "Grading",
    status: "Status", actions: "Actions", biologyExam: "Midterm examination", biology: "General Biology",
    chemistryExam: "Unit three quiz", chemistry: "Organic Chemistry", physicsExam: "Practical examination",
    physics: "Experimental Physics", inProgress: "In progress", completed: "Completed", scheduled: "Scheduled",
    uploadActivity: "New papers uploaded", ago20: "20 minutes ago", gradingActivity: "8 answers reviewed", ago1: "1 hour ago",
    examCreatedActivity: "New exam created", ago3: "3 hours ago", monthJan: "Jan", monthFeb: "Feb", monthMar: "Mar",
    monthApr: "Apr", monthMay: "May", monthJun: "Jun", examsHeading: "Exams", examsIntro: "Manage exams and assessment criteria in one place.",
    searchExams: "Search exams or courses", allStatuses: "All statuses", statusActive: "In progress", statusDone: "Completed",
    statusScheduled: "Scheduled", allCourses: "All courses", review: "Review", open: "Open", noExams: "No exams match your search.",
    createHeading: "Create an exam", createIntro: "Add exam details, questions, and grading criteria.", examDetails: "Exam details",
    examDetailsSub: "Start with the basic exam information.", examTitle: "Exam title", titlePlaceholder: "e.g. Midterm examination",
    courseLabel: "Course", chooseCourse: "Choose a course", examDate: "Exam date", totalScore: "Total points",
    duration: "Duration (minutes)", gradingCriteria: "Grading criteria", gradingCriteriaSub: "List the answer elements that earn points.",
    questionLabel: "Question", questionPlaceholder: "Enter the question...", modelAnswer: "Model answer",
    answerPlaceholder: "Enter the expected answer or key points...", addQuestion: "Add question", cancel: "Cancel",
    saveExam: "Save exam", criteriaHint: "Defining key points helps keep assessment consistent across papers.",
    goodPractice: "A useful practice", practiceText: "For consistent results, define each answer element and its corresponding points.",
    practiceList: "<li>Write the expected answer clearly.</li><li>Assign points to each key idea.</li><li>Leave room for manual review.</li>",
    uploadHeading: "Upload exam papers", uploadIntro: "Add student files to an existing exam to prepare for review.",
    chooseExam: "Exam", chooseExamOption: "Choose an exam", dropTitle: "Drag and drop files here",
    orBrowse: "or select files from your device", supported: "PDF, JPG, or PNG, up to 20 MB per file",
    uploadFiles: "Add files", uploadNotice: "<strong>Note:</strong> This interface only stores a local list of file names for display. Connect it to the server upload and OCR service to process file contents.",
    filesAdded: "Selected files", noFiles: "No files selected yet.", saveUploadList: "Save file list",
    uploadHelpTitle: "Before uploading", uploadHelp: "Use clear scans and keep one student's work per file. Accepted formats are PDF, JPG, and PNG.",
    privacyTitle: "Student data privacy", privacyText: "This interface does not store file contents or send them to a server. Configure backend integration and a data-retention policy before production.",
    gradingHeading: "Grading review", gradingIntro: "Review answers and adjust scores before finalizing results.",
    gradingDemoNote: "Sample data is shown here to demonstrate the review screen.", selectAnswer: "Select an answer to review",
    answer1: "Student: Sara Mahmoud", answer2: "Student: Omar Ali", answer3: "Student: Nour Ahmed",
    q1: "Question one", q2: "Question two", q3: "Question three", points: "points", model: "Model answer",
    studentResponse: "Student response", criteriaMet: "Criteria met", criteriaPartial: "Criterion needs review",
    grade: "Score", outOf: "out of", feedback: "Feedback for student", feedbackPlaceholder: "Add an optional note...",
    saveReview: "Save review", previous: "Previous", next: "Next", reviewed: "Reviewed",
    resultsHeading: "Results & reports", resultsIntro: "Review score summaries and export finalized results.",
    resultsSummary: "Results summary", totalStudents: "Students", gradedPapers: "Papers graded", classAverage: "Class average",
    highestScore: "Highest score", resultExam: "Midterm examination — General Biology", downloadCsv: "Download CSV",
    printReport: "Print report", student: "Student", score: "Score", percentage: "Percentage",
    reviewedStatus: "Review status", approved: "Reviewed", settingsHeading: "Settings",
    settingsIntro: "Manage account and workspace preferences.", profileSettings: "Profile",
    profileSub: "Update the details shown in your workspace.", fullName: "Full name", email: "Email address",
    institution: "Institution", language: "Interface language", arabic: "العربية", english: "English",
    saveSettings: "Save changes", preferences: "Workspace preferences", preferencesSub: "Display and language options.",
    saved: "Changes saved.", guideHeading: "User guide", guideIntro: "A clear workflow for setting up exams and reviewing results.",
    step1Title: "Create an exam", step1Text: "Add the course, exam date, and total points, then enter questions and model answers.",
    step2Title: "Add student papers", step2Text: "Upload PDFs or images, then check page clarity and associate files with the correct exam.",
    step3Title: "Review and finalize", step3Text: "Review extracted text and suggested scores, make adjustments, then finalize and export results.",
    guideEndTitle: "Ready to set up your first exam?", guideEndText: "Create an exam and add its assessment criteria to get started.",
    started: "Exam created.", uploadSaved: "File list saved on this device.", reviewSaved: "Score and feedback saved.",
    remove: "Remove", notConnected: "No server is connected. No files were uploaded.", required: "Please complete the required fields.",
    exportReady: "Your results file is ready to download.", printHint: "Use the print dialog to save the report as PDF.",
    all: "All", scoreChart: "Scores", noData: "No data yet.", unknown: "Not specified",
    examsThisSemester: "exams this semester", acrossAllExams: "Across all exams", pendingReviews: "papers awaiting review",
    landingTitle: "A clearer way to assess academic work",
    landingDescription: "Miyār helps educators organize short-answer and essay grading, and review every score before finalizing results.",
    landingEyebrow: "For higher education and academic assessment", landingCta: "Open dashboard directly", landingSecondary: "How it works",
    returnHome: "Return to home page",
    landingNavFeatures: "Features", landingNavHow: "How it works", landingNavPrinciples: "Principles",
    landingPreviewLabel: "Answer review workspace", landingPreviewQuestion: "Explain the role of roots in plant growth.",
    landingPreviewAnswer: "They anchor the plant and absorb water and mineral salts.",
    landingPreviewScore: "Suggested score", landingPreviewPoints: "out of 10 points",
    landingReviewLabel: "Educator review", landingReviewStatus: "Awaiting your approval",
    landingOverview: "From exam paper to a result you can review",
    landingOverviewText: "Miyār is designed to support the assessment workflow: organize questions and rubrics, prepare papers, and review scores in one experience.",
    landingFeature1Title: "Text extraction and meaning",
    landingFeature1Text: "OCR helps extract text from exam papers, then an AI-assisted grader considers the answer's meaning against the rubric, not just matching words.",
    landingFeature2Title: "Educator review before approval",
    landingFeature2Text: "Review each response, score, and rationale, then make manual adjustments before publishing.",
    landingFeature3Title: "Organized results and reporting",
    landingFeature3Text: "Track grading progress, consolidate scores, and export reports for reference.",
    landingHowTitle: "From paper to report, in clear steps",
    landingHow1Title: "Set up an exam", landingHow1Text: "Add questions, model answers, and a clear point rubric.",
    landingHow2Title: "Add student papers", landingHow2Text: "Upload exam files and prepare their contents for review and assessment.",
    landingHow3Title: "Review and finalize", landingHow3Text: "Check suggested scores, adjust when needed, and produce results.",
    landingPrincipleEyebrow: "A guiding principle", landingPrincipleTitle: "Meaning matters more than matching words.",
    landingPrincipleText: "A student's wording may differ from the model answer. Assessment should consider the idea and meaning, show what is present and what is missing, and leave the final decision to the educator.",
    landingCtaTitle: "Bring clarity to your assessment workflow",
    landingCtaText: "Explore the workspace and set up a sample exam.",
    landingFooter: "An academic platform for assessment management and review.",
    loginHeading: "Sign in", loginIntro: "Sign in to continue to your academic workspace.",
    signupHeading: "Create your account", signupIntro: "Create an account to set up your academic workspace.",
    password: "Password", confirmPassword: "Confirm password", rememberMe: "Remember me", forgotPassword: "Forgot password?",
    loginButton: "Sign in to Miyār", noAccount: "New to Miyār?", createAccount: "Create an account",
    haveAccount: "Already have an account?", signIn: "Sign in", authUnavailable: "The account interface is ready, but server authentication still needs to be connected.",
    authMismatch: "The passwords do not match.", signOut: "Sign out"
  }
};

const defaultExams = [
  { id: "exam-bio", titleKey: "biologyExam", courseKey: "biology", date: "2026-10-19", papers: 84, graded: 61, status: "active", score: 100 },
  { id: "exam-chem", titleKey: "chemistryExam", courseKey: "chemistry", date: "2026-10-16", papers: 56, graded: 56, status: "done", score: 50 },
  { id: "exam-phys", titleKey: "physicsExam", courseKey: "physics", date: "2026-10-28", papers: 32, graded: 0, status: "scheduled", score: 40 }
];

const reviewSamples = [
  { studentKey: "answer1", questionKey: "q1", score: 7, max: 10, response: "التمثيل الضوئي هو عملية تستخدم فيها النباتات ضوء الشمس لتحويل الماء وثاني أكسيد الكربون إلى سكر وأكسجين.", feedback: "" },
  { studentKey: "answer2", questionKey: "q2", score: 8, max: 10, response: "تنتقل الطاقة من المنتجين إلى المستهلكين عبر السلسلة الغذائية، وتقل الطاقة المتاحة عند كل مستوى.", feedback: "" },
  { studentKey: "answer3", questionKey: "q3", score: 5, max: 10, response: "تساعد الجذور النبات على الثبات وامتصاص الماء من التربة، كما تمتص بعض الأملاح.", feedback: "" }
];

function initialState() {
  try {
    const saved = localStorage.getItem("miyaar-state");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        lang: parsed.lang === "en" ? "en" : "ar",
        exams: Array.isArray(parsed.exams) ? parsed.exams : defaultExams,
        uploads: Array.isArray(parsed.uploads) ? parsed.uploads : [],
        reviews: Array.isArray(parsed.reviews) ? parsed.reviews : reviewSamples,
        profile: parsed.profile || { name: "", email: "", institution: "" }
      };
    }
  } catch (error) {
    console.error("Unable to read saved workspace data:", error);
    window.alert("تعذر قراءة البيانات المحفوظة. سيتم عرض بيانات تجريبية.");
  }
  return { lang: "ar", exams: defaultExams, uploads: [], reviews: reviewSamples, profile: { name: "", email: "", institution: "" } };
}

const state = initialState();
let currentPage = location.hash.slice(1) || "landing";
if (currentPage.startsWith("landing-")) currentPage = "landing";
let activeReview = 0;
let selectedFiles = [];
let toastTimer;

const pageContent = document.getElementById("page-content");
const pageNames = {
  dashboard: "dashboard", exams: "exams", upload: "upload", grading: "grading",
  results: "results", settings: "settings", create: "createHeading", guide: "guideHeading",
  login: "loginHeading", signup: "signupHeading", landing: "landingTitle"
};
const t = (key) => translations[state.lang][key] ?? translations.ar[key] ?? key;
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const isEnglish = () => state.lang === "en";

function persist() {
  try {
    localStorage.setItem("miyaar-state", JSON.stringify(state));
  } catch (error) {
    console.error("Unable to save workspace data:", error);
    notify(isEnglish() ? "Could not save changes to this device." : "تعذر حفظ التغييرات على هذا الجهاز.", true);
  }
}

function notify(message, error = false) {
  const region = document.getElementById("toast-region");
  const toast = document.createElement("div");
  toast.className = `toast${error ? " error" : ""}`;
  toast.textContent = message;
  region.append(toast);
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.remove(), 3200);
}

function formatDate(date) {
  if (!date) return t("unknown");
  return new Intl.DateTimeFormat(isEnglish() ? "en" : "ar", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function examName(exam) { return t(exam.titleKey) || exam.title || t("unknown"); }
function courseName(exam) { return t(exam.courseKey) || exam.course || t("unknown"); }
function examStatus(exam) {
  return t(exam.status === "done" ? "completed" : exam.status === "scheduled" ? "scheduled" : "inProgress");
}
function statusClass(exam) {
  return exam.status === "done" ? "badge-success" : exam.status === "scheduled" ? "badge-blue" : "badge-warning";
}
function percent(exam) {
  return exam.papers ? Math.round(exam.graded / exam.papers * 100) : 0;
}

function heading(title, subtitle, actions = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${escapeHTML(t("brand"))} / ${escapeHTML(t(title))}</div><h1>${escapeHTML(t(title))}</h1><p>${escapeHTML(t(subtitle))}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
}

function renderDashboard() {
  const exams = state.exams.slice(0, 3);
  const activeCount = state.exams.filter((exam) => exam.status === "active").length;
  const totalPapers = state.exams.reduce((sum, exam) => sum + Number(exam.papers || 0), 0);
  const pending = state.exams.reduce((sum, exam) => sum + Math.max(0, Number(exam.papers || 0) - Number(exam.graded || 0)), 0);
  return `${heading("semesterOverview", "dashboardIntro")}
    <section class="welcome-banner">
      <div class="welcome-copy"><div class="eyebrow">${escapeHTML(t("hello"))}</div><h2>${escapeHTML(t("welcomeTitle"))}</h2><p>${escapeHTML(t("welcomeText"))}</p></div>
      <div class="welcome-actions"><a class="button button-primary" href="#create">${escapeHTML(t("newExam"))}<span aria-hidden="true">＋</span></a><a class="button button-secondary" href="#grading">${escapeHTML(t("reviewPending"))}</a></div>
    </section>
    <section class="stat-grid">
      ${statCard("activeExams", activeCount, "▤", `<span class="positive">${state.exams.length}</span> ${escapeHTML(t("examsThisSemester"))}`)}
      ${statCard("submittedPapers", totalPapers, "▧", escapeHTML(t("acrossAllExams")))}
      ${statCard("awaitingReview", pending, "◷", escapeHTML(t("pendingReviews")))}
      ${statCard("averageScore", "78.4%", "↗", `<span class="positive">+4.2%</span> ${escapeHTML(t("vsLastMonth"))}`)}
    </section>
    <section class="dashboard-grid">
      <div>
        <div class="panel">
          <div class="panel-heading"><div><h2>${escapeHTML(t("latestExams"))}</h2><p>${escapeHTML(t("dashboardIntro"))}</p></div><a href="#exams" class="text-link">${escapeHTML(t("viewAll"))} ←</a></div>
          <div class="exam-list">${exams.map((exam) => examRow(exam)).join("")}</div>
        </div>
        <div class="panel chart-panel">
          <div class="panel-heading"><div><h2>${escapeHTML(t("scoreDistribution"))}</h2><p>${escapeHTML(t("scoreDistributionSub"))}</p></div><span class="badge badge-neutral">${escapeHTML(t("scoreChart"))}</span></div>
          <div class="chart-wrap" aria-label="${escapeHTML(t("scoreDistribution"))}">
            ${[44, 66, 52, 79, 58, 90, 70, 61, 83, 56, 73, 91].map((height, i) => `<div class="chart-column"><span style="--height:${height}%"></span><small>${escapeHTML(t(["monthJan", "monthFeb", "monthMar", "monthApr", "monthMay", "monthJun"][i % 6]))}</small></div>`).join("")}
          </div>
        </div>
      </div>
      <aside class="panel">
        <div class="panel-heading"><div><h2>${escapeHTML(t("activity"))}</h2><p>${escapeHTML(t("activityIntro"))}</p></div><button class="text-link" type="button" aria-label="More">···</button></div>
        <div class="activity-list">
          <div class="activity-item"><span class="activity-indicator"></span><div><strong>${escapeHTML(t("uploadActivity"))}</strong><small>${escapeHTML(t("biologyExam"))} · ${escapeHTML(t("ago20"))}</small></div></div>
          <div class="activity-item"><span class="activity-indicator amber"></span><div><strong>${escapeHTML(t("gradingActivity"))}</strong><small>${escapeHTML(t("chemistryExam"))} · ${escapeHTML(t("ago1"))}</small></div></div>
          <div class="activity-item"><span class="activity-indicator"></span><div><strong>${escapeHTML(t("examCreatedActivity"))}</strong><small>${escapeHTML(t("physicsExam"))} · ${escapeHTML(t("ago3"))}</small></div></div>
        </div>
      </aside>
    </section>`;
}

function statCard(label, value, icon, foot) {
  return `<article class="stat-card"><div class="stat-top"><span class="stat-label">${escapeHTML(t(label))}</span><span class="stat-icon" aria-hidden="true">${icon}</span></div><div class="stat-value">${escapeHTML(value)}</div><div class="stat-foot">${foot}</div></article>`;
}

function subjectClass(exam) {
  const idx = Math.max(0, state.exams.findIndex((item) => item.id === exam.id));
  return ["", "amber", "blue"][idx % 3];
}

function examRow(exam) {
  return `<div class="exam-row">
    <div class="exam-name"><span class="subject-mark ${subjectClass(exam)}">${escapeHTML(courseName(exam).slice(0, 2))}</span><div><strong>${escapeHTML(examName(exam))}</strong><small>${escapeHTML(courseName(exam))}</small></div></div>
    <div class="exam-meta">${escapeHTML(formatDate(exam.date))}<small>${escapeHTML(t("date"))}</small></div>
    <div class="progress-cell"><span class="progress-text">${escapeHTML(exam.graded)} / ${escapeHTML(exam.papers)}</span><div class="progress-line"><span style="width:${percent(exam)}%"></span></div></div>
    <span class="badge ${statusClass(exam)}">${escapeHTML(examStatus(exam))}</span>
  </div>`;
}

function renderExams() {
  return `${heading("examsHeading", "examsIntro", `<a href="#create" class="button button-primary">＋ ${escapeHTML(t("newExam"))}</a>`)}
    <section class="panel">
      <div class="toolbar"><div class="toolbar-left"><label class="search-box"><span aria-hidden="true">⌕</span><input id="exam-search" type="search" placeholder="${escapeHTML(t("searchExams"))}" aria-label="${escapeHTML(t("searchExams"))}"></label></div>
      <div class="toolbar-right"><select class="select-control" id="status-filter" aria-label="${escapeHTML(t("allStatuses"))}"><option value="all">${escapeHTML(t("allStatuses"))}</option><option value="active">${escapeHTML(t("statusActive"))}</option><option value="done">${escapeHTML(t("statusDone"))}</option><option value="scheduled">${escapeHTML(t("statusScheduled"))}</option></select>
      <select class="select-control" id="course-filter" aria-label="${escapeHTML(t("allCourses"))}"><option value="all">${escapeHTML(t("allCourses"))}</option>${[...new Set(state.exams.map(courseName))].map((course) => `<option value="${escapeHTML(course)}">${escapeHTML(course)}</option>`).join("")}</select></div></div>
      <div class="table-scroll"><table class="data-table"><thead><tr><th>${escapeHTML(t("examName"))}</th><th>${escapeHTML(t("course"))}</th><th>${escapeHTML(t("date"))}</th><th>${escapeHTML(t("progress"))}</th><th>${escapeHTML(t("status"))}</th><th>${escapeHTML(t("actions"))}</th></tr></thead><tbody id="exam-table-body">${examTableRows(state.exams)}</tbody></table></div>
    </section>`;
}

function examTableRows(exams) {
  if (!exams.length) return `<tr><td colspan="6" class="empty-state">${escapeHTML(t("noExams"))}</td></tr>`;
  return exams.map((exam) => `<tr data-exam-row data-status="${escapeHTML(exam.status)}" data-course="${escapeHTML(courseName(exam))}" data-search="${escapeHTML(`${examName(exam)} ${courseName(exam)}`.toLowerCase())}">
    <td><strong>${escapeHTML(examName(exam))}</strong></td><td>${escapeHTML(courseName(exam))}</td><td>${escapeHTML(formatDate(exam.date))}</td>
    <td><span class="progress-text">${escapeHTML(exam.graded)} / ${escapeHTML(exam.papers)}</span><div class="progress-line"><span style="width:${percent(exam)}%"></span></div></td>
    <td><span class="badge ${statusClass(exam)}">${escapeHTML(examStatus(exam))}</span></td>
    <td><div class="table-actions"><a class="small-action" href="#grading">${escapeHTML(t("review"))}</a><a class="small-action" href="#upload">${escapeHTML(t("open"))}</a></div></td></tr>`).join("");
}

function renderCreate() {
  return `${heading("createHeading", "createIntro")}
    <form id="create-exam-form" class="form-layout">
      <div>
        <section class="panel form-section"><h2>${escapeHTML(t("examDetails"))}</h2><p>${escapeHTML(t("examDetailsSub"))}</p>
          <div class="form-grid">
            <div class="field full"><label for="exam-title">${escapeHTML(t("examTitle"))} *</label><input id="exam-title" name="title" required placeholder="${escapeHTML(t("titlePlaceholder"))}"></div>
            <div class="field"><label for="exam-course">${escapeHTML(t("courseLabel"))} *</label><input id="exam-course" name="course" required placeholder="${escapeHTML(t("chooseCourse"))}"></div>
            <div class="field"><label for="exam-date">${escapeHTML(t("examDate"))} *</label><input id="exam-date" name="date" type="date" required></div>
            <div class="field"><label for="exam-score">${escapeHTML(t("totalScore"))} *</label><input id="exam-score" name="score" type="number" min="1" required value="100"></div>
            <div class="field"><label for="exam-duration">${escapeHTML(t("duration"))}</label><input id="exam-duration" name="duration" type="number" min="1" placeholder="90"></div>
          </div>
        </section>
        <section class="panel form-section"><h2>${escapeHTML(t("gradingCriteria"))}</h2><p>${escapeHTML(t("gradingCriteriaSub"))}</p>
          <div id="question-fields">${questionFields(0)}</div>
          <button type="button" id="add-question" class="button button-quiet">＋ ${escapeHTML(t("addQuestion"))}</button>
          <span class="field-hint">${escapeHTML(t("criteriaHint"))}</span>
          <div class="form-actions"><a href="#exams" class="button button-secondary">${escapeHTML(t("cancel"))}</a><button class="button button-primary" type="submit">${escapeHTML(t("saveExam"))}</button></div>
        </section>
      </div>
      <aside><div class="side-note"><h3>${escapeHTML(t("goodPractice"))}</h3><p>${escapeHTML(t("practiceText"))}</p><ul>${t("practiceList")}</ul></div><div class="side-note"><h3>${escapeHTML(t("privacyTitle"))}</h3><p>${escapeHTML(t("privacyText"))}</p></div></aside>
    </form>`;
}

function questionFields(index) {
  return `<section class="question-entry" data-question-block>
    <div class="field"><label for="question-${index}">${escapeHTML(t("questionLabel"))} ${index + 1}</label><textarea id="question-${index}" data-question-text placeholder="${escapeHTML(t("questionPlaceholder"))}"></textarea></div>
    <div class="field"><label for="answer-${index}">${escapeHTML(t("modelAnswer"))}</label><textarea id="answer-${index}" data-question-answer placeholder="${escapeHTML(t("answerPlaceholder"))}"></textarea></div>
  </section>`;
}

function renderUpload() {
  const options = state.exams.map((exam) => `<option value="${escapeHTML(exam.id)}">${escapeHTML(examName(exam))} — ${escapeHTML(courseName(exam))}</option>`).join("");
  return `${heading("uploadHeading", "uploadIntro")}
    <div class="form-layout"><div>
      <section class="panel form-section"><h2>${escapeHTML(t("chooseExam"))}</h2><p>${escapeHTML(t("uploadIntro"))}</p>
        <div class="field"><label for="upload-exam">${escapeHTML(t("chooseExam"))} *</label><select id="upload-exam"><option value="">${escapeHTML(t("chooseExamOption"))}</option>${options}</select></div>
        <label class="upload-dropzone" id="upload-dropzone" for="file-input"><span><span class="upload-symbol" aria-hidden="true">↑</span><strong>${escapeHTML(t("dropTitle"))}</strong><p>${escapeHTML(t("orBrowse"))}</p><p>${escapeHTML(t("supported"))}</p><input id="file-input" type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" multiple></span></label>
        <div class="file-list" id="file-list"></div>
        <div class="notice">${t("uploadNotice")}</div>
        <div class="form-actions"><button type="button" id="save-upload-list" class="button button-primary">${escapeHTML(t("saveUploadList"))}</button></div>
      </section>
      <section class="panel form-section"><h2>${escapeHTML(t("filesAdded"))}</h2><p>${escapeHTML(t("uploadHelp"))}</p><div class="table-scroll"><table class="data-table"><thead><tr><th>${escapeHTML(t("examName"))}</th><th>${escapeHTML(t("filesAdded"))}</th><th>${escapeHTML(t("status"))}</th></tr></thead><tbody>${renderUploads()}</tbody></table></div></section>
    </div>
    <aside><div class="side-note"><h3>${escapeHTML(t("uploadHelpTitle"))}</h3><p>${escapeHTML(t("uploadHelp"))}</p></div><div class="side-note"><h3>${escapeHTML(t("privacyTitle"))}</h3><p>${escapeHTML(t("privacyText"))}</p></div></aside></div>`;
}

function renderUploads() {
  if (!state.uploads.length) return `<tr><td colspan="3" class="empty-state">${escapeHTML(t("noData"))}</td></tr>`;
  return state.uploads.map((upload) => {
    const exam = state.exams.find((item) => item.id === upload.examId);
    return `<tr><td><strong>${escapeHTML(exam ? examName(exam) : t("unknown"))}</strong></td><td>${escapeHTML(upload.files.length)}</td><td><span class="badge badge-neutral">${escapeHTML(isEnglish() ? "Local list only" : "قائمة محلية فقط")}</span></td></tr>`;
  }).join("");
}

function renderFileList() {
  const list = document.getElementById("file-list");
  if (!list) return;
  if (!selectedFiles.length) {
    list.innerHTML = `<div class="empty-state">${escapeHTML(t("noFiles"))}</div>`;
    return;
  }
  list.innerHTML = selectedFiles.map((file, index) => `<div class="file-item"><span class="file-type">${escapeHTML(file.name.split(".").pop().toUpperCase().slice(0, 4))}</span><span class="file-copy"><strong>${escapeHTML(file.name)}</strong><small>${escapeHTML((file.size / 1024 / 1024).toFixed(2))} MB</small></span><button type="button" class="remove-file" data-remove-file="${index}" aria-label="${escapeHTML(t("remove"))}">×</button></div>`).join("");
}

function renderGrading() {
  const sample = reviewSamples[activeReview % reviewSamples.length];
  const stored = state.reviews.find((item) => item.studentKey === sample.studentKey && item.questionKey === sample.questionKey) || sample;
  const done = state.reviews.some((item) => item.studentKey === sample.studentKey && item.questionKey === sample.questionKey && item.saved);
  const reviewTotal = reviewSamples.reduce((total, item) => {
    const current = state.reviews.find((review) => review.studentKey === item.studentKey && review.questionKey === item.questionKey);
    return total + Number(current?.score ?? item.score);
  }, 0);
  const maximumTotal = reviewSamples.reduce((total, item) => total + item.max, 0);
  const modelAnswer = [
    isEnglish() ? "Uses sunlight to convert carbon dioxide and water into glucose and oxygen." : "تستخدم ضوء الشمس لتحويل الماء وثاني أكسيد الكربون إلى جلوكوز وأكسجين.",
    isEnglish() ? "Energy flows from producers to consumers and decreases at each trophic level." : "تنتقل الطاقة من المنتجات إلى المستهلكات، وتقل عند كل مستوى غذائي.",
    isEnglish() ? "Roots anchor the plant and absorb water and mineral salts from the soil." : "تثبت الجذور النبات وتمتص الماء والأملاح المعدنية من التربة."
  ][activeReview % 3];
  const response = isEnglish() ? [
    "Photosynthesis is how plants use sunlight to turn water and carbon dioxide into sugar and oxygen.",
    "Energy moves from plants to animals in a food chain, and less is available at each step.",
    "Roots hold the plant in the soil and take in water and some minerals."
  ][activeReview % 3] : stored.response;
  const criterionA = t("criteriaPartial");
  return `${heading("gradingHeading", "gradingIntro", `<span class="badge badge-warning">${escapeHTML(t("gradingDemoNote"))}</span>`)}
    <div class="review-layout"><div class="panel answer-card">
      <div class="answer-head"><div><h2>${escapeHTML(t(sample.studentKey))}</h2><p>${escapeHTML(t("biologyExam"))} · ${escapeHTML(t(sample.questionKey))}</p></div><span class="badge ${done ? "badge-success" : "badge-warning"}">${escapeHTML(done ? t("reviewed") : t("inProgress"))}</span></div>
      <div class="question-block"><small>${escapeHTML(t("questionLabel"))} · ${activeReview + 1} · ${escapeHTML(stored.max)} ${escapeHTML(t("points"))}</small><p>${escapeHTML(isEnglish() ? ["Explain the process of photosynthesis and name its main products.", "Describe how energy moves through a food chain.", "Explain two functions of plant roots."][activeReview % 3] : ["اشرح عملية البناء الضوئي واذكر نواتجها الأساسية.", "صف كيفية انتقال الطاقة عبر السلسلة الغذائية.", "اشرح وظيفتين تقوم بهما جذور النبات."][activeReview % 3])}</p></div>
      <div class="student-answer"><strong>${escapeHTML(t("studentResponse"))}</strong>${escapeHTML(response)}</div>
      <div class="student-answer"><strong>${escapeHTML(t("model"))}</strong>${escapeHTML(modelAnswer)}</div>
      <div class="criteria-list"><div class="criterion"><span class="criterion-check">✓</span><span>${escapeHTML(t("criteriaMet"))}: ${escapeHTML(isEnglish() ? "Identifies the main process and one key input." : "تحديد العملية الأساسية وأحد العناصر الداخلة فيها.")}</span></div><div class="criterion"><span class="criterion-check partial">~</span><span>${escapeHTML(criterionA)}: ${escapeHTML(isEnglish() ? "Names both products of the process." : "ذكر ناتجي العملية كليهما.")}</span></div></div>
      <form id="review-form"><div class="score-box"><label for="review-score">${escapeHTML(t("grade"))}</label><div class="score-control"><input id="review-score" type="number" min="0" max="${escapeHTML(stored.max)}" step="0.5" value="${escapeHTML(stored.score)}"><span>${escapeHTML(t("outOf"))} ${escapeHTML(stored.max)}</span><strong id="score-percent">${Math.round(stored.score / stored.max * 100)}%</strong></div></div>
      <div class="field feedback-input"><label for="review-feedback">${escapeHTML(t("feedback"))}</label><textarea id="review-feedback" placeholder="${escapeHTML(t("feedbackPlaceholder"))}">${escapeHTML(stored.feedback || "")}</textarea></div>
      <div class="review-controls"><span class="review-progress">${activeReview + 1} / ${reviewSamples.length}</span><div class="toolbar-right"><button type="button" id="previous-review" class="button button-secondary">${escapeHTML(t("previous"))}</button><button type="submit" class="button button-primary">${escapeHTML(t("saveReview"))}</button><button type="button" id="next-review" class="button button-secondary">${escapeHTML(t("next"))}</button></div></div>
      </form>
    </div>
    <aside><section class="panel"><div class="panel-heading"><div><h2>${escapeHTML(t("selectAnswer"))}</h2><p>${escapeHTML(t("biologyExam"))}</p></div></div><div class="question-list">${reviewSamples.map((item, index) => `<button type="button" class="${index === activeReview ? "selected" : ""}" data-review-index="${index}"><span><strong>${escapeHTML(t(item.studentKey))}</strong><small>${escapeHTML(t(item.questionKey))}</small></span><span class="badge ${state.reviews.some((review) => review.studentKey === item.studentKey && review.saved) ? "badge-success" : "badge-neutral"}">${state.reviews.some((review) => review.studentKey === item.studentKey && review.saved) ? escapeHTML(t("reviewed")) : `${escapeHTML(item.score)} / ${escapeHTML(item.max)}`}</span></button>`).join("")}</div><div class="score-summary"><div><span>${escapeHTML(t("totalScore"))}</span><strong>${maximumTotal}</strong></div><div><span>${escapeHTML(t("grade"))}</span><strong>${reviewTotal} / ${maximumTotal}</strong></div><div><span>${escapeHTML(t("percentage"))}</span><strong>${Math.round(reviewTotal / maximumTotal * 100)}%</strong></div></div></section></aside></div>`;
}

const resultRows = [
  ["Sara Mahmoud", 88], ["Omar Ali", 76], ["Nour Ahmed", 91], ["Youssef Adel", 64], ["Mona Samir", 82], ["Hana Tarek", 73]
];
function renderResults() {
  return `${heading("resultsHeading", "resultsIntro", `<button type="button" id="print-report" class="button button-secondary">${escapeHTML(t("printReport"))}</button><button type="button" id="download-csv" class="button button-primary">${escapeHTML(t("downloadCsv"))} ↓</button>`)}
    <section class="stat-grid">${statCard("totalStudents", "84", "◉", t("resultExam"))}${statCard("gradedPapers", "61", "✓", t("resultExam"))}${statCard("classAverage", "78.4%", "↗", t("resultExam"))}${statCard("highestScore", "98%", "↑", t("resultExam"))}</section>
    <section class="panel"><div class="panel-heading"><div><h2>${escapeHTML(t("resultsSummary"))}</h2><p>${escapeHTML(t("resultExam"))}</p></div><span class="badge badge-success">${escapeHTML(t("reviewedStatus"))}</span></div>
    <div class="table-scroll"><table class="data-table" id="results-table"><thead><tr><th>${escapeHTML(t("student"))}</th><th>${escapeHTML(t("score"))}</th><th>${escapeHTML(t("percentage"))}</th><th>${escapeHTML(t("reviewedStatus"))}</th></tr></thead><tbody>${resultRows.map(([name, score]) => `<tr><td><strong>${escapeHTML(name)}</strong></td><td>${escapeHTML(score)} / 100</td><td><span class="progress-text">${escapeHTML(score)}%</span><div class="progress-line"><span style="width:${score}%"></span></div></td><td><span class="badge badge-success">${escapeHTML(t("approved"))}</span></td></tr>`).join("")}</tbody></table></div><p class="field-hint" style="margin:14px 0 0">${escapeHTML(t("gradingDemoNote"))}</p></section>`;
}

function renderSettings() {
  return `${heading("settingsHeading", "settingsIntro", `<a href="#login" class="button button-secondary">${escapeHTML(t("signOut"))}</a>`)}
    <form id="settings-form" class="form-layout">
      <div class="panel form-section"><h2>${escapeHTML(t("profileSettings"))}</h2><p>${escapeHTML(t("profileSub"))}</p>
        <div class="form-grid">
          <div class="field"><label for="profile-name">${escapeHTML(t("fullName"))}</label><input id="profile-name" name="name" value="${escapeHTML(state.profile.name)}" placeholder="${escapeHTML(t("profName"))}"></div>
          <div class="field"><label for="profile-email">${escapeHTML(t("email"))}</label><input id="profile-email" name="email" type="email" value="${escapeHTML(state.profile.email)}" placeholder="name@university.edu"></div>
          <div class="field full"><label for="profile-institution">${escapeHTML(t("institution"))}</label><input id="profile-institution" name="institution" value="${escapeHTML(state.profile.institution)}" placeholder="${escapeHTML(t("workspace"))}"></div>
          <div class="field"><label for="profile-language">${escapeHTML(t("language"))}</label><select id="profile-language" name="language"><option value="ar" ${state.lang === "ar" ? "selected" : ""}>${escapeHTML(t("arabic"))}</option><option value="en" ${state.lang === "en" ? "selected" : ""}>${escapeHTML(t("english"))}</option></select></div>
        </div><div class="form-actions"><button type="submit" class="button button-primary">${escapeHTML(t("saveSettings"))}</button></div>
      </div><aside><div class="side-note"><h3>${escapeHTML(t("preferences"))}</h3><p>${escapeHTML(t("preferencesSub"))}</p></div><div class="side-note"><h3>${escapeHTML(t("privacyTitle"))}</h3><p>${escapeHTML(t("privacyText"))}</p></div></aside>
    </form>`;
}

function renderGuide() {
  return `${heading("guideHeading", "guideIntro")}
    <section class="guide-grid">${[1, 2, 3].map((step) => `<article class="panel guide-card"><div class="guide-step">0${step}</div><h2>${escapeHTML(t(`step${step}Title`))}</h2><p>${escapeHTML(t(`step${step}Text`))}</p></article>`).join("")}</section>
    <section class="guide-end"><div><h2>${escapeHTML(t("guideEndTitle"))}</h2><p>${escapeHTML(t("guideEndText"))}</p></div><a class="button button-primary" href="#create">${escapeHTML(t("newExam"))} ←</a></section>`;
}

function renderLanding() {
  const brand = `<a class="landing-brand" href="#landing" aria-label="${escapeHTML(t("brand"))}"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span><strong>${escapeHTML(t("brand"))}</strong><small>${escapeHTML(t("brandSub"))}</small></span></a>`;
  return `<div class="landing-page">
    <header class="landing-header"><div class="landing-header-inner">
      ${brand}
      <nav class="landing-nav" aria-label="${isEnglish() ? "Main navigation" : "التنقل الرئيسي"}">
        <a href="#landing-features">${escapeHTML(t("landingNavFeatures"))}</a>
        <a href="#landing-how">${escapeHTML(t("landingNavHow"))}</a>
        <a href="#landing-principles">${escapeHTML(t("landingNavPrinciples"))}</a>
      </nav>
      <div class="landing-header-actions"><button type="button" class="language-button language-toggle">${escapeHTML(isEnglish() ? "عربي" : "EN")}</button><a class="landing-login" href="#login">${escapeHTML(t("signIn"))}</a><a class="button button-primary landing-header-cta" href="#dashboard">${escapeHTML(t("landingCta"))}</a></div>
    </div></header>
    <main>
      <section class="landing-hero"><div class="landing-hero-inner">
        <div class="landing-hero-copy"><div class="landing-kicker"><span></span>${escapeHTML(t("landingEyebrow"))}</div>
          <h1>${escapeHTML(t("landingTitle"))}</h1><p>${escapeHTML(t("landingDescription"))}</p>
          <div class="landing-hero-actions"><a class="button button-primary landing-main-cta" href="#dashboard">${escapeHTML(t("landingCta"))}<span aria-hidden="true">←</span></a><a class="landing-secondary-link" href="#landing-how">${escapeHTML(t("landingSecondary"))}<span aria-hidden="true">↓</span></a></div>
          <div class="landing-hero-foot"><span class="landing-check">✓</span>${escapeHTML(t("landingReviewStatus"))}</div>
        </div>
        <div class="landing-visual" aria-label="${escapeHTML(t("landingPreviewLabel"))}">
          <div class="visual-orbit visual-orbit-one"></div><div class="visual-orbit visual-orbit-two"></div>
          <div class="review-preview">
            <div class="review-preview-head"><span class="preview-file-icon">01</span><span><strong>${escapeHTML(t("landingPreviewLabel"))}</strong><small>${escapeHTML(t("biologyExam"))}</small></span><span class="preview-more">···</span></div>
            <div class="preview-divider"></div>
            <div class="preview-label">${escapeHTML(t("questionLabel"))} 01 <span>10 ${escapeHTML(t("points"))}</span></div>
            <p class="preview-question">${escapeHTML(t("landingPreviewQuestion"))}</p>
            <div class="preview-answer"><small>${escapeHTML(t("studentResponse"))}</small><p>${escapeHTML(t("landingPreviewAnswer"))}</p></div>
            <div class="preview-rubric"><span class="rubric-check">✓</span><span>${escapeHTML(t("criteriaMet"))}</span><strong>+7</strong></div>
            <div class="preview-score"><span><small>${escapeHTML(t("landingPreviewScore"))}</small><strong>8 / 10</strong></span><span class="preview-score-ring">80%</span></div>
          </div>
          <div class="review-stamp"><span class="stamp-icon">✓</span><span><strong>${escapeHTML(t("landingReviewLabel"))}</strong><small>${escapeHTML(t("landingReviewStatus"))}</small></span></div>
        </div>
      </div><div class="hero-grid-lines" aria-hidden="true"></div></section>
      <section class="landing-overview landing-section" id="landing-features"><div class="landing-section-heading"><div class="landing-kicker">${escapeHTML(t("landingNavFeatures"))}</div><h2>${escapeHTML(t("landingOverview"))}</h2><p>${escapeHTML(t("landingOverviewText"))}</p></div>
        <div class="landing-feature-grid">
          <article class="landing-feature-card"><span class="feature-number">01</span><span class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3.75h7l4 4v12.5H7zM14 4v4h4M10 13h5M10 16h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg></span><h3>${escapeHTML(t("landingFeature1Title"))}</h3><p>${escapeHTML(t("landingFeature1Text"))}</p></article>
          <article class="landing-feature-card"><span class="feature-number">02</span><span class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 4.2 4.2L19 6.5M12 3.5a8.5 8.5 0 1 0 8.5 8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg></span><h3>${escapeHTML(t("landingFeature2Title"))}</h3><p>${escapeHTML(t("landingFeature2Text"))}</p></article>
          <article class="landing-feature-card"><span class="feature-number">03</span><span class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 19.5h16M6.5 16V10m5.5 6V5m5.5 11v-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg></span><h3>${escapeHTML(t("landingFeature3Title"))}</h3><p>${escapeHTML(t("landingFeature3Text"))}</p></article>
        </div>
      </section>
      <section class="landing-process landing-section" id="landing-how"><div class="landing-section-heading"><div class="landing-kicker">${escapeHTML(t("landingNavHow"))}</div><h2>${escapeHTML(t("landingHowTitle"))}</h2></div>
        <div class="process-grid">${[1, 2, 3].map((step) => `<article class="process-step"><span class="process-number">0${step}</span><span class="process-line"></span><h3>${escapeHTML(t(`landingHow${step}Title`))}</h3><p>${escapeHTML(t(`landingHow${step}Text`))}</p></article>`).join("")}</div>
      </section>
      <section class="landing-principle landing-section" id="landing-principles"><div class="principle-mark" aria-hidden="true">“</div><div><div class="landing-kicker">${escapeHTML(t("landingPrincipleEyebrow"))}</div><h2>${escapeHTML(t("landingPrincipleTitle"))}</h2><p>${escapeHTML(t("landingPrincipleText"))}</p></div><span class="principle-rule"></span></section>
      <section class="landing-final-cta"><div><div class="landing-kicker">${escapeHTML(t("brand"))}</div><h2>${escapeHTML(t("landingCtaTitle"))}</h2><p>${escapeHTML(t("landingCtaText"))}</p></div><a class="button button-primary" href="#dashboard">${escapeHTML(t("landingCta"))}<span aria-hidden="true">←</span></a></section>
    </main>
    <footer class="landing-footer">${brand}<span>${escapeHTML(t("landingFooter"))}</span><a class="landing-footer-login" href="#login">${escapeHTML(t("signIn"))}</a></footer>
  </div>`;
}

function renderAuth(signup = false) {
  const form = signup
    ? `<form class="auth-form" id="auth-form" data-signup>
        <div class="field"><label for="auth-name">${escapeHTML(t("fullName"))}</label><input id="auth-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="auth-email">${escapeHTML(t("email"))}</label><input id="auth-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="auth-password">${escapeHTML(t("password"))}</label><input id="auth-password" name="password" type="password" autocomplete="new-password" minlength="8" required></div>
        <div class="field"><label for="auth-confirm">${escapeHTML(t("confirmPassword"))}</label><input id="auth-confirm" name="confirm" type="password" autocomplete="new-password" minlength="8" required></div>
        <button class="button button-primary auth-submit" type="submit">${escapeHTML(t("createAccount"))}</button>
      </form>`
    : `<form class="auth-form" id="auth-form">
        <div class="field"><label for="auth-email">${escapeHTML(t("email"))}</label><input id="auth-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="auth-password">${escapeHTML(t("password"))}</label><input id="auth-password" name="password" type="password" autocomplete="current-password" required></div>
        <div class="auth-options"><label><input type="checkbox" name="remember"> ${escapeHTML(t("rememberMe"))}</label><button type="button" class="text-link" id="forgot-password">${escapeHTML(t("forgotPassword"))}</button></div>
        <button class="button button-primary auth-submit" type="submit">${escapeHTML(t("loginButton"))}</button>
      </form>`;
  return `<section class="auth-layout">
    <div class="auth-aside"><a href="#landing" class="brand"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span class="brand-copy"><strong>${escapeHTML(t("brand"))}</strong><small>${escapeHTML(t("brandSub"))}</small></span></a>
      <div class="auth-aside-copy"><div class="eyebrow">${escapeHTML(t("workspace"))}</div><h1>${escapeHTML(t("welcomeTitle"))}</h1><p>${escapeHTML(t("welcomeText"))}</p></div>
      <span class="auth-aside-foot">${escapeHTML(t("term"))}</span>
    </div>
    <div class="auth-main"><div class="auth-top"><span>${escapeHTML(t("brand"))}</span><button type="button" class="language-button language-toggle">${escapeHTML(isEnglish() ? "عربي" : "EN")}</button></div>
      <div class="auth-card"><div class="eyebrow">${escapeHTML(t("brand"))}</div><h2>${escapeHTML(t(signup ? "signupHeading" : "loginHeading"))}</h2><p>${escapeHTML(t(signup ? "signupIntro" : "loginIntro"))}</p>${form}
      <div class="auth-switch">${escapeHTML(t(signup ? "haveAccount" : "noAccount"))} <a href="#${signup ? "login" : "signup"}">${escapeHTML(t(signup ? "signIn" : "createAccount"))}</a></div>
      <p class="auth-notice">${escapeHTML(t("authUnavailable"))}</p></div>
      <a class="button button-secondary auth-back" href="#landing">${escapeHTML(t("returnHome"))}</a>
    </div>
  </section>`;
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = isEnglish() ? "ltr" : "rtl";
  const isLandingPage = currentPage === "landing";
  document.title = isEnglish()
    ? isLandingPage ? "Miyār | A clearer way to assess academic work" : "Miyār | Academic Assessment Platform"
    : isLandingPage ? "مِعيار | تقييم أكاديمي أوضح" : "مِعيار | منصة التقييم الأكاديمي";
  document.querySelector('meta[name="description"]').content = isEnglish()
    ? "Miyār helps educators organize short-answer and essay grading, and review every score before finalizing results."
    : translations.ar.landingDescription;
  document.getElementById("language-toggle").textContent = isEnglish() ? "عربي" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[state.lang][key]) element.textContent = t(key);
  });
  if (state.profile.name) document.querySelector(".profile-copy strong").textContent = state.profile.name;
  const workspaceName = document.querySelector(".workspace-copy strong");
  if (state.profile.institution && workspaceName) workspaceName.textContent = state.profile.institution;
  document.getElementById("exam-count").textContent = String(state.exams.length);
}

function render() {
  if (!pageNames[currentPage]) currentPage = "dashboard";
  document.body.classList.toggle("landing-mode", currentPage === "landing");
  document.body.classList.toggle("auth-mode", currentPage === "login" || currentPage === "signup");
  applyLanguage();
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => link.classList.toggle("active", link.dataset.page === currentPage));
  document.getElementById("page-breadcrumb").textContent = t(pageNames[currentPage]);
  const pages = { dashboard: renderDashboard, exams: renderExams, create: renderCreate, upload: renderUpload, grading: renderGrading, results: renderResults, settings: renderSettings, guide: renderGuide, login: () => renderAuth(false), signup: () => renderAuth(true), landing: renderLanding };
  pageContent.innerHTML = pages[currentPage]();
  pageContent.focus({ preventScroll: true });
  document.getElementById("sidebar").classList.remove("open");
  bindPageEvents();
}

function bindPageEvents() {
  const createForm = document.getElementById("create-exam-form");
  if (createForm) createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(createForm);
    const title = String(data.get("title") || "").trim();
    const course = String(data.get("course") || "").trim();
    const date = String(data.get("date") || "");
    const score = Number(data.get("score"));
    const questions = [...createForm.querySelectorAll("[data-question-block]")].map((block) => ({
      question: block.querySelector("[data-question-text]").value.trim(),
      answer: block.querySelector("[data-question-answer]").value.trim()
    })).filter((item) => item.question || item.answer);
    if (!title || !course || !date || !Number.isFinite(score) || score <= 0) {
      notify(t("required"), true);
      return;
    }
    state.exams.unshift({ id: `exam-${Date.now()}`, title, course, date, papers: 0, graded: 0, status: "active", score, duration: Number(data.get("duration")) || null, questions });
    persist();
    notify(t("started"));
    navigate("exams");
  });
  const addQuestion = document.getElementById("add-question");
  if (addQuestion) addQuestion.addEventListener("click", () => {
    const container = document.getElementById("question-fields");
    const index = container.querySelectorAll("[data-question-block]").length;
    container.insertAdjacentHTML("beforeend", questionFields(index));
  });

  const search = document.getElementById("exam-search");
  const statusFilter = document.getElementById("status-filter");
  const courseFilter = document.getElementById("course-filter");
  if (search && statusFilter && courseFilter) {
    const filter = () => {
      const query = search.value.trim().toLowerCase();
      const status = statusFilter.value;
      const course = courseFilter.value;
      const matches = state.exams.filter((exam) =>
        (!query || `${examName(exam)} ${courseName(exam)}`.toLowerCase().includes(query)) &&
        (status === "all" || exam.status === status) &&
        (course === "all" || courseName(exam) === course)
      );
      document.getElementById("exam-table-body").innerHTML = examTableRows(matches);
    };
    search.addEventListener("input", filter);
    statusFilter.addEventListener("change", filter);
    courseFilter.addEventListener("change", filter);
  }

  const fileInput = document.getElementById("file-input");
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const valid = [];
      for (const file of fileInput.files) {
        const allowed = /\.(pdf|jpe?g|png)$/i.test(file.name);
        if (!allowed || file.size > 20 * 1024 * 1024) {
          notify(isEnglish() ? `${file.name}: unsupported format or file exceeds 20 MB.` : `${file.name}: صيغة غير مدعومة أو حجم الملف يتجاوز 20 ميجابايت.`, true);
          continue;
        }
        valid.push(file);
      }
      selectedFiles = [...selectedFiles, ...valid];
      renderFileList();
      fileInput.value = "";
    });
    const zone = document.getElementById("upload-dropzone");
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("dragging"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("dragging"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("dragging");
      const valid = [...event.dataTransfer.files].filter((file) => /\.(pdf|jpe?g|png)$/i.test(file.name) && file.size <= 20 * 1024 * 1024);
      selectedFiles = [...selectedFiles, ...valid];
      renderFileList();
      if (valid.length < event.dataTransfer.files.length) notify(t("supported"), true);
    });
    renderFileList();
  }

  const fileList = document.getElementById("file-list");
  if (fileList) fileList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-file]");
    if (!button) return;
    selectedFiles.splice(Number(button.dataset.removeFile), 1);
    renderFileList();
  });

  const saveUploads = document.getElementById("save-upload-list");
  if (saveUploads) saveUploads.addEventListener("click", () => {
    const examId = document.getElementById("upload-exam").value;
    if (!examId || !selectedFiles.length) {
      notify(t("required"), true);
      return;
    }
    state.uploads.unshift({ id: `upload-${Date.now()}`, examId, files: selectedFiles.map((file) => file.name), createdAt: new Date().toISOString() });
    persist();
    selectedFiles = [];
    notify(t("uploadSaved"));
    render();
  });

  document.querySelectorAll("[data-review-index]").forEach((button) => button.addEventListener("click", () => {
    activeReview = Number(button.dataset.reviewIndex);
    render();
  }));
  const scoreInput = document.getElementById("review-score");
  if (scoreInput) scoreInput.addEventListener("input", () => {
    const max = Number(scoreInput.max);
    scoreInput.value = String(Math.min(max, Math.max(0, Number(scoreInput.value) || 0)));
    document.getElementById("score-percent").textContent = `${Math.round(Number(scoreInput.value) / max * 100)}%`;
  });
  const reviewForm = document.getElementById("review-form");
  if (reviewForm) reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const sample = reviewSamples[activeReview];
    const existing = state.reviews.find((item) => item.studentKey === sample.studentKey && item.questionKey === sample.questionKey);
    const review = { ...(existing || sample), score: Number(document.getElementById("review-score").value), feedback: document.getElementById("review-feedback").value.trim(), saved: true };
    state.reviews = [...state.reviews.filter((item) => !(item.studentKey === sample.studentKey && item.questionKey === sample.questionKey)), review];
    persist();
    notify(t("reviewSaved"));
    render();
  });
  const previous = document.getElementById("previous-review");
  if (previous) previous.addEventListener("click", () => { activeReview = (activeReview + reviewSamples.length - 1) % reviewSamples.length; render(); });
  const next = document.getElementById("next-review");
  if (next) next.addEventListener("click", () => { activeReview = (activeReview + 1) % reviewSamples.length; render(); });

  const settingsForm = document.getElementById("settings-form");
  if (settingsForm) settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(settingsForm);
    state.profile = { name: String(data.get("name") || "").trim(), email: String(data.get("email") || "").trim(), institution: String(data.get("institution") || "").trim() };
    const language = String(data.get("language"));
    if (language === "ar" || language === "en") state.lang = language;
    persist();
    render();
    notify(t("saved"));
  });

  const csv = document.getElementById("download-csv");
  if (csv) csv.addEventListener("click", downloadResults);
  const print = document.getElementById("print-report");
  if (print) print.addEventListener("click", () => { notify(t("printHint")); window.print(); });

  const authForm = document.getElementById("auth-form");
  if (authForm) authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (authForm.hasAttribute("data-signup") && document.getElementById("auth-password").value !== document.getElementById("auth-confirm").value) {
      notify(t("authMismatch"), true);
      return;
    }
    notify(t("authUnavailable"), true);
  });
  const forgotPassword = document.getElementById("forgot-password");
  if (forgotPassword) forgotPassword.addEventListener("click", () => notify(t("authUnavailable"), true));
}

function downloadResults() {
  const rows = [[t("student"), t("score"), t("percentage")], ...resultRows.map(([name, score]) => [name, `${score} / 100`, `${score}%`])];
  const csv = "\uFEFF" + rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "miyaar-results.csv";
  anchor.click();
  URL.revokeObjectURL(url);
  notify(t("exportReady"));
}

function navigate(page) {
  currentPage = page;
  if (location.hash !== `#${page}`) location.hash = page;
  render();
}

document.querySelectorAll(".nav-link[data-page]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  navigate(link.dataset.page);
}));
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.dataset.page) {
    link.addEventListener("click", (event) => { event.preventDefault(); navigate(link.dataset.page); });
  } else {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href").slice(1);
      if (pageNames[target]) { event.preventDefault(); navigate(target); }
    });
  }
});
window.addEventListener("hashchange", () => {
  const target = location.hash.slice(1);
  if (currentPage === "landing" && target.startsWith("landing-") && document.getElementById(target)) return;
  currentPage = target || "landing";
  if (currentPage.startsWith("landing-")) currentPage = "landing";
  render();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-toggle")) return;
  state.lang = isEnglish() ? "ar" : "en";
  persist();
  render();
});
document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.querySelector(".profile-button").addEventListener("click", () => navigate("settings"));

render();
