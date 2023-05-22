
import Unity, { UnityContext } from "react-unity-webgl";


const About = () => {
  const unityContext = new UnityContext({
    loaderUrl: "build/myapp.loader.js",
    dataUrl: "build/myapp.data",
    frameworkUrl: "build/myapp.framework.js",
    codeUrl: "build/myapp.wasm",
    companyName: "Creative Distrix",
    productVersion: "1.0",
    webglContextAttributes: {
        preserveDrawingBuffer: true
    }
  });
    return(
        <div className="button-63 ">
        <Unity unityContext={unityContext}
         style={{
            height: "100%",
            width: 650,
            border: "2px solid black",
          //  backgroundImage: "url('https://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg')"
          backgroundColor: "grey"
          }}
        
        />
        </div>
    )

}
export default About;