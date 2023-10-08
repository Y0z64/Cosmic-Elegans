import MultiLayerParallax from "~/components/Paralax";
import { Inter } from "next/font/google";

import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D]">
        <div className="max-w-3xl text-xl space-y-4 mx-auto py-24 text-neutral-300">
            <Markdown>{`
# Problem Approach

In the era the new emergin era of human space exploration, new health and biological challenges are emerging. These challenges necessitate the development of new analytic models for the medical sector. In response to this need, we've chosen a challenge named 'Space Biology Digital Twins: Modeling Worms in Space'. 

The goal is to create a 3D comprehensive and interactive model using the common worm, "C. elegans," as a model organism and leveraging the "Digital Twins" industrial technology. The variables used for the simulation include external space variables like radiation, microgravity, and internal worm variables like tissue layers and mechanical behaviors. 

![C. elegans simulation](/public/image3.png)


# Theoretical Framework and Background


The project's complexity necessitated the use of preexisting structures and databases from NASA, OSDR, and Openworm. We studied the effects of microgravity on humans and C. elegans, focusing on the cardiovascular, nervous, and muscular systems, and the impacts on genetics and locomotion. These concepts were linked with behavior variables in the Azure Digital Twin platform and connected to the respective simulated tissues, which underwent changes based on numeric parameters.

![Lifespan of a C. Elegans specimen under microgravity](/public/image4.png)


Graphical data from an article proposing an experiment collected lifespan data for C. elegans on different culture mediums (microgravity and ground control). Another graph from the GitHub repository describes larval locomotion using data from light analysis. This data detects the amounts of calcium ions on the larva, which contribute to muscle contractions.

![Effect of variations of calcium ions on larval locomotion](/public/image5.png)

Open worm also provides neuronal activity and data

![Neuronal activity](/public/image6.png)

# Justification

The urgency of advancing deep space exploration calls for the development of innovative computational models and methodologies. The selection of C. Elegans for our digital twin simulation is pivotal in understanding biological phenomena on Earth and in space. The significance of C. Elegans comes from its broad genetic similarities with humans, making it a comprehensive model for gaining insights into human health, behavior, and anatomical conditions.


Cosmic Elegans is a groundbreaking model that provides a platform for a more nuanced understanding of the relationships between various variables and layers influencing space exploration. Despite challenges, the project stands as a testament to the collaborative spirit fueling advancements in space science.


# Goal

Our goal is to make scientific investigations more efficient, avoiding expensive resources like physical space, materials, and ongoing maintenance. This approach also respects the rights of living beings by using digital models instead of real ones. It also offers a risk-free testing environment, especially beneficial in industries like aerospace or healthcare.


# Delimitations

The Cosmic Crawler project is focused on providing complementary features and custom adjustments to OpenWorm, specifically to describe space circumstances. Our limitations include the design of other possible scenarios and variables and complex models' exclusion. Real-time constraints can also pose challenges in achieving synchronization between a digital twin and its physical counterpart. Understanding and addressing these limitations is essential for the successful implementation and utilization of digital twins in various industries.

`}</Markdown>
        </div>
      </div>
    </main>
  );
}