export default function Bio (){
    return(
        <div>
            <main className="main_container">
                <section className="section_one">
                <div className="text1"> 
                    <b>I`m </b>Juan Paulo
                </div>
                <div className="text2">
                <h1 >Buriticá</h1>
                </div>
                <div className="circle"></div>
                <div className="section_one_text2">
                    <div className="p1">
                   <div className="text3"> VP of Eng @splice —</div>
                    <div className="text4">
<b>I build effective distributed eng teams and latino/latam dev communities</b></div>  

<div className="text5">@colombia_dev, @quecharla, @jsconfco, @rubyconfco, @bogotaJS</div>
                    </div>
                </div>
                </section>

            </main>
            <style jsx>{`
                .main_container{
                    display:flex;
                    flex-direction:column;
                    position:absolute;
                    top:7rem;
                    left:1.1rem;

                }
                
                .text1{
                    font-size:16px;
                    font-weight:300;
                    
                }
                .text2{
                   margin-top:-2rem;
                    font-size:30px;
                }

                .circle{
                    width:0.3rem;
                    height:0.3rem;
                    background-color:white;
                    border-radius:50%;
                    margin-top:-2.5rem;
                }
                .section_one_text2{
                    font-size:11px;
                }
                .text3{
                    margin-top:3rem;
                }
                .text4{
                    width:8rem;
                
                }
                .text5{
                    width:9rem;
                }
                `}</style>
        </div>
    )
}