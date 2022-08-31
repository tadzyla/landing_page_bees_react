import './App.css';

function App() {

  function changePhoto() {
    
    let cottagePhoto = document.getElementById('cottage_photo');

    (cottagePhoto.src).includes("cottage_before.jpg") ?
        cottagePhoto.src = "./cottage_after.jpg":
        cottagePhoto.src = "./cottage_before.jpg"        
    }

  return (
    <div className="App">
        <header class="header">
        <h1>Your Garden Without Bees</h1>
        <img src="/header.jpg" alt="header_image"></img>
        </header>
    <main>
        <section>
            <div class="section_container">
                <h2>But first, why exactly are bees in decline?</h2>
                <article>
                    <p>
                        We spoke to Paul Hetherington, director of the charity Buglife, who shared with us exactly why we’re seeing fewer bees in our environment. He explains:
                    </p>
                </article>
                <article class="blue_article_text">
                    <p>
                        “Due to urbanisation, farming, and unfortunately increased paving in our back gardens, the human race has slowly but surely eradicated the volume of wildflowers; wildflowers that just so happen to provide crucial habitats for bees. In fact, experts say that since the late 1930’s, we have lost 97% of our wildflower-rich habitat – an area that is roughly 1.5 times the size of Wales.”
                    </p>
                    </article>
                <article class="blue_article_text">
                    <p>
                        “There’s also been an increase in the use of both pesticides and herbicides and they are not only killing those all-important wildflowers but also poisoning the bees.”
                    </p>
                </article>
                <article class="blue_article_text">
                    <p>
                        “And of course, climate change has had a considerable impact, especially on the Bumblebee which prefers a milder climate. They’ve resulted in moving north to escape the rising temperatures. There’s even been active nests found in the Winter months when Bumblebees should be hibernating. This means they’re trying to survive in a time where food is scarce, and this could lead to the unfortunate collapse of a colony.’
                    </p>
                </article>
                <article class="conclusion">
                    <p>
                        So, with that said, what can we expect our most loved landscapes to look like if we were to live in a world without bees?
                    </p>
                </article>
            </div>
        </section>
        <section class="background_grey">
            <div class="pond_section">
                <h2>The Pond</h2>
                <div class="images_container">
                    <div class="images">
                        <img  src="/pond_before.jpg" alt="pond before"></img>
                        <img src="/pond_after.jpg" alt="pond after"></img>
                    </div>
                </div>
                <div class="article_container">
                    <article>
                        <p>
                            We all have fond memories of visiting a pond as a child – seeing what critters and plants we can collect and identify. But in a world without bees, the pond becomes a very baron place. The bright colours brought about by the Purple Loosestrife flower – commonly found in ponds- and the yellow Tansy would disappear as we rely on bees for their pollination and distribution. The death of these plants would also be taking away crucial food for other insects like Butterflies, Moths, and others that are crucial to the pond’s ecosystem. This would even cause the levels of more destructive insects, like Aphids, to rise due to the lack of predators.
                        </p>
                    </article>
                    <article>
                        <p>
                            With the ecosystem out of balance, the water would turn sour and Blue Algae would grow. This form of bacteria is toxic, especially to dogs, and can inflict a serious illness on your pooch, or even death.
                        </p>
                    </article>
                </div>
            </div>
        </section>    
        <section>
                <h2>The Countryside Cottage</h2>
                <div class="cottage_photo">
                    <img onClick={changePhoto} id="cottage_photo" src="/cottage_before.jpg" alt="Cottage"></img>
                </div>
                <div class="article_container">
                    <article>
                        <p>
                            The image of a rustic cottage nestled in the middle of the lush countryside is quintessentially British. But that image would look pretty gloomy if it wasn’t for bees. Firstly, the unrestrained flowers that give cottages their charm would quickly disappear.                    
                        </p>
                    </article> 
                    <article>
                        <p>
                            Bees are known as ‘pollinators’, and we rely on them for the growth and distribution of our most loved flowers. Sunflowers, Orchids, Lupins, Wild Cow Parsley, Field Poppies, Buttercups and Bird’s-foot Trefoil would all be gone; stripping all the colour away and turning the idyllic cottage from something out of a fairy tale to something straight out of a horror film.                    
                        </p>
                    </article>
                </div>
        </section>
    </main>
    </div>
  );
}

export default App;
