import React from 'react';
import '../css/Skills.scss'



class SkillsArticle extends React.Component {
    render() {
        return(
            <article className="skills_article_container">
            <div className="skills_article_rect">
                <h5 className='skills_article_title'>{this.props.article_title}</h5>
            </div>
            <p className='skills_article_desc'>{this.props.article_desc} </p>
            </article>
        );
    }
}
class Skills extends React.Component {



      
    render() {
        return(
            
            <div className="page_container skills_container ">
                <div style={{height:'5%'}}></div> 
                    <div className="skills_title_container">
                        <h3 className="skills_title">{this.props.skills_title}</h3>
                        <hr></hr>
                    </div>
                <section className="skills_main_container">
                    <div className="skills_section_container">
                        <SkillsArticle article_title="BASIC" article_desc="Slack과 Notion을 이용한 프로젝트 관리와 협업이 가능하며, Git을 이용한 형상관리가 가능합니다." />
                        <SkillsArticle article_title="WEB" article_desc="HTML5와 CSS3의 표준을 준수해 CSSOM과 DOM을 설계할 수 있으며, SEO에 대해 이해하고 있습니다. React과 SCSS 전처리기 사용경험이 있습니다." />
                        <SkillsArticle article_title="Mobile" article_desc="Java 또는 Kotlin을 이용한 Android Native App 개발이 가능합니다. 아임포트와 Firebase 모듈 사용 경험이 있습니다." />
                        <SkillsArticle article_title="LANGUAGE" article_desc="C와 Python, Java를 중점적으로 사용하며, Javascript와 Kotlin,C++의 기초적인 프로그래밍이 가능합니다. 최근 함수형 프로그래밍에 관심이 생겼습니다." />
                        <SkillsArticle article_title="BACKEND" article_desc="AWS와 GCP를 사용한 경험이 있습니다. 분산 처리에 대해 이해하며, OS와 네트워크에 대한 기초지식이 있습니다." />
                        <SkillsArticle article_title="GRAPHIC" article_desc="Adobe Photoshop, Illustrator, XD, Premier을 활용한 기초적인 디자인이 가능합니다." />      
                    </div>
                </section>
            </div>

        );
    }

}

export default Skills;