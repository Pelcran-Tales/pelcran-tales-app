import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

import SectionBlock from '../components/SectionBlock';

import loreImg from '../assets/lore.jpg';
import placeholderImg from '../assets/placeholder.jpg';

import XButton from "../components/XButton";
import { useNavigate } from "react-router-dom";

const Lore = () => {

  const navigate = useNavigate();
  
  return (
    <PageWrapper>
      <div className="relative">

      {/* Fixed Close Button */}
      <div className="fixed top-[21px] right-[21px] z-[60]">
        <XButton onClick={() => navigate("/foundations")} />
      </div>

      <Header title="Lore & History" />

      <main>

        {/* -------------------------- */}
        {/* INTRO (custom layout)      */}
        {/* -------------------------- */}

        <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
          Intro
        </h2>

        <img
          src={loreImg}
          alt="Lore"
          className="
            w-full 
            max-w-[450px]
            md:w-64 
            md:max-w-none
            md:float-left
            md:mr-6
            mb-4
            rounded-lg
            object-cover
            shadow-md
          "
        />

        <p className="font-body text-body text-bodyText mb-section-gap">
          In Pelcran Tales, lore isn’t just back-story, but the pulse of the Hiugbon Archipelago — a tale woven from history and legend alike.<br /> 
          The timeline unfolds through five eras:<br /> 
          - The Age of Villages,<br /> 
          - The Whisper of a Sovereign,<br /> 
          - The Helderian Conquest,<br /> 
          - The Age of Resistance,<br />
          - The Age of Pelcrans.
        </p>

        {/* force next content to appear below the floated image */}
        <div className="clear-both" />


        {/* -------------------------- */}
        {/* SECTION 2                  */}
        {/* -------------------------- */}

        <SectionBlock
          titleH2="The Age of Villages"
          titleH4="Centuries before Event 0"
          imgSrc={placeholderImg}
          imgAlt="Age of Villages"
        >
          Before foreign sails pierced their horizon, the Hiugbonians lived in quiet harmony across three islands — one vast and 
          fertile, two smaller and serene. Life gathered along the shores: rows of stilted houses, boats resting in the shallows 
          and smoke rising from the morning hearths. Theirs was a rhythm of tide and kinship.
          <br /><br />
          Each village followed its own chief, whose authority was light — more keeper than commander. Pride came not from rule, but from 
          balance. The islands bore no written names; it was said the sea knew each shore by the people who loved it. Only one settlement 
          stood apart: Restrad Port, the heart of trade and gathering, where the archipelago’s currents of exchange met.
          <br /><br />
          The Hiugbonians were deft seafarers, renowned for craftsmanship, patience, and fairness. They traded only for necessity — grain, 
          spice, or the occasional iron tool — and found wealth not in accumulation but in reciprocity.
          <br /><br />
          Beneath each village, carved deep into the earth, stood a stone hall, both shelter and store. These under-halls were practical 
          refuges against storms, yet also symbols of endurance — reminders that peace, to last, must dwell above something stronger than soil.
          <br /><br />
          So passed the Age of Villages: a quiet prosperity bound by sea and song, unshadowed, yet unknowingly watched by the deep.
        </SectionBlock>

        <SectionBlock
          titleH2="The Whisper of a Sovereign"
          titleH4="20 to 0 years before Event 0"
          imgSrc={placeholderImg}
          imgAlt="The Whisper of a Sovereign"
        >
          Centuries later, when the Hiugbon Archipelago had long vanished from charts, its name returned in a dying breath.
          <br /><br />
          The old Helderian ruler, Ehlkaran I, who in youth had vanished once upon a “cartographic venture,” lay upon death’s edge. 
          Their final whisper to their heir was two words only — Find Hiugbon.
          <br /><br />
          The court dismissed it as delirium, but to the new ruler, Sovereign Thaenric II, the words bore inheritance — the echo of a secret 
          charge passed silently from crown to crown. Legends spoke of a lost imperial outpost, a forgotten triumph buried beneath waves.
          <br /><br />
          Driven by obsession, Thaenric II scoured archives until fragments surfaced — a half-decayed tome called the ‘Hiu’gban Diary’, written 
          by long-dead explorers who once reached an uncharted archipelago. It told of peace, abundance, and a mystery half-erased.
          <br /><br />
          The sovereign’s curiosity hardened into conviction: their ancestors had set foot there. Something of value — perhaps something 
          glorious — had been lost.
          <br /><br />
          Explorers were sent. The first arrived around fifteen years before the conquest. They lived among the Hiugbonians, mapping coasts, 
          learning their customs, even joining in their fishing journeys. These emissaries returned with reports of a peaceful people and 
          fertile shores.
          <br /><br />
          The second wave, sent a few years later, was different. They came with gifts — oils, casks of drinks, high-quality 
          ship gear — and some chiefs accepted these exchanges as a chance to elevate their villages. These fragile alliances bought the 
          Helderians' trust in some places, but elsewhere their probing eyes drew suspicion. Why did guests need to measure land and mark maps? 
          Why did they pry about defenses, stores, and leadership? Hospitality turned to wariness, and soon to hostility.
          <br /><br />
          Then came the discovery.
          <br /><br />
          It is said that Helderian scouts, searching one of the smaller islands of the archipelago, stumbled upon a curious land formation in a 
          remote and lonely place. The exact site has never been revealed — some whisper it was deliberately concealed, others that the sea itself 
          has since claimed it.
          <br /><br />
          Excavations unearthed a grim scene: scattered corpses and ancient relics, fragments of jewelry and worn tools unmistakably Helderian in 
          alloy and craft. They had been forged in the Helderian Empire centuries before. As they dug deeper, signs of a great collapse emerged. 
          It appeared that the dead had perished when the earth above them gave way, perhaps during the construction of an underground passage.
          <br /><br />
          To give weight to their findings, the explorers summoned their allied chiefs to witness, securing testimony that the artifacts were genuine. 
          These islanders confirmed the find’s authenticity, though not all agreed on its meaning. Still, the Helderians proclaimed it proof enough: 
          their ancestors had stood upon these shores, and their claim was just.
          <br /><br />
          To the Hiugbonians, the site looked no different from their own underground halls, though no definitive trace tied it to their customs. 
          The Empire silenced this dissent. The smaller isles were declared forbidden ground, their villages emptied or rebuilt as outposts.
          <br /><br />
          In the end, the discovery became less about truth than power. For the Empire, the “Hidden Remains” became a weapon of narrative, a justification 
          for conquest. For the Hiugbonians, they marked the first sign that history itself was being stolen from them.
        </SectionBlock>

        <SectionBlock
          titleH2="The Helderian Conquest"
          titleH4="0 to 10 years after Event 0"
          imgSrc={placeholderImg}
          imgAlt="The Helderian Conquest"
        >
          Under Sovereign Thaenric II, in what became known as Year Zero, the Empire’s fleets set sail to reclaim what it now called its ancestral domain.
          <br /><br />
          They entered Restrad Port under banners of blood and history, proclaiming that the archipelago belonged to Helderia by right of rediscovery. 
          The Hiugbonians, unarmed and bewildered, welcomed them with caution and courtesy — believing diplomacy could avert disaster. It could not.
          <br /><br />
          From Year 3 to Year 10, the “Burning Years” scarred the archipelago. One by one, villages fell. Those who surrendered were herded into Restrad 
          Port, reshaped under Helderian law and fortifications. Those who resisted faced the full weight of imperial steel and flame.
          <br /><br />
          By the tenth year, nearly all villages were gone, leaving only ash and ruins scattered across the shores. Restrad Port became the heart of a 
          new colonial order and its island was renamed Sunahiug, “the Bright Isle,” by the Empire, which carved it into their charts, rewriting both name and truth.
        </SectionBlock>

        <SectionBlock
          titleH2="The Age of Resistance"
          titleH4="10 to 30 years after Event 0"
          imgSrc={placeholderImg}
          imgAlt="The Age of Resistance"
        >
          The fall of the villages did not end the Hiugbonian spirit. In the years that followed, those who escaped the burning shores fled to the sea — 
          not as merchants or fishermen, but as outlaws.
          <br /><br />
          Their first attempts were clumsy, raids born of hunger and vengeance. Between Year 10 and 15, imperial patrols crushed most of these desperate 
          strikes. To the Helderians, it seemed resistance was a dying ember.
          <br /><br />
          Until Pelcran.
          <br /><br />
          Among the early Hiugbonian resistance rose a sailor named Pelcran, known across their coast for courage and skill upon the waves. One night, 
          while fleeing pursuit, they stumbled upon a treacherous corridor of jagged rocks and shifting currents — a place so perilous it seemed meant 
          to swallow ships whole. This passage, later named the Ferrownek, led into a hidden bay.
          <br /><br />
          Where others might have seen only death, Pelcran saw opportunity.
          <br /><br />
          A few days later, sailing under a false flag, Pelcran lured three Helderian galleons into the Ferrownek, but the galleons were too vast, too heavy, 
          too unyielding. One by one, the sea tore them apart against the rocks. When dawn broke, only Pelcran’s vessel remained — and with it, the birth of legend.
          <br /><br />
          In that hidden bay, they carved meeting halls into the cliffs, echoing the stone halls of the old villages. This became the First Pirate Coven, a refuge 
          for all who refused submission. From then on, the name Pelcran was no longer a person — it was a people.
          <br /><br />
          By Year 18, resistance had evolved from survival to identity. The sea had chosen its children anew.
        </SectionBlock>       

        <SectionBlock
          titleH2="The Age of Pelcrans"
          titleH4="10 to 30 years after Event 0"
          imgSrc={placeholderImg}
          imgAlt="The Age of Pelcrans"
        >
          Eighty years have passed since Pelcran’s victory. The Helderian Empire endures upon the land, its fortress-city Restrad gleaming with the spoils of peace. 
          But beyond the reefs, freedom sails.
          <br /><br />
          The Pelcrans, descendants of rebels and wanderers, live by salt and storm. To them, being Hiugbonian is heritage — being Pelcran is vow. The sea is both 
          exile and home, the living inheritance of a people denied the soil beneath their feet.
          <br /><br />
          Neither Empire nor rebellion hold dominion. Helderia commands the land, but its fleets falter against the reefs and mists. The Pelcrans own the waves, yet 
          cannot reclaim the stone heart of their homeland. The stalemate endures: a war without end, a balance as fragile as foam.
          <br /><br />
          Yet now, under the reign of Sovereign Maetharien IX, the Empire’s gaze has turned once more toward the deep. Dissatisfied with stalemate, the sovereign has 
          ordered new expeditions — not to conquer, but to understand.
          <br /><br />
          They speak of uncovering the true origin of Helderia’s claim — of learning what Sovereign Ehlkaran I once found and why they whispered as they died. 
          Scholars call it a quest for legacy. Sailors call it temptation.
          <br /><br />
          For in the oldest rhyme still sung to Helderian children before voyages, a line remains:<br />
          “Below the waves lies the memory of kings.”
          <br /><br />
          No one recalls its meaning. Some say it was never meant to be remembered.
          <br /><br />
          Thus stands the world:<br />
          Helderia claims descent.<br />
          Hiugbon endures in silence.<br />
          And the Pelcrans sail between them — heirs to neither, but claimed by both.
          <br /><br />
          The sea forgets nothing.
        </SectionBlock>   

      </main>
     </div> 
    </PageWrapper>
  );
};

export default Lore;

