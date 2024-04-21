import './DashBoardMainFrame.css';
import Profile from './Profile'
import MyClass from './MyClass'
import CheckLectureNote from './CheckLectureNote'
import CheckStage from './CheckStage'


function DashBoardMainFrame({activeComponent}){
    const renderCenterComponent = () => {
        switch (activeComponent) {
          
          case 'profile':
            // 노션 페이지를 렌더링하는 경우, 노션 페이지의 URL을 iframe src 속성에 설정해야 합니다.
            return <Profile></Profile>
          case 'myClass':
            return <MyClass></MyClass>
          case 'checkLectureNote':
            return <CheckLectureNote></CheckLectureNote>
          case 'checkStage':
            return <CheckStage></CheckStage>
          default:
            return <div>선택된 컴포넌트가 없습니다.</div>;
        }
      };

    return(
        <div class="main-frame-wraper">
            {renderCenterComponent()}
        </div>
    );
}

export default DashBoardMainFrame