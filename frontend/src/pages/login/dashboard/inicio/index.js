import Lottie from 'react-lottie'
import animationData from '../../../../components/animations/animation2.json'
import './style.css'
export default function InicioDashboard(){
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <section id="inicioDashboard">
             <div className='lottieAnimation'><Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              />
              </div> 
                
        </section>
    )
}