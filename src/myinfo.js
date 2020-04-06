import React from 'react';
import './Myinfo.scss';


class Myinfo extends React.Component {



      
    render() {
        return(
        <section>

            <div className="page_container myinfo_container" >
                <div className="myinfo_left_container">
                    <div className="rect_btn_div jello-horizontal"  > 
                        <h3 className="title_name">My Info</h3>
                    </div>
                    {/* <img className="myinfo_character"src={myinfo_character} width ="150px"height="250px"alt="no img" /> */}
                    </div>
                <div className="myinfo_right_container">
                    <article>
                        <div className="myinfo_article_container">
                            <h4 className="myinfo_right_title">개발자 강호동</h4>
                            <p className="myinfo_article">
                                '세상을 널리 이롭게 하고 싶다'는 소망을 갖고 있는 주니어 개발자 강호동입니다.<br></br>
                                Computer Science에 대해 해박하다 자신할 수 없습니다. 남들보다 알고리즘을 구상하는 능력이 뛰어나지도 않습니다.
                                어릴적 부터 컴퓨터를 공부하며 다른 사람들이 내가 만든 프로그램을 사용했을 때의 그 뿌듯함이 좋았고, 삶의 원동력이 되었습니다.<br></br>
                                <br></br>
                                누구보다 뛰어난 코딩실력을 갖추고 싶지도, 난해한 알고리즘을 작성해 명망있는 개발자가 되는것이 꿈은 아닙니다. 세상에 도움이 되는 서비스를
                                만들어, 사람들에게 사랑받는 개발자가 되고싶습니다. 저는 '제가 만든 프로그램입니다' 라고 자신있게 말할 수 있는 사람이 될 수 있도록
                                꾸준히 노력하겠습니다.
                                </p>     
                            </div>
                    </article>
                    </div>
            </div>  
        </section>
        );
    }

}

export default Myinfo;