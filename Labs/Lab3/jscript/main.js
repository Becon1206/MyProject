function reloadPage() {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    const viewButtons = document.querySelectorAll('.view-btn');
    const lessonContent = document.getElementById('lesson-content');
    const lessonTitle = document.getElementById('lesson-title');
    const lessonContentText = document.getElementById('lesson-content-text');

    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            const materialType = this.parentElement.getAttribute('data-material');

            document.querySelectorAll('.lesson-content').forEach(content => {
                content.classList.remove('visible');
            });

            lessonContent.classList.add('visible');

            switch (materialType) {
                case 'django':
                    lessonTitle.innerText = 'Cơ sở Logic';
                    lessonContentText.innerHTML = `
                        <p>Django là một framework web mạnh mẽ dựa trên Python.</p>
                        <p>Bạn sẽ học cách cài đặt, cấu hình môi trường phát triển, và triển khai ứng dụng Django đầu tiên.</p>
                    `;
                    break;
                case 'fee':
                    lessonTitle.innerText = 'Algorithms';
                    lessonContentText.innerHTML = `
                        <p>FEE cung cấp kiến thức cơ bản về tài chính và quản lý tiền bạc.</p>
                        <p>Học cách lên kế hoạch tài chính và hiểu cách hoạt động của nền kinh tế.</p>
                    `;
                    break;
                case 'java-mock':
                    lessonTitle.innerText = 'Introduction';
                    lessonContentText.innerHTML = `
                            <p>Dự án mock trong Java giúp bạn hiểu cách triển khai một dự án từ đầu đến cuối.</p>
                            <p>Bạn sẽ học về thiết lập môi trường, cấu trúc dự án và các kỹ thuật lập trình Java tiên tiến.</p>
                        `;
                    break;
                default:
                    lessonTitle.innerText = 'Lesson Content';
                    lessonContentText.innerText = 'Chọn một bài học để xem nội dung chi tiết.';
            }
        });
    });
});

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function () {
        const lessonId = this.getAttribute('data-lesson');
        const lessonContent = document.getElementById(lessonId);

        if (lessonContent.classList.contains('visible')) {
            lessonContent.classList.remove('visible');
        } else {
            document.querySelectorAll('.lesson-content').forEach(content => content.classList.remove('visible'));

            lessonContent.classList.add('visible');
        }
    });
});

function showLesson(lessonId) {
    document.getElementById('lesson-content').style.display = 'block';
    document.querySelectorAll('.lesson-detail').forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(lessonId).style.display = 'block';
}

function showTopic(lessonId, topic) {
    const topics = ['lecture', 'exercises', 'references'];
    topics.forEach(t => {
        document.getElementById(lessonId + '-' + t).style.display = 'none';
    });
    document.getElementById(lessonId + '-' + topic).style.display = 'block';
}