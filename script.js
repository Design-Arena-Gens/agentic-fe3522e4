const destinations = {
  amalfi: {
    title: "Amalfi Coast",
    locale: "Italy",
    openings: [
      "Polished teak. Limoncello sunsets. Amalfi's vertical villages staged for the season's most exclusive arrival.",
      "Saffron light spills across cliffside villas while the Tyrrhenian murmurs in Amalfi's dialect of Dolce far niente.",
      "Between bougainvillea draped stairways and private coves, the coast rewrites the language of la dolce vita."
    ],
    sensory: [
      "Sunkissed salt air mingles with bergamot mist spritzed from a butler's silver tray",
      "The hush of a Riva tender sliding into an emerald grotto",
      "Vintage Maiolica tiles cool underfoot as champagne effervescence mirrors the horizon"
    ],
    experiences: [
      "sunrise sail past Li Galli archipelago with a Michelin-starred breakfast on deck",
      "private limoncello masterclass inside a century-old grove",
      "gilded aperitivo on the terrace of a converted monastery overlooking Positano",
      "tailor-made coastal drive in a classic Alfa Romeo with personal photographer in tow"
    ],
    cuisine: [
      "crudo of the day kissed with Amalfi lemon zest",
      "tableside mafaldine al limone finished with aged Provolone del Monaco",
      "artisan gelato tasting curated by award-winning gelatiere Alfonso Pepe",
      "midnight sfogliatella flight paired with Campania's rarest dessert wines"
    ],
    hiddenGems: [
      "after-hours access to Villa Rufolo's private gardens for a candlelit recital",
      "members-only entry to a cliffside beach club carved into ancient rock",
      "bespoke shopping appointment inside a family-run sandal atelier in Ravello",
      "yacht tenders into secret emerald grottos reserved exclusively for the voyage"
    ],
    palette: "Terracotta, limoncello gold, Tyrrhenian teal",
    hashtagAnchor: ["#AmalfiCoast", "#LaDolceVita", "#CliffsideChic"]
  },
  kyoto: {
    title: "Kyoto",
    locale: "Japan",
    openings: [
      "Lantern-lit lanes whisper through Gion as Kyoto unveils an ultra-private season of bloom.",
      "Alabaster shoji glow while moss gardens breathe – Kyoto orchestrates stillness for the in-the-know voyager.",
      "Tea steam curls beside heirloom kimonos, fusing Kyoto's ethereal traditions with forward modernism."
    ],
    sensory: [
      "Powdered matcha aromas drift through a 200-year-old machiya townhouse",
      "Tatami warmth meets the soft chime of suikinkutsu water harps",
      "Mist rises from a hinoki onsen as maple leaves drift past the veranda"
    ],
    experiences: [
      "sunrise meditation with a Rinzai monk inside a UNESCO-listed zen temple",
      "private kaiseki dinner choreographed by a female itamae breaking centuries of tradition",
      "after-hours ikebana styling session with Kyoto's most coveted floral artist",
      "exclusive textile workshop weaving obi belts on a restored Edo loom"
    ],
    cuisine: [
      "13-course kaiseki crescendo featuring Hokkaido uni and charcoal-kissed wagyu",
      "ceremonial matcha paired with yuzu wagashi sculpted to mirror the current moon phase",
      "binchotan-grilled river fish glazed with sansho pepper lacquer",
      "seasonal tempura flight accompanied by vintage sake from Niigata"
    ],
    hiddenGems: [
      "nightfall tea ritual inside a secret machiya accessible via hidden alleyway",
      "exclusive hanami viewing platform overlooking Maruyama Park's ancient cherry tree",
      "calligraphy masterclass with a Living National Treasure",
      "moonlit stroll through bamboo forests accompanied by a bioluminescent light artist"
    ],
    palette: "Ink black, maple vermillion, shōji white",
    hashtagAnchor: ["#KyotoSecrets", "#QuietLuxury", "#JapanUnscripted"]
  },
  stbarts: {
    title: "St. Barts",
    locale: "French West Indies",
    openings: [
      "Seamlessly barefoot yet unapologetically couture, St. Barts paints the winter narrative in Caribbean gold.",
      "From shell-dusted runways to cliff-perched villas, St. Barts glows in heliotrope hues of island indulgence.",
      "Yacht decks become dance floors as St. Barts rewrites tropical nights with French Riviera finesse."
    ],
    sensory: [
      "Sea spray mingles with neroli as superyachts anchor at Gustavia before dusk",
      "Warm sand meets the silk of custom pareos, stitched by island artisans",
      "Bass from Nikki Beach pulses softly beneath the call of distant tree frogs"
    ],
    experiences: [
      "sunset catamaran along Colombier with Dom Pérignon sabrage ceremony",
      "private shopping pull at Cartier St. Barts followed by chef's table at Bonito",
      "dawn hike to natural tidal pools complete with floating breakfast installation",
      "villa-side massage using frangipani oil harvested that morning on island"
    ],
    cuisine: [
      "lobster cooked over coconut husk charcoal with vanilla beurre blanc",
      "rum baba flambéed tableside with Trois Rivières vintage agricole rum",
      "ceviche flight infused with island citrus and edible petals",
      "artisan pâtisserie degustation guided by a Paris-trained chef"
    ],
    hiddenGems: [
      "hidden sound bath in a cave accessible only by tender",
      "invitation-only supper club curated by a Michelin-starred nomadic chef",
      "sunrise rooftop vinyasa class overlooking Flamands Beach",
      "night swim with underwater light installation choreographed by French designers"
    ],
    palette: "Seafoam, coral blush, champagne gold",
    hashtagAnchor: ["#StBarts", "#IslandCouture", "#JetSetDiaries"]
  },
  marrakech: {
    title: "Marrakech",
    locale: "Morocco",
    openings: [
      "Saffron haze and cedarwood courtyards – Marrakech stages a perfume-soaked tableau for the elite.",
      "Inside riad walls, Zellige mosaics mirror the flicker of lantern-lit evenings over the medina.",
      "From desert ether to palatial salons, Marrakech plots a jewel-toned odyssey steeped in ritual."
    ],
    sensory: [
      "Rosewater mists cascade across a jade-tiled hammam",
      "The rhythmic echo of Gnawa drums under a canopy of desert stars",
      "Fresh mint, saffron, and warm leather weaving through the souks"
    ],
    experiences: [
      "private souk takeover with celebrity stylist curating artisanal finds",
      "sunset champagne atop the Agafay dunes with live oud quartet",
      "chef-led tour of the spice market ending with rooftop tasting menu",
      "hammam ritual in a 19th-century palace with bespoke argan infusions"
    ],
    cuisine: [
      "seven-hour lamb mechoui carved tableside with preserved lemon confit",
      "dates warmed in orange blossom honey with activated charcoal tahini",
      "tajine of lobster and saffron served beneath a starlit pergola",
      "liquid gold tea ceremony pairing with Moroccan patisserie flight"
    ],
    hiddenGems: [
      "private viewing of Yves Saint Laurent's archival caftans",
      "dawn hot air balloon glide with panoramic breakfast over the Atlas Mountains",
      "spice blending with a revered herbalist inside his secret apothecary",
      "moonlit runway presentation inside a restored riad for a capsule collection reveal"
    ],
    palette: "Saffron, burnt umber, desert blush",
    hashtagAnchor: ["#Marrakech", "#DesertOpulence", "#RiadReverie"]
  },
  patagonia: {
    title: "Patagonia",
    locale: "Chile",
    openings: [
      "Patagonia's granite cathedrals pierce sapphire skies as private expeditions rewrite adventure's lexicon.",
      "Glaciers calve symphonies while design-forward refugios cradle explorers in fireside luxury.",
      "From heli landings on untouched icefields to star-soaked observatories, Patagonia whispers untamed elegance."
    ],
    sensory: [
      "The crack of glacier ice felt through hand-cut crystal tumblers of smoked pisco",
      "Wind-sculpted grasses brushing against bespoke merino expedition gear",
      "Aromas of lenga wood fires drifting through floor-to-ceiling glass lodges"
    ],
    experiences: [
      "heli-skiing virgin powder before a chef-plated brunch on the glacier flank",
      "private navigation through fjords aboard a hybrid explorer yacht",
      "condor tracking with a conservationist at sunrise",
      "stargazing masterclass in a dark-sky reserve with sommelier-led wine pairing"
    ],
    cuisine: [
      "fire-charred Patagonian lamb served in a geodesic dome dining room",
      "king crab ceviche kissed with wild Calafate berries",
      "smoked mussels paired with biodynamic Pinot Noir from the Aysén region",
      "artisan chocolates infused with native herbs sourced from Torres del Paine"
    ],
    hiddenGems: [
      "bespoke ice trekking across blue caverns closed to the public",
      "midnight kayak through bioluminescent channels",
      "helicopter drop to a secret waterfall picnic designed by Santiago's top florist",
      "immersive sound bath using glacier-harvested instruments"
    ],
    palette: "Glacier blue, slate, windswept amber",
    hashtagAnchor: ["#PatagoniaElite", "#UntamedLuxury", "#ExpeditionChic"]
  },
  seychelles: {
    title: "Seychelles",
    locale: "Indian Ocean",
    openings: [
      "Granite boulders cradle aquamarine lagoons as Seychelles unveils barefoot haute couture.",
      "Vanilla winds brush over private island villas while manta rays choreograph underwater ballet.",
      "From powder-white crescents to rainforest hammocks, Seychelles distills Eden into a private timeline."
    ],
    sensory: [
      "Coco de mer nectar swirls with Tahitian vanilla in chilled coupe glasses",
      "Silk hammocks sway with the percussion of distant island drums",
      "Turquoise tides lap against polished teak boardwalks at golden hour"
    ],
    experiences: [
      "sunrise snorkel with marine biologists to watch hawksbill turtles hatch",
      "bespoke fragrance blending using endemic ylang-ylang and wild vanilla",
      "floating cinema evening beneath constellations with sommelier-curated pairing",
      "private island hop via seaplane with in-flight champagne sabrage"
    ],
    cuisine: [
      "line-caught red snapper crusted in seaweed with coconut espuma",
      "artisan coconut sorbet crowned with golden-laced passionfruit",
      "modern Creole tasting featuring cinnamon smoked octopus",
      "dessert degustation infused with Seychelles-grown vanilla and pandan"
    ],
    hiddenGems: [
      "sound healing in a granite alcove accessible only at low tide",
      "sunset yoga on a floating platform anchored in a coral lagoon",
      "nighttime reef illumination with marine biologist narration",
      "ethnobotany walk with island elders revealing medicinal secrets"
    ],
    palette: "Aquamarine, lush jade, sunrise gold",
    hashtagAnchor: ["#SeychellesPrivate", "#IslandHeirloom", "#BarefootOpulence"]
  }
};

const travelStyles = {
  yacht: {
    name: "Superyacht Residency",
    descriptors: ["crew of 12", "on-board mixologist", "satellite spa suite", "Michelin to deck dining"],
    iconics: [
      "24-karat sea toys program featuring Seabobs, e-foils, and submersible dives",
      "floating cinema rigged between twin hulls",
      "personal dive concierge tailoring reef explorations",
      "bespoke route plotting bespoke sunrise-to-sunset reveals"
    ],
    tempo: "fluid days with golden-hour reveals"
  },
  palace: {
    name: "Heritage Palace Stay",
    descriptors: ["24/7 butler", "private wing takeover", "archival art access", "chauffeured arrivals"],
    iconics: [
      "couture wardrobe pressing and nightly fashion styling",
      "sommelier-led cellar pulls from century-old bottlings",
      "after-hours gallery walk with resident historian",
      "heirloom breakfast served beneath frescoed ceilings"
    ],
    tempo: "slow rituals steeped in artistry"
  },
  wellness: {
    name: "Immersive Wellness Retreat",
    descriptors: ["longevity labs", "bio-hacking protocols", "forest bathing duo", "nutrition alchemist"],
    iconics: [
      "circadian lighting choreography for optimal rest",
      "liquid sound therapies inside salt flotation sanctuaries",
      "custom adaptogenic elixir bar open 24 hours",
      "bespoke movement flow filmed for at-home continuation"
    ],
    tempo: "restorative cadence balanced with sunrise vitality"
  },
  adventure: {
    name: "Tailored Expedition",
    descriptors: ["expedition leader", "heli toggles", "bespoke gear kit", "live documentary crew"],
    iconics: [
      "weather-responsive itinerary switches on command",
      "command center briefing each morning with satellite mapping",
      "chef-led field gastronomy with sommelier pairings even on the trail",
      "sustainability ledger offsetting every footprint in real time"
    ],
    tempo: "pulse-raising momentum with deliberate decompression"
  },
  culinary: {
    name: "Chef-Led Culinary Circuit",
    descriptors: ["chef's table access", "rare wine vault", "producer-only interviews", "kitchen stage seats"],
    iconics: [
      "progressive tasting journey across secret venues",
      "hands-on atelier with Michelin-starred team",
      "night market takeover with bespoke tasting tokens",
      "ingredient sourcing via private farm and fishery visits"
    ],
    tempo: "flavor crescendo paced to palate curiosity"
  }
};

const narrativeAngles = {
  seamless: {
    theme: "Seamless Escape Flow",
    hooks: [
      "Door-to-deck in 27 minutes.",
      "Nothing rushed. Everything on cue.",
      "A chaptered escape with zero seams showing."
    ],
    inflection: "The journey is choreographed like a well-rehearsed ballet where every scene arrives right on cue.",
    beats: [
      "Whisked arrivals with private transfers and chilled towels awaiting.",
      "Tailored welcome ritual designed around guest's personal story.",
      "Invisible butler team anticipates every detail before the thought forms."
    ],
    close: "Finish with a quiet nudge toward extending the stay or reserving the season's next window."
  },
  culture: {
    theme: "Culture & Craftsmanship",
    hooks: [
      "Heritage, held in private hands.",
      "Traditions reopened for one evening.",
      "Craft stories that belong on the feed."
    ],
    inflection: "Highlight the artistry, the storytellers, and the legacy keepers who open doors rarely unlocked.",
    beats: [
      "Meet guardians of tradition in intimate, dialogue-rich settings.",
      "Hands-on mastery sessions revealing generational secrets.",
      "Collector-grade keepsakes created on the spot."
    ],
    close: "Invite the audience to claim their chapter in the living history."
  },
  culinary: {
    theme: "Epicurean Spotlight",
    hooks: [
      "A tasting menu choreographed against the horizon.",
      "Zero repetition. Every bite a geographic signature.",
      "When the chef becomes your co-pilot."
    ],
    inflection: "Showcase master chefs, provenance of ingredients, and sensory theater at the table.",
    beats: [
      "Day-to-night culinary sequencing led by decorated chef partners.",
      "Backstage kitchen moments captured in voyeuristic detail.",
      "Unexpected wine cellar pulls and progressive pairings."
    ],
    close: "Close with an irresistible promise of palate revelations reserved for the select few."
  },
  wellness: {
    theme: "Wellness & Renewal",
    hooks: [
      "Restorative rituals at a cellular level.",
      "A sanctuary calibrated to your circadian rhythm.",
      "Renewal that lingers long after checkout."
    ],
    inflection: "Emphasize longevity tech blended with ancient healing to deliver noticeable shift.",
    beats: [
      "Diagnostic sessions mapping bespoke treatment flows.",
      "Sensory therapies that blend sound, scent, and movement.",
      "Culinary wellness crafted by nutrition artisans."
    ],
    close: "Invite guests to reserve their reboot window before it disappears."
  },
  adventure: {
    theme: "High-Adrenaline Moments",
    hooks: [
      "Adrenaline dressed in cashmere.",
      "Edge-of-map thrills with white-glove backup.",
      "Pace-set with heartbeats, smoothed with champagne."
    ],
    inflection: "Merge daring feats with plush recalibration – there's grit, but it's meticulously curated.",
    beats: [
      "Precision-guided expeditions with world-class experts.",
      "Immersive storytelling captured by pro visual teams.",
      "Celebratory wind-downs staged in out-of-this-world settings."
    ],
    close: "Nudge toward locking the next expedition window with your lead guide."
  }
};

const brandVoices = {
  minimal: {
    name: "Minimalist & Iconic",
    cadence: "Short, deliberate sentences. Whispered confidence.",
    lexicon: ["pared-back", "edit", "line-up", "clean", "sculpted"],
    closer: "Book the edit."
  },
  warm: {
    name: "Warm Concierge",
    cadence: "Inviting, descriptive, and softly encouraging.",
    lexicon: ["hand-finished", "tailored", "welcome ritual", "sit back", "allow us"],
    closer: "Your suite knows you're coming."
  },
  insider: {
    name: "High-Energy Insider",
    cadence: "Pacy, insider-y tone with dynamic verbs.",
    lexicon: ["backstage", "in-the-know", "pulled strings", "line sheet", "splash it"],
    closer: "DM for the coordinates."
  },
  editorial: {
    name: "Editorial & Poetic",
    cadence: "Lyrical lines with sensory flourish.",
    lexicon: ["palimpsest", "sonata", "lilt", "haloed", "featherlight"],
    closer: "Reserve the stanza."
  }
};

const ctas = {
  enquire: "Private enquiries now open via bespoke concierge link.",
  waitlist: "Join the inner-circle waitlist before the window closes.",
  itinerary: "Download the full itinerary blueprint for a deeper dive.",
  consult: "Secure your one-to-one travel atelier consult."
};

const platformBlueprints = {
  instagram: {
    label: "Instagram Carousel",
    structure: [
      "Slide 1 — hook & destination reveal",
      "Slide 2 — hero experience visual + quote overlay",
      "Slide 3 — indulgent detail close-up",
      "Slide 4 — service highlight / behind-the-scenes",
      "Slide 5 — CTA with booking nudge"
    ],
    cta: "Save for your next escape • Enquire via link in bio."
  },
  tiktok: {
    label: "TikTok Storyboard",
    structure: [
      "Clip 1: 1.5s establishing shot with kinetic text overlay",
      "Clip 2: POV of signature moment synced to trending downtempo edit",
      "Clip 3: Transition to indulgent detail using whip-pan",
      "Clip 4: Host voiceover with insider tip + CTA overlay"
    ],
    cta: "Comment “ITINERARY” and we’ll send the private link."
  },
  linkedin: {
    label: "LinkedIn Thought-Starter",
    structure: [
      "Lead with macro trend or data point (luxury travel demand spike).",
      "Tie destination to brand values and executive lifestyle.",
      "Spotlight sustainability or community impact detail.",
      "Wrap with invitation to bespoke strategy session."
    ],
    cta: "Message for a discreet executive retreat consult."
  },
  pinterest: {
    label: "Pinterest Narrative Pin",
    structure: [
      "Title: 40 characters max with elevated adjective.",
      "Overlay copy: glow up of hero detail.",
      "Description: 2 sentences focusing on sensory cues + CTA.",
      "Keyword tags: luxury travel, destination, travel aesthetic."
    ],
    cta: "Pin to your 2025 escapes moodboard & request the private guide."
  }
};

const utility = {
  randomInt(max) {
    if (max <= 1) return 0;
    if (crypto && crypto.getRandomValues) {
      const range = new Uint32Array(1);
      crypto.getRandomValues(range);
      return range[0] % max;
    }
    return Math.floor(Math.random() * max);
  },
  pick(array) {
    return array[utility.randomInt(array.length)];
  },
  pickMany(array, count) {
    if (count >= array.length) {
      return [...array];
    }
    const clone = [...array];
    const selections = [];
    while (selections.length < count && clone.length) {
      const index = utility.randomInt(clone.length);
      selections.push(clone.splice(index, 1)[0]);
    }
    return selections;
  },
  sentenceCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};

function buildSignatureCaption({
  destination,
  style,
  angle,
  voice,
  heroDetail,
  ctaChoice
}) {
  const opening = utility.pick(destination.openings);
  const anchorMoment = heroDetail.trim()
    ? utility.sentenceCase(heroDetail.trim())
    : utility.pick(destination.experiences);
  const sensory = utility.pick(destination.sensory);
  const craftsmanship = utility.pick(destination.hiddenGems);
  const cuisine = utility.pick(destination.cuisine);
  const lex = utility.pick(voice.lexicon);
  const hook = utility.pick(angle.hooks);
  const descriptorList = style.descriptors.slice(0, 3).join(" · ");

  const caption = [
    `${opening}`,
    ``,
    `${hook}`,
    `${utility.sentenceCase(anchorMoment)}. ${sensory}.`,
    `Expect ${lex} touches: ${descriptorList}.`,
    `Between ${utility.pick(angle.beats)} and ${utility.pick(angle.beats)}, the flow stays ${style.tempo}.`,
    `Culinary crescendo: ${utility.pick(destination.cuisine)}.`,
    `${craftsmanship}.`,
    `${angle.close} ${voice.closer}`,
    `${ctas[ctaChoice]}`
  ]
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");

  return caption;
}

function buildHashtags(destination, style, angle) {
  const anchors = destination.hashtagAnchor;
  const styleTags = {
    yacht: ["#YachtLife", "#SuperyachtSeason"],
    palace: ["#PalacePrivé", "#HeritageStay"],
    wellness: ["#WellnessEdit", "#HealingInStyle"],
    adventure: ["#ElevatedExpedition", "#EdgeOfMap"],
    culinary: ["#EpicureanEscape", "#ChefTableSeries"]
  }[style.key] || [];

  const angleTags = {
    seamless: ["#SeamlessEscape", "#ConciergeLevel"],
    culture: ["#CultureCurated", "#ArtisanalAtlas"],
    culinary: ["#TasteOfLuxury", "#CulinaryCarte"],
    wellness: ["#LongevityLuxe", "#ResetRituals"],
    adventure: ["#HighOctaneLuxury", "#AdventureCurated"]
  }[angle.key] || [];

  const universals = [
    "#LuxuryTravel",
    "#TravelAtelier",
    "#BesokeJourneys",
    "#PrivateClient"
  ];

  const set = [...anchors, ...styleTags, ...angleTags, ...utility.pickMany(universals, 3)];
  return Array.from(new Set(set)).slice(0, 12).join(" ");
}

function buildStoryArc({ destination, angle, style, beatsCount }) {
  const beats = [];
  const experiences = utility.pickMany(destination.experiences, beatsCount);
  const hidden = utility.pickMany(destination.hiddenGems, Math.max(1, Math.round(beatsCount / 2)));
  const sensoryMoments = utility.pickMany(destination.sensory, Math.max(1, Math.round(beatsCount / 2)));

  for (let index = 0; index < beatsCount; index += 1) {
    const title = `Beat ${index + 1}`;
    const experience = experiences[index % experiences.length];
    const detail = sensoryMoments[index % sensoryMoments.length];
    const secret = hidden[index % hidden.length];
    beats.push({
      title,
      content: `Scene set with ${experience}; capture ${detail}. Insider reveal: ${secret}.`
    });
  }

  return [
    {
      title: "Lead In",
      content: `${angle.inflection} Introduce ${style.name.toLowerCase()} with ${utility.pick(
        style.iconics
      )}.`
    },
    ...beats,
    {
      title: "Final Frame",
      content: `Close with ${utility.pick(angle.beats)} and remind viewers ${ctas.enquire.toLowerCase()}.`
    }
  ];
}

function buildPlatformAdaptations({ selectedPlatforms, destination, angle, voice, ctaChoice }) {
  const summaries = [];

  selectedPlatforms.forEach((platform) => {
    const blueprint = platformBlueprints[platform];
    if (!blueprint) return;
    const introLine = utility.pick(angle.hooks);
    const sensory = utility.pick(destination.sensory);
    const hidden = utility.pick(destination.hiddenGems);

    const body = [
      `<strong>Pacing:</strong> ${voice.cadence}`,
      `<strong>Hook:</strong> ${introLine}`,
      `<strong>Texture:</strong> ${sensory}.`,
      `<strong>Insider:</strong> ${hidden}.`,
      `<strong>Structure:</strong>`,
      `<ul>${blueprint.structure.map((item) => `<li>${item}</li>`).join("")}</ul>`,
      `<strong>CTA:</strong> ${platform === "linkedin" ? ctas.consult : blueprint.cta}`
    ].join("<br/>");

    summaries.push({
      title: blueprint.label,
      html: body
    });
  });

  return summaries;
}

function buildShotList(destination, style) {
  return [
    "Wide drone establishing the locale palette.",
    `Hero shot: ${utility.pick(destination.experiences)}.`,
    `Texture macro: ${utility.pick(destination.sensory)}.`,
    `Lifestyle candid: ${utility.pick(style.iconics)}.`,
    `Nightfall ambiance: ${utility.pick(destination.hiddenGems)}.`
  ];
}

function collectFormValues() {
  const form = document.getElementById("brief-form");
  const destinationKey = (document.getElementById("destination")).value;
  const styleKey = (document.getElementById("travel-style")).value;
  const angleKey = (document.getElementById("angle")).value;
  const voiceKey = (document.getElementById("voice")).value;
  const heroDetail = (document.getElementById("hero-detail")).value || "";
  const ctaChoice = (document.getElementById("cta")).value;
  const beatsCount = parseInt((document.getElementById("story-beats")).value, 10) || 4;

  const platformCheckboxes = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked')
  ).map((input) => input.value);

  if (!platformCheckboxes.length) {
    platformCheckboxes.push("instagram");
  }

  return {
    destinationKey,
    styleKey,
    angleKey,
    voiceKey,
    heroDetail,
    ctaChoice,
    beatsCount: Math.max(3, Math.min(beatsCount, 7)),
    platforms: platformCheckboxes
  };
}

function renderCards({ caption, hashtags, storyArc, platforms, shotList, meta }) {
  const output = document.getElementById("output-grid");
  output.innerHTML = "";

  const createCard = (title, content) => {
    const card = document.createElement("article");
    card.className = "card";
    const header = document.createElement("header");
    const heading = document.createElement("h3");
    heading.textContent = title;
    header.appendChild(heading);

    const copyButton = document.createElement("button");
    copyButton.className = "mini-copy";
    copyButton.type = "button";
    copyButton.textContent = "Copy";
    header.appendChild(copyButton);

    const body = document.createElement("div");
    body.className = "card-body";

    if (typeof content === "string") {
      content.split("\n").forEach((line) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        body.appendChild(paragraph);
      });
    } else if (content instanceof HTMLElement) {
      body.appendChild(content);
    }

    copyButton.addEventListener("click", async () => {
      try {
        const textToCopy = body.innerText.trim();
        await navigator.clipboard.writeText(textToCopy);
        copyButton.textContent = "Copied";
        setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 2000);
      } catch (error) {
        console.warn("Copy failed", error);
      }
    });

    card.append(header, body);
    output.appendChild(card);
  };

  createCard("Signature Caption", caption);

  const metaContent = document.createElement("div");
  const settings = document.createElement("div");
  settings.className = "settings-row";
  meta.forEach((item) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = item;
    settings.appendChild(badge);
  });
  metaContent.appendChild(settings);
  createCard("Campaign Settings", metaContent);

  const platformWrapper = document.createElement("div");
  platformWrapper.className = "grid-two";
  platforms.forEach(({ title, html }) => {
    const block = document.createElement("div");
    const blockTitle = document.createElement("div");
    blockTitle.className = "list-title";
    blockTitle.textContent = title;
    block.appendChild(blockTitle);
    const blockBody = document.createElement("div");
    blockBody.innerHTML = html;
    block.appendChild(blockBody);
    platformWrapper.appendChild(block);
  });
  createCard("Platform Adaptations", platformWrapper);

  const storyContent = document.createElement("div");
  storyArc.forEach((beat) => {
    const title = document.createElement("div");
    title.className = "list-title";
    title.textContent = beat.title;
    const paragraph = document.createElement("p");
    paragraph.textContent = beat.content;
    storyContent.append(title, paragraph);
  });
  createCard("Story Arc", storyContent);

  const shotContent = document.createElement("div");
  const list = document.createElement("ul");
  shotList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  shotContent.appendChild(list);
  const note = document.createElement("div");
  note.className = "note";
  note.textContent =
    "Tip: Capture vertical & horizontal variants for each frame to cover reels, stories, and cinematic carousels.";
  shotContent.appendChild(note);
  createCard("Visual Shot List", shotContent);

  const hashtagContent = document.createElement("p");
  hashtagContent.textContent = hashtags;
  createCard("Hashtag Suite", hashtagContent);
}

function copyAll() {
  const output = document.getElementById("output-grid");
  const text = output.innerText.trim();
  if (!text) return;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const button = document.getElementById("export-button");
      const label = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = label;
      }, 2000);
    })
    .catch((error) => console.warn("Copy all failed", error));
}

function generateCampaign() {
  const {
    destinationKey,
    styleKey,
    angleKey,
    voiceKey,
    heroDetail,
    ctaChoice,
    beatsCount,
    platforms
  } = collectFormValues();

  const destination = { ...destinations[destinationKey] };
  const style = { ...travelStyles[styleKey], key: styleKey };
  const angle = { ...narrativeAngles[angleKey], key: angleKey };
  const voice = brandVoices[voiceKey];

  const caption = buildSignatureCaption({
    destination,
    style,
    angle,
    voice,
    heroDetail,
    ctaChoice
  });

  const hashtags = buildHashtags(destination, style, angle);
  const storyArc = buildStoryArc({ destination, angle, style, beatsCount });
  const platformPlans = buildPlatformAdaptations({
    selectedPlatforms: platforms,
    destination,
    angle,
    voice,
    ctaChoice
  });
  const shotList = buildShotList(destination, style);

  const meta = [
    `${destination.title}, ${destination.locale}`,
    `${style.name}`,
    `${angle.theme}`,
    voice.name,
    `${beatsCount} beats`,
    `Palette: ${destination.palette}`
  ];

  renderCards({
    caption,
    hashtags,
    storyArc,
    platforms: platformPlans,
    shotList,
    meta
  });
}

function init() {
  const form = document.getElementById("brief-form");
  const exportButton = document.getElementById("export-button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    generateCampaign();
  });

  exportButton.addEventListener("click", copyAll);
}

document.addEventListener("DOMContentLoaded", init);
