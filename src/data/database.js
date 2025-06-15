// Part 1: The "Library" of all unique competitions
export const competitions = [
  { id: 'alaska-leaf-bowl', name: 'Alaska Leaf Bowl', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'amsterdam-coffeeshop-awards', name: 'Amsterdam Coffeeshop Awards', defaultRegion: 'Europe', country: 'NL' },
  { id: 'arizona-cannabis-awards', name: 'Arizona Cannabis Awards', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'australian-cannabis-cup', name: 'Australian Cannabis Cup', defaultRegion: 'Other Worldwide Cups', country: 'AU' },
  { id: 'autoflower-world-cup', name: 'Autoflower World Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'bushido-cup', name: 'Bushido Cup', defaultRegion: 'Other Worldwide Cups', country: 'TH' },
  { id: 'california-cannabis-awards', name: 'California Cannabis Awards Music Festival', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'canadian-cannabis-championship', name: 'Canadian Cannabis Championship', defaultRegion: 'United States & Canada', country: 'CA' },
  { id: 'cannabis-industrie-awards', name: 'Cannabis Industrie Awards', defaultRegion: 'Europe', country: 'NL' },
  { id: 'cannaswiss-cup', name: 'CannaSwissCup', defaultRegion: 'Europe', country: 'CH' },
  { id: 'chiang-mai-cannabis-cup', name: 'Chiang Mai Cannabis Cup (Terps Of Life)', defaultRegion: 'Other Worldwide Cups', country: 'TH' },
  { id: 'clio-cultivators-cup', name: 'Clio Cultivators Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'cloud-in-the-city-cup', name: 'Cloud in the City Cup', defaultRegion: 'Europe', country: 'NL' },
  { id: 'connoisseur-cup', name: 'Connoisseur Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'copa-chami', name: 'Copa Chami', defaultRegion: 'Latin America & Caribbean', country: 'AR' },
  { id: 'copa-cannabica-mexico', name: 'Copa Cannabica México', defaultRegion: 'Latin America & Caribbean', country: 'MX' },
  { id: 'copa-del-rey', name: 'Copa del Rey', defaultRegion: 'Latin America & Caribbean', country: 'CO' },
  { id: 'copa-farallones', name: 'Copa Cannabica Farallones', defaultRegion: 'Latin America & Caribbean', country: 'CO' },
  { id: 'cowboy-cup', name: 'Cowboy Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'dab-a-doo', name: 'Dab-A-Doo', defaultRegion: 'Europe', country: 'MULTI' },
  { id: 'dab-rite-cup', name: 'Dab Rite Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'east-coast-cannabis-cup', name: 'East Coast Cannabis Cup', defaultRegion: 'Other Worldwide Cups', country: 'ZA' },
  { id: 'east-coast-zalympix', name: 'East Coast Zalympix', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'ego-clash', name: 'Ego Clash', defaultRegion: 'United States & Canada', country: 'MULTI' },
  { id: 'emerald-cup', name: 'The Emerald Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'emjays-awards', name: 'The Emjays International Cannabis Awards', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'errl-cup', name: 'Errl Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'essie-awards', name: 'Essie Awards', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'expogrow-cup', name: 'Expogrow Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'farmers-cup', name: 'Farmers Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'garden-route-cannabis-cup', name: 'Garden Route Cannabis Cup', defaultRegion: 'Other Worldwide Cups', country: 'ZA' },
  { id: 'hash-bash-cup', name: 'Hash Bash Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'hash-it-out', name: 'Hash It Out Rosin Cup', defaultRegion: 'United States & Canada', country: 'MULTI' },
  { id: 'hashtimes-cup', name: 'HashTimes Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'high-95-cup', name: 'High 95 Cannabis Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'high-times-cup', name: 'High Times Cannabis Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'high-times-hemp-cup', name: 'High Times Hemp Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'highlife-cup', name: 'Highlife Cup', defaultRegion: 'Europe', country: 'NL' },
  { id: 'homegrown-cup', name: 'HomeGrown Cup', defaultRegion: 'Europe', country: 'NL' },
  { id: 'ic-420-cup', name: 'IC 420 Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'indigenous-cannabis-cup', name: 'The Indigenous Cannabis Cup', defaultRegion: 'United States & Canada', country: 'CA' },
  { id: 'jack-herer-cup', name: 'Jack Herer Cup', defaultRegion: 'Europe', country: 'MULTI' },
  { id: 'jalisco-cannabis-cup', name: 'Jalisco Cannabis Cup', defaultRegion: 'Latin America & Caribbean', country: 'MX' },
  { id: 'karma-cup', name: 'The Karma Cup', defaultRegion: 'United States & Canada', country: 'CA' },
  { id: 'kurple-kup', name: 'Kurple Kup & Uncle Stoner Squash Off', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'legacy-cup', name: 'Legacy Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'legends-of-hashish', name: 'Legends of Hashish', defaultRegion: 'United States & Canada', country: 'MULTI' },
  { id: 'massachusetts-cultivators-cup', name: 'Massachusetts Cultivators Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'masters-of-rosin', name: 'Masters of Rosin', defaultRegion: 'Europe', country: 'MULTI' },
  { id: 'mid-mo-canna-cup', name: 'Mid-Mo Canna Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'missouri-growers-cup', name: 'Missouri Growers Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'mother-cup', name: 'Mother Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'necann-cup', name: 'NECANN Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'nevada-cannabis-awards', name: 'Nevada Cannabis Awards Music Festival', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'new-mexico-legacy-cup', name: 'New Mexico Legacy Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'nuwu-cup', name: 'NuWu Cannabis Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'ocannabiz-awards', name: 'O’Cannabiz Industry Awards Gala', defaultRegion: 'United States & Canada', country: 'CA' },
  { id: 'oklahoma-cannabis-awards', name: 'Oklahoma Cannabis Awards Music Festival', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'oregon-growers-cup', name: 'Oregon Growers Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'oregon-leaf-bowl', name: 'Oregon Leaf Bowl', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'rhode-island-cultivators-cup', name: 'Rhode Island Cultivators Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'rooster-thc-classic', name: 'Rooster THC Classic', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'sevilla-cup', name: 'Sevilla Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'smoking-jacket', name: 'Smoking Jacket', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'sun-cup', name: 'Sun Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'spannabis-champions-cup', name: 'Spannabis Champions Cup', defaultRegion: 'Europe', country: 'ES' },
  { id: 'taste-of-texas-hemp-cup', name: 'Taste of Texas Hemp Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'terp-tower-invitational', name: 'Terp Tower Invitational', defaultRegion: 'Europe', country: 'ES' },
  { id: 'thc-championship', name: 'THC Championship', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'the-extractors-cup', name: 'The Extractors Cup', defaultRegion: 'Europe', country: 'UK' },
  { id: 'the-organic-cup', name: 'The Organic Cup', defaultRegion: 'MULTI', country: 'MULTI' },
  { id: 'the-secret-cup', name: 'The Secret Cup', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'womens-canna-awards', name: 'Womens Canna Awards', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'zalympix', name: 'Zalympix', defaultRegion: 'United States & Canada', country: 'US' },
  { id: 'fullmoon-sesh', name: 'FullMoon Sesh', defaultRegion: 'Other Worldwide Cups', country: 'MULTI' },
];

// Part 2: The "Events Calendar" for each competition
// Part 2: The "Events Calendar" for each competition, sorted alphabetically by competition
export const events = [
  // Amsterdam Coffeeshop Awards
  { id: 'aca-2023', competitionId: 'amsterdam-coffeeshop-awards', year: 2023, name: 'Amsterdam 2023' },
  { id: 'aca-2024', competitionId: 'amsterdam-coffeeshop-awards', year: 2024, name: 'Amsterdam 2024' },
  // Arizona Cannabis Awards
  { id: 'aca-phx-2025', competitionId: 'arizona-cannabis-awards', year: '2024/2025', name: 'Phoenix 2024/2025' },
  // Australian Cannabis Cup
  { id: 'acc-2023', competitionId: 'australian-cannabis-cup', year: 2023, name: 'Australian Cannabis Cup 2023' },
  // Autoflower World Cup
  { id: 'awc-2025', competitionId: 'autoflower-world-cup', year: 2025, name: 'Barcelona 2025' },
  // Bushido Cup
  { id: 'bc-phuket-2025', competitionId: 'bushido-cup', year: 2025, name: 'Phuket 2025' },
  // Cannabis Industrie Awards
  { id: 'cia-2024', competitionId: 'cannabis-industrie-awards', year: 2024, name: 'Eindhoven 2024' },
  // Chiang Mai Cannabis Cup (Terps Of Life)
  { id: 'cmcc-2nd', competitionId: 'chiang-mai-cannabis-cup', year: 'N/A', name: '2nd Annual Chiang Mai Cannabis Cup' },
  { id: 'cmcc-2025', competitionId: 'chiang-mai-cannabis-cup', year: 2025, name: 'Chiang Mai 2025' },
  // Clio Cultivators Cup
  { id: 'ccc-mi-2024', competitionId: 'clio-cultivators-cup', year: 2024, name: 'Michigan 2024' },
  // Copa Chami
  { id: 'copa-chami-2024', competitionId: 'copa-chami', year: 2024, name: 'La Rioja, Argentina 2024' },
  // Copa Cannabica México
  { id: 'ccm-2023', competitionId: 'copa-cannabica-mexico', year: 2023, name: 'Weed Trade Show 2023' },
  // Copa Cannabica Farallones
  { id: 'ccf-2023', competitionId: 'copa-farallones', year: 2023, name: 'Cali, Colombia 2023' },
  // Cowboy Cup
  { id: 'cc-2021', competitionId: 'cowboy-cup', year: 2021, name: 'Tulsa, OK 2021' },
  { id: 'cc-2022', competitionId: 'cowboy-cup', year: 2022, name: 'Tulsa, OK 2022' },
  { id: 'cc-2023', competitionId: 'cowboy-cup', year: 2023, name: 'Tulsa, OK 2023' },
  { id: 'cc-2024', competitionId: 'cowboy-cup', year: 2024, name: 'Tulsa, OK 2024' },
  // Dab-A-Doo
  { id: 'dad-val-2015', competitionId: 'dab-a-doo', year: 2015, name: 'Valencia 2015' },
  { id: 'dad-bcn-2016', competitionId: 'dab-a-doo', year: 2016, name: 'Barcelona 2016' },
  { id: 'dad-mex-2018', competitionId: 'dab-a-doo', year: 2018, name: 'Mexico 2018' },
  { id: 'dad-ams-2021', competitionId: 'dab-a-doo', year: 2021, name: 'Amsterdam 2021' },
  { id: 'dad-bcn-2022', competitionId: 'dab-a-doo', year: 2022, name: 'Barcelona 2022' },
  { id: 'dad-ne-2024', competitionId: 'dab-a-doo', year: 2024, name: 'Northeast (USA) 2024' },
  { id: 'dad-ca-na', competitionId: 'dab-a-doo', year: 'N/A', name: 'Canada (Undated)' },
  // Dab Rite Cup
  { id: 'drc-invitational-23-24', competitionId: 'dab-rite-cup', year: '2023-2024', name: 'Invitational Series 2023-2024' },
  { id: 'drc-regionals-24-25', competitionId: 'dab-rite-cup', year: '2024-2025', name: 'US Regionals 2024-2025' },
  // Ego Clash
  { id: 'ec-norcal-2022', competitionId: 'ego-clash', year: 2022, name: 'Northern California 2022' },
  { id: 'ec-mendo-2023', competitionId: 'ego-clash', year: 2023, name: 'Mendocino County 2023' },
  { id: 'ec-norcal-2024', competitionId: 'ego-clash', year: 2024, name: 'Northern California 2024' },
  { id: 'ec-bcn-2025', competitionId: 'ego-clash', year: 2025, name: 'Barcelona Invitational 2025' },
  // The Emerald Cup
  { id: 'ecup-2019', competitionId: 'emerald-cup', year: 2019, name: 'Emerald Cup 2019' },
  { id: 'ecup-2021', competitionId: 'emerald-cup', year: 2021, name: 'Emerald Cup 2021 (Santa Rosa)' },
  { id: 'ecup-2022', competitionId: 'emerald-cup', year: 2022, name: 'Emerald Cup 2022 (Los Angeles)' },
  { id: 'ecup-2023', competitionId: 'emerald-cup', year: 2023, name: 'Emerald Cup 2023 (Richmond)' },
  { id: 'ecup-2024', competitionId: 'emerald-cup', year: 2024, name: 'Emerald Cup 2024 (Oakland)' },
  // The Emjays International Cannabis Awards
  { id: 'emjays-2024', competitionId: 'emjays-awards', year: 2024, name: 'Las Vegas 2024' },
  // Errl Cup
  { id: 'errl-spring-2024', competitionId: 'errl-cup', year: 2024, name: 'Errl Cup Spring 2024' },
  { id: 'errl-spring-2025', competitionId: 'errl-cup', year: 2025, name: 'Errl Cup Spring 2025' },
  // Essie Awards
  { id: 'essie-2024', competitionId: 'essie-awards', year: 2024, name: 'Albuquerque 2024' },
  // Farmers Cup
  { id: 'fc-710-2024', competitionId: 'farmers-cup', year: 2024, name: '710 Edition 2024 (San Diego)' },
  // Hash Bash Cup
  { id: 'hbc-2022', competitionId: 'hash-bash-cup', year: 2022, name: 'South Portland, ME 2022' },
  { id: 'hbc-2023', competitionId: 'hash-bash-cup', year: 2023, name: 'South Portland, ME 2023' },
  { id: 'hbc-2024', competitionId: 'hash-bash-cup', year: 2024, name: 'Detroit/Ann Arbor, MI 2024' },
  { id: 'hbc-me-2024', competitionId: 'hash-bash-cup', year: 2024, name: 'Hash Bash 4 (South Portland, ME)' },
  // Hash It Out Rosin Cup
  { id: 'hio-1', competitionId: 'hash-it-out', year: 2022, name: 'Cup I - November 2022' },
  { id: 'hio-2', competitionId: 'hash-it-out', year: 2023, name: 'Cup II - April 2023 (Terpinyaki GTA)' },
  { id: 'hio-3', competitionId: 'hash-it-out', year: 2024, name: 'Cup III - January 2024 (Arcade Vancouver)' },
  { id: 'hio-4', competitionId: 'hash-it-out', year: 2024, name: 'Cup IV - July 2024 (Mothership Meltdown)' },
  { id: 'hio-5', competitionId: 'hash-it-out', year: 2024, name: 'Cup V - November 2024 (Terp Island Maui)' },
  { id: 'hio-6', competitionId: 'hash-it-out', year: 2025, name: 'Cup VI - April 2025 (Arcade Vancouver)' },
  // HashTimes Cup
  { id: 'htc-bcn-2020s', competitionId: 'hashtimes-cup', year: 2020, name: 'Barcelona Spring 2020' },
  { id: 'htc-bcn-2024s', competitionId: 'hashtimes-cup', year: 2024, name: 'Barcelona Spring 2024' },
  { id: 'htc-bcn-2024w', competitionId: 'hashtimes-cup', year: 2024, name: 'Barcelona Winter 2024' },
  { id: 'htc-bcn-2025s', competitionId: 'hashtimes-cup', year: 2025, name: 'Barcelona Spring 2025' },
  // High 95 Cannabis Cup
  { id: 'h95-2023', competitionId: 'high-95-cup', year: 2023, name: 'High 95 Cup 2023' },
  { id: 'h95-2024', competitionId: 'high-95-cup', year: 2024, name: 'High 95 Cup 2024' },
  { id: 'h95-2025', competitionId: 'high-95-cup', year: 2025, name: '9th High 95 Cup 2025' },
  // High Times Cannabis Cup
  { id: 'htcc-ma-2025', competitionId: 'high-times-cup', year: 2025, name: 'Massachusetts 2025' },
  { id: 'htcc-mi-2024', competitionId: 'high-times-cup', year: 2024, name: 'Michigan 2024' },
  { id: 'htcc-mo-2024', competitionId: 'high-times-cup', year: 2024, name: 'Missouri 2024' },
  // Highlife Cup
  { id: 'hlc-2024', competitionId: 'highlife-cup', year: 2024, name: 'Amsterdam 2024' },
  // HomeGrown Cup
  { id: 'hgc-weekender-2024', competitionId: 'homegrown-cup', year: 2024, name: 'Weekender Edition 2024 (Tilburg)' },
  { id: 'hgc-winter-2024', competitionId: 'homegrown-cup', year: 2024, name: 'Winter Edition 2024' },
  // IC 420 Cup
  { id: 'ic420-2024', competitionId: 'ic-420-cup', year: 2024, name: 'Barcelona 2024' },
  // Jack Herer Cup
  { id: 'jhc-ams-2019', competitionId: 'jack-herer-cup', year: 2019, name: 'Amsterdam 2019' },
  { id: 'jhc-ams-2020', competitionId: 'jack-herer-cup', year: 2020, name: 'Amsterdam 2020' },
  { id: 'jhc-de-2023', competitionId: 'jack-herer-cup', year: 2023, name: 'Germany 2023 (Mary Jane Berlin)' },
  { id: 'jhc-de-2024', competitionId: 'jack-herer-cup', year: 2024, name: 'Germany 2024 (Berlin)' },
  { id: 'jhc-nl-2024', competitionId: 'jack-herer-cup', year: 2024, name: 'Holland 2024 (Zandvoort)' },
  // Kurple Kup & Uncle Stoner Squash Off
  { id: 'kurple-kup-2023', competitionId: 'kurple-kup', year: 2023, name: 'Albuquerque 2023' },
  // Legacy Cup
  { id: 'legacy-cup-v', competitionId: 'legacy-cup', year: 2024, name: 'Legacy Cup V (Minneapolis)' },
  // Legends of Hashish
  { id: 'loh-1', competitionId: 'legends-of-hashish', year: '~2000s', name: 'Legends of Hashish I (~2000s)' },
  { id: 'loh-2', competitionId: 'legends-of-hashish', year: 2022, name: 'Los Angeles 2022 (Legends II)' },
  { id: 'loh-3', competitionId: 'legends-of-hashish', year: 2023, name: 'Spain & Portland 2023 (Legends III)' },
  { id: 'loh-pdx-2024', competitionId: 'legends-of-hashish', year: 2024, name: 'Portland 2024' },
  // Masters of Rosin
  { id: 'mor-bcn-2018', competitionId: 'masters-of-rosin', year: 2018, name: 'Barcelona 2018 (1st Edition)' },
  { id: 'mor-bcn-2019', competitionId: 'masters-of-rosin', year: 2019, name: 'Barcelona 2019 (2nd Edition)' },
  { id: 'mor-bcn-2022', competitionId: 'masters-of-rosin', year: 2022, name: 'Barcelona 2022 (5th Edition)' },
  { id: 'mor-bcn-2023', competitionId: 'masters-of-rosin', year: 2023, name: 'Barcelona 2023 (6th Edition)' },
  { id: 'mor-bcn-2024', competitionId: 'masters-of-rosin', year: 2024, name: 'Barcelona 2024 (7th Edition)' },
  { id: 'mor-bcn-2025', competitionId: 'masters-of-rosin', year: 2025, name: 'Barcelona 2025 (8th Edition)' },
  { id: 'mor-la-2024', competitionId: 'masters-of-rosin', year: 2024, name: 'Los Angeles 2024 (Lord of the Rosin)' },
  { id: 'mor-nyc-2025', competitionId: 'masters-of-rosin', year: 2025, name: 'New York City 2025 (Lord of the Rosin)' },
  // Michigan Zalympix
  { id: 'miz-2024', competitionId: 'michigan-zalympix', year: 2024, name: 'Michigan 2024' },
  // Mid-Mo Canna Cup
  { id: 'mmcc-2023', competitionId: 'mid-mo-canna-cup', year: 2023, name: 'Mid-Mo Canna Cup 2023' },
  { id: 'mmcc-2025', competitionId: 'mid-mo-canna-cup', year: 2025, name: 'Mid-Mo Canna Cup 2025' },
  // Missouri Growers Cup
  { id: 'mogc-2024', competitionId: 'missouri-growers-cup', year: 2024, name: 'Kansas City 2024' },
  // Mother Cup
  { id: 'mc-bcn-2025', competitionId: 'mother-cup', year: 2025, name: 'Barcelona 2025' },
  // NECANN Cup
  { id: 'necann-me-2023', competitionId: 'necann-cup', year: 2023, name: 'Maine 2023' },
  { id: 'necann-2025', competitionId: 'necann-cup', year: 2025, name: 'NECANN Cup 2025' },
  // New Mexico Legacy Cup
  { id: 'nmlc-2025', competitionId: 'new-mexico-legacy-cup', year: 2025, name: 'New Mexico Legacy Cup 2025' },
  // NuWu Cannabis Cup
  { id: 'nwc-2023', competitionId: 'nuwu-cup', year: 2023, name: '3rd Annual NuWu Cup 2023' },
  { id: 'nwc-2024', competitionId: 'nuwu-cup', year: 2024, name: '4th Annual NuWu Cup 2024' },
  // Oregon Growers Cup
  { id: 'ogc-2023', competitionId: 'oregon-growers-cup', year: 2023, name: '9th Oregon Growers Cup 2023' },
  { id: 'ogc-2024', competitionId: 'oregon-growers-cup', year: 2024, name: '10th Annual Oregon Growers Cup' },
  // Rhode Island Cultivators Cup
  { id: 'ricc-2023', competitionId: 'rhode-island-cultivators-cup', year: 2023, name: 'Rhode Island 2023' },
  // Rooster THC Classic
  { id: 'rtcc-2024', competitionId: 'rooster-thc-classic', year: 2024, name: 'Denver 2024' },
  { id: 'rtcc-2025', competitionId: 'rooster-thc-classic', year: 2025, name: 'Rooster THC Classic 2025' },
  // Sevilla Cup
  { id: 'sevilla-cup-2023', competitionId: 'sevilla-cup', year: 2023, name: 'Sevilla 2023' },
  { id: 'sevilla-cup-2024', competitionId: 'sevilla-cup', year: 2024, name: 'Sevilla 2024' },
  // Smoking Jacket
  { id: 'sj-ith-2024', competitionId: 'smoking-jacket', year: 2024, name: 'Ithaca, NY 2024' },
  { id: 'sj-pdx-2023', competitionId: 'smoking-jacket', year: 2023, name: 'Portland 2023' },
  // Spannabis Champions Cup
  { id: 'scc-bcn-2024', competitionId: 'spannabis-champions-cup', year: 2024, name: 'Barcelona 2024' },
  { id: 'scc-2025', competitionId: 'spannabis-champions-cup', year: 2025, name: 'Barcelona 2025' },
  { id: 'scc-bilbao-2024', competitionId: 'spannabis-champions-cup', year: 2024, name: 'Bilbao 2024' },
  // Taste of Texas Hemp Cup
  { id: 'tothc-2024', competitionId: 'taste-of-texas-hemp-cup', year: 2024, name: 'Texas 2024' },
  // Terp Tower Invitational
  { id: 'tti-bcn-2025', competitionId: 'terp-tower-invitational', year: 2025, name: 'Barcelona 2025' },
  // The Extractors Cup
  { id: 'tec-2024', competitionId: 'the-extractors-cup', year: 2024, name: 'Brighton 2024' },
  // The Organic Cup
  { id: 'oc-bcn-2024', competitionId: 'the-organic-cup', year: 2024, name: 'Barcelona 2024' },
  { id: 'oc-bcn-2025', competitionId: 'the-organic-cup', year: 2025, name: 'Barcelona 2025' },
  // The Secret Cup
  { id: 'tsc-beast-2015', competitionId: 'the-secret-cup', year: 2015, name: 'Beast Coast Finals 2015' },
  { id: 'tsc-desert-2014', competitionId: 'the-secret-cup', year: 2014, name: 'Desert Regional (Phoenix) 2014' },
  { id: 'tsc-finals-2013', competitionId: 'the-secret-cup', year: 2013, name: 'National Finals 2013' },
  { id: 'tsc-finals-2015', competitionId: 'the-secret-cup', year: 2015, name: 'National Finals 2015' },
  { id: 'tsc-finals-2017', competitionId: 'the-secret-cup', year: 2017, name: 'National Finals 2017' },
  { id: 'tsc-norcal-2013', competitionId: 'the-secret-cup', year: 2013, name: 'NorCal Regional (Oakland) 2013' },
  { id: 'tsc-pnw-2013', competitionId: 'the-secret-cup', year: 2013, name: 'PNW Regional (Seattle) 2013' },
  { id: 'tsc-socal-2014', competitionId: 'the-secret-cup', year: 2014, name: 'SoCal Regional 2014' },
  // Womens Canna Awards
  { id: 'wca-2024', competitionId: 'womens-canna-awards', year: 2024, name: 'Los Angeles 2024' },
  // New Events Alphabetize Later
  { id: 'htcc-nm-2023', competitionId: 'high-times-cup', year: 2023, name: 'New Mexico: People’s Choice 2023' },
  { id: 'ccc-mi-2023', competitionId: 'clio-cultivators-cup', year: 2023, name: 'Michigan 2023' },
  { id: 'icc-ca-na', competitionId: 'indigenous-cannabis-cup', year: 'N/A', name: 'Canada (Undated)' },
  { id: 'hgc-weekender-2023', competitionId: 'homegrown-cup', year: 2023, name: 'Weekender Edition 2023 (Tilburg)' },
  { id: 'htcc-socal-2023', competitionId: 'high-times-cup', year: 2023, name: 'SoCal: People’s Choice 2023' },
  { id: 'htcc-mi-pc-2023', competitionId: 'high-times-cup', year: 2023, name: 'Michigan: People’s Choice 2023' },
  { id: 'cca-mf-2023', competitionId: 'california-cannabis-awards', year: 2023, name: 'Adelanto 2023' },
  { id: 'cdr-2023', competitionId: 'copa-del-rey', year: 2023, name: 'Bogotá, Colombia 2023' },
  { id: 'alb-2023', competitionId: 'alaska-leaf-bowl', year: 2023, name: 'Hatcher Pass, AK 2023' },
  { id: 'olb-2023', competitionId: 'oregon-leaf-bowl', year: 2023, name: 'Portland 2023' },
  { id: 'ic420-2023', competitionId: 'ic-420-cup', year: 2023, name: 'IC 420 Cup 2023' },
  { id: 'ecz-2023', competitionId: 'east-coast-zalympix', year: 2023, name: 'East Coast Zalympix 2023' },
  { id: 'miz-2023', competitionId: 'michigan-zalympix', year: 2023, name: 'Michigan Zalympix 2023' },
  { id: 'aca-phx-2023', competitionId: 'arizona-cannabis-awards', year: 2023, name: 'Phoenix 2023' },
  { id: 'rtcc-2023', competitionId: 'rooster-thc-classic', year: 2023, name: 'Rooster THC Classic 2023' },
  { id: 'csc-2023', competitionId: 'cannaswiss-cup', year: '2022/23', name: 'CannaSwissCup 2022/23' },
  { id: 'hgc-winter-2022', competitionId: 'homegrown-cup', year: 2022, name: 'Winter Edition 2022' },
  { id: 'nwc-2022', competitionId: 'nuwu-cup', year: 2022, name: '2nd Annual NuWu Cup 2022' },
  { id: 'thc-champ-2022', competitionId: 'thc-championship', year: 2022, name: 'THC Championship 2022' },
  { id: 'h95-2022', competitionId: 'high-95-cup', year: 2022, name: '6th High 95 Cup 2022' },
  { id: 'expogrow-2022', competitionId: 'expogrow-cup', year: 2022, name: 'Irun, Spain 2022' },
  { id: 'htcc-ak-2022', competitionId: 'high-times-cup', year: 2022, name: 'Alaska: People’s Choice 2022' },
  { id: 'ccc-2022', competitionId: 'canadian-cannabis-championship', year: 2022, name: 'Niagara Falls 2022' },
  { id: 'ccup-2022', competitionId: 'connoisseur-cup', year: 2022, name: 'Colorado 2022' },
  { id: 'citc-2022', competitionId: 'cloud-in-the-city-cup', year: 2022, name: 'Amsterdam 2022' },
  { id: 'mcc-2022', competitionId: 'massachusetts-cultivators-cup', year: 2022, name: 'Worcester 2022' },
  { id: 'jcc-2022', competitionId: 'jalisco-cannabis-cup', year: 2022, name: 'Mexico 2022' },
  { id: 'miz-2024', competitionId: 'zalympix', year: 2024, name: 'Michigan 2024' },
  { id: 'cali-z-2022', competitionId: 'zalympix', year: 2022, name: 'California 2022' },
  { id: 'karma-cup-2022', competitionId: 'karma-cup', year: 2022, name: 'Toronto 2022' },
  { id: 'ok-awards-2022', competitionId: 'oklahoma-cannabis-awards', year: 2022, name: 'Oklahoma City 2022' },
  { id: 'htcc-co-2022', competitionId: 'high-times-cup', year: 2022, name: 'Colorado: People’s Choice 2022' },
  { id: 'htcc-il-2022', competitionId: 'high-times-cup', year: 2022, name: 'Illinois: People’s Choice 2022' },
  { id: 'htcc-socal-pc-2022', competitionId: 'high-times-cup', year: 2022, name: 'SoCal: People’s Choice 2022' },
  { id: 'htcc-ma-2022', competitionId: 'high-times-cup', year: 2022, name: 'Massachusetts: People’s Choice 2022' },
  { id: 'organic-cup-mi-2022', competitionId: 'the-organic-cup', year: 2022, name: 'Michigan 2022' },
  { id: 'organic-cup-nyc-2022', competitionId: 'the-organic-cup', year: 2022, name: 'New York City 2022' },
  { id: 'organic-cup-mi-2020', competitionId: 'the-organic-cup', year: 2020, name: 'Michigan 2020' },
  { id: 'organic-cup-mi-2018', competitionId: 'the-organic-cup', year: 2018, name: 'Michigan 2018' },
  { id: 'hlc-2022', competitionId: 'highlife-cup', year: 2022, name: 'Amsterdam 2022' },
  { id: 'grcc-2022', competitionId: 'garden-route-cannabis-cup', year: 2022, name: 'Garden Route 2022' },
  { id: 'nva-2022', competitionId: 'nevada-cannabis-awards', year: 2022, name: 'Las Vegas 2022' },
  { id: 'cali-z-2022', competitionId: 'zalympix', year: 2022, name: 'California 2022' },
  { id: 'miz-2024', competitionId: 'zalympix', year: 2024, name: 'Michigan 2024' },
  { id: 'karma-cup-2022', competitionId: 'karma-cup', year: 2022, name: 'Toronto 2022' },
  { id: 'ok-awards-2022', competitionId: 'oklahoma-cannabis-awards', year: 2022, name: 'Oklahoma City 2022' },
  { id: 'htcc-co-2022', competitionId: 'high-times-cup', year: 2022, name: 'Colorado: People’s Choice 2022' },
  { id: 'htcc-il-2022', competitionId: 'high-times-cup', year: 2022, name: 'Illinois: People’s Choice 2022' },
  { id: 'htcc-socal-pc-2022', competitionId: 'high-times-cup', year: 2022, name: 'SoCal: People’s Choice 2022' },
  { id: 'htcc-ma-2022', competitionId: 'high-times-cup', year: 2022, name: 'Massachusetts: People’s Choice 2022' },
  { id: 'ht-hemp-cup-2022', competitionId: 'high-times-hemp-cup', year: 2022, name: 'People\'s Choice 2022' },
  { id: 'organic-cup-mi-2022', competitionId: 'the-organic-cup', year: 2022, name: 'Michigan 2022' },
  { id: 'organic-cup-nyc-2022', competitionId: 'the-organic-cup', year: 2022, name: 'New York City 2022' },
  { id: 'organic-cup-mi-2020', competitionId: 'the-organic-cup', year: 2020, name: 'Michigan 2020' },
  { id: 'organic-cup-mi-2018', competitionId: 'the-organic-cup', year: 2018, name: 'Michigan 2018' },
  { id: 'hlc-2022', competitionId: 'highlife-cup', year: 2022, name: 'Amsterdam 2022' },
  { id: 'grcc-2022', competitionId: 'garden-route-cannabis-cup', year: 2022, name: 'Garden Route 2022' },
  { id: 'nva-2022', competitionId: 'nevada-cannabis-awards', year: 2022, name: 'Las Vegas 2022' },
  { id: 'ocannabiz-2022', competitionId: 'ocannabiz-awards', year: 2022, name: 'Toronto 2022' },
  { id: 'eccc-za-2022', competitionId: 'east-coast-cannabis-cup', year: 2022, name: 'South Africa 2022' },
  { id: 'hgc-summer-2022', competitionId: 'homegrown-cup', year: 2022, name: 'Summer Edition 2022 (Tilburg)' },
  { id: 'aca-phx-2022', competitionId: 'arizona-cannabis-awards', year: 2022, name: 'Phoenix 2022' },
  { id: 'rtcc-2022', competitionId: 'rooster-thc-classic', year: 2022, name: 'THC Classic 2022' },
  { id: 'thc-champ-2022', competitionId: 'thc-championship', year: 2022, name: 'THC Championship 2022' },
  { id: 'scc-bcn-2022', competitionId: 'spannabis-champions-cup', year: 2022, name: 'Barcelona 2022' },
  { id: 'suncup-2021', competitionId: 'sun-cup', year: 2021, name: 'Washington 2021' },
  { id: 'fms-ct-2025', competitionId: 'fullmoon-sesh', year: 2025, name: 'Cape Town 2025 (10th Edition)' },
  { id: 'fms-bcn-se-2025', competitionId: 'fullmoon-sesh', year: 2025, name: 'Barcelona Special Edition 2025' },
  { id: 'fms-bkk-2025', competitionId: 'fullmoon-sesh', year: 2025, name: 'Bangkok 2025' },
  { id: 'fms-ba-2025', competitionId: 'fullmoon-sesh', year: 2025, name: 'Buenos Aires 2025' },
  { id: 'fms-prague-2024', competitionId: 'fullmoon-sesh', year: 2024, name: 'Prague 2024 (6th Edition)' },
  { id: 'fms-la-2024', competitionId: 'fullmoon-sesh', year: 2024, name: 'Los Angeles 2024' },
  { id: 'fms-madrid-2024', competitionId: 'fullmoon-sesh', year: 2024, name: 'Madrid 2024' },

];

// Part 3: The "Winners' Podium" with all placements
export const placements = [
  // Amsterdam Coffeeshop Awards 2023
  { eventId: 'aca-2023', category: 'Best Sativa Flower', rank: 1, winnerName: 'Coffeeshop Old Church', entryName: 'Cherry Popperz' },
  { eventId: 'aca-2023', category: 'Best Sativa Flower', rank: 2, winnerName: 'Haze Monkey', entryName: 'Lemon Haze' },
  { eventId: 'aca-2023', category: 'Best Indica Flower', rank: 1, winnerName: 'Coffeeshop Reefer', entryName: 'Candy Popzz' },

  // Spannabis Champions Cup 2025
  { eventId: 'scc-2025', category: 'Rosin', rank: 1, winnerName: 'Dochazed', entryName: 'Bask Trangle' },
  { eventId: 'scc-2025', category: 'Rosin', rank: 2, winnerName: 'We Flowers', entryName: 'Zkittle Bx1' },
  { eventId: 'scc-2025', category: 'Rosin', rank: 3, winnerName: 'Slite23', entryName: 'Guave Zkittlez' },
  { eventId: 'scc-2025', category: 'Hash', rank: 1, winnerName: 'Powerpuff Farm', entryName: 'Danup' },
  { eventId: 'scc-2025', category: 'Hash', rank: 2, winnerName: 'Theroomkiller', entryName: 'Gak Bx1' },
  { eventId: 'scc-2025', category: 'Hash', rank: 3, winnerName: 'We Flowers', entryName: 'Zkittlez Bx1' },

  // The Secret Cup 2014 (SoCal Regional)
  { eventId: 'tsc-socal-2014', category: 'Overall', rank: 1, winnerName: 'Roilty Extracts', entryName: null },
  { eventId: 'tsc-socal-2014', category: 'Overall', rank: 2, winnerName: 'Brutal Bee Concentrates', entryName: null },
  { eventId: 'tsc-socal-2014', category: 'Overall', rank: 3, winnerName: 'Chill Hill Extracts', entryName: null },

  // The Secret Cup 2014 (Desert Regional, Phoenix)
  { eventId: 'tsc-desert-2014', category: 'Overall', rank: 1, winnerName: 'WaxeyGordon', entryName: 'White Fire OG Live Resin' },
  { eventId: 'tsc-desert-2014', category: 'Overall', rank: 2, winnerName: 'Witsofire', entryName: 'Professor Chaos Shatter' },
  { eventId: 'tsc-desert-2014', category: 'Overall', rank: 3, winnerName: 'Arizona Cannabis Society', entryName: 'Grand Daddy Purple Shatter' },
  { eventId: 'tsc-desert-2014', category: 'Connoisseur’s Choice', rank: 'N/A', winnerName: 'Glorious Extracts', entryName: 'Pluto\'s Fire Shatter' },
  
  // The Secret Cup 2013 (NorCal Regional, Oakland)
  { eventId: 'tsc-norcal-2013', category: 'Overall / Best Shatter', rank: 1, winnerName: ['Sin City Seeds', 'Sin City Oilers'], entryName: 'Tangerine Power Shatter' },
  { eventId: 'tsc-norcal-2013', category: 'Overall', rank: 2, winnerName: 'Brutal Bee Extracts', entryName: 'Captain Pineapple Shatter' },
  { eventId: 'tsc-norcal-2013', category: 'Overall', rank: 3, winnerName: 'Kush Connection', entryName: 'Master Yoda Shatter' },
  { eventId: 'tsc-norcal-2013', category: 'Best Budder/Wax', rank: 'N/A', winnerName: 'Hashy Larry', entryName: 'Platinum OG' },
  { eventId: 'tsc-norcal-2013', category: 'Best Water Hash', rank: 'N/A', winnerName: 'Boo Boo’s Bubble', entryName: 'Eddy Lepp OG' },
  { eventId: 'tsc-norcal-2013', category: 'Highest CBD', rank: 'N/A', winnerName: ['Elephant Extracts', 'MTG Seeds'], entryName: 'CB Can‑D' },
  { eventId: 'tsc-norcal-2013', category: 'Highest Terpenes', rank: 'N/A', winnerName: 'Boo Boo’s Bubble', entryName: 'Eddy Lepp OG' },
  { eventId: 'tsc-norcal-2013', category: 'Highest THC', rank: 'N/A', winnerName: 'Brutal Bee Extracts', entryName: 'Captain Pineapple Shatter' },
  { eventId: 'tsc-norcal-2013', category: 'Connoisseur’s Choice', rank: 'N/A', winnerName: 'Beezle Extracts', entryName: 'Super Lemon Haze' },

  // The Secret Cup 2013 (PNW Regional, Seattle)
  { eventId: 'tsc-pnw-2013', category: 'Overall', rank: 1, winnerName: 'Dank Wax Inc.', entryName: 'Lemonade Shatter' },
  { eventId: 'tsc-pnw-2013', category: 'Overall', rank: 2, winnerName: 'Handmade Extracts', entryName: 'Pine Queen Dream' },
  { eventId: 'tsc-pnw-2013', category: 'Overall', rank: 3, winnerName: 'Kosher Concentrates', entryName: 'Hollywood OG' },
  { eventId: 'tsc-pnw-2013', category: 'Best Budder/Wax', rank: 'N/A', winnerName: 'Dank Wax Inc.', entryName: 'Lemonade' },
{ eventId: 'tsc-pnw-2013', category: 'Highest CBD', rank: 'N/A', winnerName: ['Standard Oil', 'MTG Seeds'], entryName: 'CB Can‑D' },

  // The Secret Cup 2013 (National Finals)
  { eventId: 'tsc-finals-2013', category: 'National Champion', rank: 1, winnerName: 'Mortimer Says', entryName: null },
  
  // The Secret Cup 2015 (Beast Coast Finals)
  { eventId: 'tsc-beast-2015', category: 'Overall', rank: 1, winnerName: 'Boondock Alchemists', entryName: '12 Holy Grail OG Shatter' },
  
  // The Secret Cup 2015 (National Finals)
{ eventId: 'tsc-finals-2015', category: 'Overall', rank: 1, winnerName: ['Terp Hogz', 'Moon Shine Melts', '3rd Gen'], entryName: 'Zkittlez Full Melt' },
  
  // The Secret Cup 2017 (National Finals)
{ eventId: 'tsc-finals-2017', category: 'Overall / Best Non-Solvent', rank: 1, winnerName: ['Fieldz', 'Terp Hogz'], entryName: 'Zkittlez Rosin' },
  { eventId: 'tsc-finals-2017', category: 'Overall / Best Solvent', rank: 2, winnerName: 'Karma Genetics', entryName: 'Biker Kush Shatter' },
  { eventId: 'tsc-finals-2017', category: 'Overall', rank: 3, winnerName: 'Peach Ringz Rosin', entryName: 'Peach Ringz Rosin' },
  
  // Ego Clash 2022 (Northern California)
  { eventId: 'ec-norcal-2022', category: 'Rosin', rank: 1, winnerName: 'Heritage Hash Co.', entryName: 'Riddlez' },
  { eventId: 'ec-norcal-2022', category: 'Rosin', rank: 2, winnerName: 'Master Ball Melts', entryName: 'Grape Gas' },
  { eventId: 'ec-norcal-2022', category: 'Rosin', rank: 3, winnerName: 'Cold Gold Solventless', entryName: 'Soap / Waffle Cones' },
  { eventId: 'ec-norcal-2022', category: 'Full Melt', rank: 1, winnerName: 'Simpleeadam', entryName: 'Banana God' },
  { eventId: 'ec-norcal-2022', category: 'Full Melt', rank: 2, winnerName: 'Trichome Tortoise', entryName: 'Super Boof' },
  { eventId: 'ec-norcal-2022', category: 'Full Melt', rank: 3, winnerName: 'Yeti Melts', entryName: 'Limeapple 36 / …' },

  // Ego Clash 2023 (Mendocino County, CA)
  { eventId: 'ec-mendo-2023', category: 'Best Rosin', rank: 1, winnerName: 'Yeti Melts', entryName: 'Optimus Lime #8' },
  { eventId: 'ec-mendo-2023', category: 'Best Rosin', rank: 2, winnerName: 'Pure & Proper', entryName: 'Kamikaze + Z Mix' },
  { eventId: 'ec-mendo-2023', category: 'Best Rosin', rank: 3, winnerName: 'Jah Botanist', entryName: 'Asian Pear' },
  { eventId: 'ec-mendo-2023', category: 'Best Full Melt', rank: 1, winnerName: 'Trichome Tortoise', entryName: 'Ze Boof' },
  { eventId: 'ec-mendo-2023', category: 'Best Full Melt', rank: 2, winnerName: 'Passion 4 Hashin', entryName: 'CDLA6 + Starburst OG' },
  { eventId: 'ec-mendo-2023', category: 'Best Full Melt', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: 'Guapa Empanada de Pina' },

  // Ego Clash 2024 (Northern California)
  { eventId: 'ec-norcal-2024', category: 'Best Hash Rosin', rank: 1, winnerName: 'Yeti Melts', entryName: 'Optimus Lime #8' },
  { eventId: 'ec-norcal-2024', category: 'Best Hash Rosin', rank: 2, winnerName: 'Pure & Proper', entryName: 'Kamikaze + Z Mix' },
  { eventId: 'ec-norcal-2024', category: 'Best Hash Rosin', rank: 3, winnerName: 'Jah Botanist', entryName: 'Asian Pear' },
  { eventId: 'ec-norcal-2024', category: 'Best Full Melt', rank: 1, winnerName: 'Trichome Tortoise', entryName: 'Ze Boof' },
  { eventId: 'ec-norcal-2024', category: 'Best Full Melt', rank: 2, winnerName: 'Passion 4 Hashin', entryName: 'CDLA6 + Starburst OG' },
  { eventId: 'ec-norcal-2024', category: 'Best Full Melt', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: 'Guapa Empanada de Pina' },

  // Ego Clash 2025 (Barcelona Invitational)
  { eventId: 'ec-bcn-2025', category: 'Hash', rank: 1, winnerName: 'Zure Farm', entryName: 'Bana Sherbet' },
  { eventId: 'ec-bcn-2025', category: 'Hash', rank: 2, winnerName: 'The Baked Taters', entryName: 'Death by Boof' },
  { eventId: 'ec-bcn-2025', category: 'Hash', rank: 3, winnerName: 'Bud Professor', entryName: 'Melon Ball' },
  { eventId: 'ec-bcn-2025', category: 'Dry Sift', rank: 1, winnerName: 'Roolab Flavours', entryName: null },
  { eventId: 'ec-bcn-2025', category: 'Dry Sift', rank: 2, winnerName: 'La Chanvriere', entryName: null },
  { eventId: 'ec-bcn-2025', category: 'Dry Sift', rank: 3, winnerName: 'The Static Room', entryName: null },
  { eventId: 'ec-bcn-2025', category: 'Rosin', rank: 1, winnerName: 'HappyHashCat', entryName: 'OGZ' },
  { eventId: 'ec-bcn-2025', category: 'Rosin', rank: 2, winnerName: 'Trichome Science', entryName: 'Rescazi' },
  { eventId: 'ec-bcn-2025', category: 'Rosin', rank: 3, winnerName: 'Colombia Exotics', entryName: 'Piñas x Papaya' },
  
  // Legends of Hashish ~2000s (Legends of Hashish I)
{ eventId: 'loh-1', category: 'Melt', rank: 1, winnerName: ['Ben McCabe', 'Sours for You'], entryName: 'Banana Milkshake' },
  { eventId: 'loh-1', category: 'Melt', rank: 2, winnerName: 'Ice House Melts', entryName: 'Lemon Dog Shit' },
  { eventId: 'loh-1', category: 'Melt', rank: 3, winnerName: 'Dammit Bobby', entryName: 'Moonbow' },

  // Legends of Hashish 2022 (Los Angeles)
  { eventId: 'loh-2', category: 'Rosin', rank: 1, winnerName: 'Professor Sift', entryName: 'Honey Bananas' },
  { eventId: 'loh-2', category: 'Rosin', rank: 2, winnerName: 'Mega Raw Melts', entryName: 'Zenith' },
  { eventId: 'loh-2', category: 'Rosin', rank: 3, winnerName: 'Secret Society Hash Co.', entryName: 'Zapaya' },
  { eventId: 'loh-2', category: 'Full Melt', rank: 1, winnerName: 'Ice House Melts', entryName: 'Zhishkaberry' },
  { eventId: 'loh-2', category: 'Full Melt', rank: 2, winnerName: 'Quality Squishes', entryName: 'Rainbow Beltz 2.0' },
  { eventId: 'loh-2', category: 'Full Melt', rank: 3, winnerName: 'Gold Country Resin', entryName: 'Durban Sherbert' },

  // Legends of Hashish 2023 (Spain & Portland)
  { eventId: 'loh-3', category: 'Rosin', rank: 1, winnerName: '#49 SKUNK', entryName: 'Papa Burger' },
  { eventId: 'loh-3', category: 'Rosin', rank: 2, winnerName: '#50 SKUNK', entryName: 'Rambutan' },
  { eventId: 'loh-3', category: 'Rosin', rank: 3, winnerName: '#57 Vessel Life', entryName: 'Phosphene' },
  { eventId: 'loh-3', category: 'Dry Sift', rank: 1, winnerName: '#19 Golden Heads', entryName: 'Zkittlez' },
  { eventId: 'loh-3', category: 'Dry Sift', rank: 2, winnerName: '#20 Golden Heads', entryName: 'Neonz' },
  { eventId: 'loh-3', category: 'Dry Sift', rank: 3, winnerName: '#62 Wolverine Dabs', entryName: 'Dubba Dosi' },
  { eventId: 'loh-3', category: 'Full Melt', rank: 1, winnerName: '#47 Secret Society Hash', entryName: 'Guapa' },
  { eventId: 'loh-3', category: 'Full Melt', rank: 2, winnerName: '#34 Quality Squishes', entryName: 'Burntrainbowz' },
  { eventId: 'loh-3', category: 'Full Melt', rank: 3, winnerName: '#12 Cold Craft Hash Co.', entryName: 'Starburst 36 #2' },
  { eventId: 'loh-3', category: 'Scott Deppe Award', rank: 'Award', winnerName: '#28 Kache', entryName: 'Papaya Guava' },
  { eventId: 'loh-3', category: 'Darby Award', rank: 'Award', winnerName: '#50 SKUNK', entryName: 'Rambutan' },
  { eventId: 'loh-3', 'category': 'JP Toro Award', rank: 'Award', winnerName: '#18 Gold Country Resin', entryName: 'Sour Papaya' },

  // Legends of Hashish 2024 (Portland)
  { eventId: 'loh-pdx-2024', category: 'Melt', rank: 1, winnerName: 'Dammit Bobby', entryName: 'Sunshine Daydream' },
  { eventId: 'loh-pdx-2024', category: 'Melt', rank: 2, winnerName: 'Constellation Cannabis', entryName: 'Superboof' },
  { eventId: 'loh-pdx-2024', category: 'Melt', rank: 3, winnerName: 'Hugh Hashner', entryName: 'Detroit Muscle' },
  { eventId: 'loh-pdx-2024', category: 'Dry Sift', rank: 1, winnerName: 'Wolverine Dabs', entryName: 'Fog Melted Strawberries' },
  { eventId: 'loh-pdx-2024', category: 'Dry Sift', rank: 2, winnerName: 'Wolverine Dabs', entryName: 'MVF Gush Mints' },
  { eventId: 'loh-pdx-2024', category: 'Rosin', rank: 1, winnerName: 'Black Market Hash', entryName: 'Shishka 36' },
  { eventId: 'loh-pdx-2024', category: 'Rosin', rank: 2, winnerName: 'Oregrown', entryName: 'Candied Papaya' },
  { eventId: 'loh-pdx-2024', category: 'Rosin', rank: 3, winnerName: 'Cannabis Fine', entryName: 'Honey Lime' },

  // Masters of Rosin 2025 (Barcelona)
  { eventId: 'mor-bcn-2025', category: 'Rosin', rank: 1, winnerName: 'Slite23', entryName: 'GuavaZ' },
  { eventId: 'mor-bcn-2025', category: 'Rosin', rank: 2, winnerName: 'Passion4Hashing', entryName: 'Yellow Zushi x Pink Drink' },
{ eventId: 'mor-bcn-2025', category: 'Rosin', rank: 3, winnerName: ['We Flowers', 'We Xtracts'], entryName: 'Gold Cherry Z' },
  
  // Masters of Rosin 2025 (New York City)
  { eventId: 'mor-nyc-2025', category: 'Rosin', rank: 1, winnerName: '@melting.mfg', entryName: null },
  { eventId: 'mor-nyc-2025', category: 'Rosin', rank: 2, winnerName: '@pop.cough', entryName: null },
  { eventId: 'mor-nyc-2025', category: 'Rosin', rank: 3, winnerName: '@superlative_solventless', entryName: null },

  // Masters of Rosin 2024 (Barcelona)
  { eventId: 'mor-bcn-2024', category: 'Rosin', rank: 1, winnerName: 'Slite23', entryName: 'GuavaZ' },
  { eventId: 'mor-bcn-2024', category: 'Rosin', rank: 2, winnerName: 'Passion4Hashing', entryName: 'Yellow Zushi x Pink Drink' },
{ eventId: 'mor-bcn-2024', category: 'Rosin', rank: 3, winnerName: ['We Flowers', 'We Xtracts'], entryName: 'Gold Cherry Z' },

  // Masters of Rosin 2024 (Los Angeles)
  { eventId: 'mor-la-2024', category: 'Rosin', rank: 1, winnerName: 'Real Deal Resin', entryName: 'Zkittlez' },
  { eventId: 'mor-la-2024', category: 'Rosin', rank: 2, winnerName: 'The Real Cannabis Chris', entryName: 'Wild Cherry' },
  { eventId: 'mor-la-2024', category: 'Rosin', rank: 3, winnerName: 'Trichome Tortoise', entryName: 'Zkittlez rosin' },

  // Masters of Rosin 2023 (Barcelona)
  { eventId: 'mor-bcn-2023', category: 'Rosin', rank: 1, winnerName: 'Slite23', entryName: 'GuavaZ' },
  { eventId: 'mor-bcn-2023', category: 'Rosin', rank: 2, winnerName: 'Passion4Hashing', entryName: 'Yellow Zushi x Pink Drink' },
{ eventId: 'mor-bcn-2023', category: 'Rosin', rank: 3, winnerName: ['We Flowers', 'We Xtracts'], entryName: 'Gold Cherry Z' },
  
  // Masters of Rosin 2019 (Barcelona)
  { eventId: 'mor-bcn-2019', category: 'Flower Rosin', rank: 1, winnerName: 'Scorpion Crew', entryName: 'Wild Berry' },
  { eventId: 'mor-bcn-2019', category: 'Flower Rosin', rank: 2, winnerName: 'Ripper Seeds', entryName: 'Ripper Badazz' },
  { eventId: 'mor-bcn-2019', category: 'Flower Rosin', rank: 3, winnerName: 'Grateful Seeds', entryName: 'Raspberry Cookie' },
  { eventId: 'mor-bcn-2019', category: 'Hash Rosin', rank: 1, winnerName: ['Terps Army', 'La Sagrada Farm'], entryName: 'Ice Cream Cake' },
  { eventId: 'mor-bcn-2019', category: 'Hash Rosin', rank: 2, winnerName: 'Feeling Frosty', entryName: 'Flower Candy' },
  { eventId: 'mor-bcn-2019', category: 'Hash Rosin', rank: 3, winnerName: 'Pure Essence', entryName: 'Forbidden Garden' },

  // Masters of Rosin 2018 (Barcelona)
  { eventId: 'mor-bcn-2018', category: 'Flower Rosin', rank: 1, winnerName: 'Ripper Seeds', entryName: 'Old School' },
  { eventId: 'mor-bcn-2018', category: 'Flower Rosin', rank: 2, winnerName: 'R Kiem Seeds', entryName: 'Oregon Diesel' },
  { eventId: 'mor-bcn-2018', category: 'Flower Rosin', rank: 3, winnerName: 'Team 10', entryName: 'Headbanger' },
  { eventId: 'mor-bcn-2018', category: 'Hash Rosin', rank: 1, winnerName: ['Field Extracts', 'Terp Hogz'], entryName: 'Zmoothie' },
  { eventId: 'mor-bcn-2018', category: 'Hash Rosin', rank: 2, winnerName: 'Ripper Seeds', entryName: 'Sour Diesel' },
  { eventId: 'mor-bcn-2018', category: 'Hash Rosin', rank: 3, winnerName: 'Underground Originals', entryName: 'Disco Biscuit' },

  // Cowboy Cup 2021 (Tulsa, OK)
  { eventId: 'cc-2021', category: 'Rosin Cart', rank: 1, winnerName: ['Scissortail Solventless', 'Top Notch Herbal Care'], entryName: 'Papaya Punch' },
  
  // Cowboy Cup 2022 (Tulsa, OK)
  { eventId: 'cc-2022', category: 'Rosin', rank: 1, winnerName: 'Craft Cultivana', entryName: 'Trop Punch' },
  { eventId: 'cc-2022', category: 'Rosin', rank: 2, winnerName: 'Crown Concentrates', entryName: 'Sherbet Cake' },
  { eventId: 'cc-2022', category: 'Rosin', rank: 3, winnerName: 'Cicada Labs', entryName: 'Pyxy Styx' },

  // Cowboy Cup 2023 (Tulsa, OK)
  { eventId: 'cc-2023', category: 'Rosin Cart', rank: 1, winnerName: ['Cicada Labs', 'Hutchinson Farms'], entryName: 'Red Smoothie' },
  { eventId: 'cc-2023', category: 'Concentrates (Rosin)', rank: 1, winnerName: ['918 OG', 'Oklahoma Cannabis Factory'], entryName: 'Golden Egg' },

  // Cowboy Cup 2024 (Tulsa, OK)
  { eventId: 'cc-2024', category: 'Rosin (Concentrates)', rank: 1, winnerName: 'Chill', entryName: 'Garlic Icing' },
  { eventId: 'cc-2024', category: 'Rosin (Concentrates)', rank: 2, winnerName: 'Chill', entryName: 'Grape Gas' },
  { eventId: 'cc-2024', category: 'Rosin (Concentrates)', rank: 3, winnerName: 'Chill', entryName: 'Electric Slide #2' },
  { eventId: 'cc-2024', category: 'Ice Water Hash', rank: 1, winnerName: 'Zen Labs', entryName: 'Candy Fumes' },
  { eventId: 'cc-2024', category: 'Ice Water Hash', rank: 2, winnerName: ['Cicada Labs', 'Rafter B'], entryName: 'Honey Banana' },
  { eventId: 'cc-2024', category: 'Ice Water Hash', rank: 3, winnerName: ['Cicada Labs', 'Heartland Farms'], entryName: 'Garlic Cocktail' },
  { eventId: 'cc-2024', category: 'Rosin Carts', rank: 1, winnerName: ['Cicada Labs', 'Oklahoma Native Roots'], entryName: 'Kitchen Sink' },
  { eventId: 'cc-2024', category: 'Rosin Carts', rank: 2, winnerName: 'Dime Industries', entryName: 'Sour Tangie' },
  { eventId: 'cc-2024', category: 'Rosin Carts', rank: 3, winnerName: 'Very Good Grows', entryName: 'Bad Betty' },
  
  // Dab Rite Cup Invitational Series 2023-2024
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Apr 29, 2023)', rank: 1, winnerName: 'Master Ball Melts', entryName: 'Grape Gas' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Apr 29, 2023)', rank: 'PC', winnerName: 'SoCal Dank', entryName: 'Sour Cherryz' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (May 27, 2023)', rank: 1, winnerName: 'Lo-Phoria', entryName: 'Island Hopper' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (May 27, 2023)', rank: 'PC', winnerName: 'Exclusive Extracts', entryName: 'Mystery Airheads' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Jun 24, 2023)', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'BB8 (Dulce de Fresca)' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Jun 24, 2023)', rank: 'PC', winnerName: 'The Real Cannabis Chris', entryName: 'BB8' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Jul 29, 2023)', rank: 1, winnerName: 'Trichome Tortoise', entryName: 'Blumosa' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Jul 29, 2023)', rank: 'PC', winnerName: 'Trichome Tortoise', entryName: 'Blumosa' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Aug 26, 2023)', rank: 1, winnerName: 'Solventless Refinery', entryName: 'Oishii' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Aug 26, 2023)', rank: 'PC', winnerName: 'Ay Papi', entryName: 'White Thorn Rose' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Oct 1, 2023)', rank: 1, winnerName: 'Wigs Wash', entryName: 'Donny Burger' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Oct 1, 2023)', rank: 'PC', winnerName: 'Lifted In Dena', entryName: 'Candied Oranges' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Oct 21, 2023)', rank: 1, winnerName: 'Bloom Fields', entryName: 'Verzache' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Oct 21, 2023)', rank: 'PC', winnerName: 'Purp Terps', entryName: 'Super Buff Cherries' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Nov 11, 2023)', rank: 1, winnerName: 'Real Deal Resin', entryName: 'Honey Banana' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Nov 11, 2023)', rank: 'PC', winnerName: 'Sun Fire Farms', entryName: 'Stifler’s Mom' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Dec 16, 2023)', rank: 1, winnerName: 'Only Grow Organics', entryName: 'Strawberry Watermelon Kush' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Dec 16, 2023)', rank: 'PC', winnerName: 'Melty Mill', entryName: 'Super Boof' },
  { eventId: 'drc-invitational-23-24', category: 'Invitational Winner (Jan 6, 2024)', rank: 1, winnerName: 'Ope Organics', entryName: 'Papaya' },
  { eventId: 'drc-invitational-23-24', category: 'People\'s Choice (Jan 6, 2024)', rank: 'PC', winnerName: 'Ope Organics', entryName: 'Papaya' },
  { eventId: 'drc-invitational-23-24', category: 'Grand Finale Winner', rank: 1, winnerName: 'Solventless Refinery', entryName: 'Planet Red' },
  { eventId: 'drc-invitational-23-24', category: 'Grand Finale Winner', rank: 2, winnerName: 'Real Deal Resin', entryName: 'Z' },
  { eventId: 'drc-invitational-23-24', category: 'Grand Finale Winner', rank: 3, winnerName: 'Lo-Phoria', entryName: 'Pie Eyed' },
  { eventId: 'drc-invitational-23-24', category: 'Grand Finale People\'s Choice', rank: 'PC', winnerName: 'The Real Cannabis Chris', entryName: 'Wild Cherry' },
  
  // Dab Rite Cup Regionals 2024-2025
  { eventId: 'drc-regionals-24-25', category: 'Region 1 (Colorado)', rank: 1, winnerName: '@Unkwn_Gardens', entryName: 'Laser Jet' },
  { eventId: 'drc-regionals-24-25', category: 'Region 2 (Alaska)', rank: 1, winnerName: '@PollyChromeGrass', entryName: 'Wilson Zero' },
  { eventId: 'drc-regionals-24-25', category: 'Region 2 (Alaska)', rank: 1, winnerName: '@WolfTownfarms', entryName: 'B-42' },
  { eventId: 'drc-regionals-24-25', category: 'Region 3 (Northeast)', rank: 1, winnerName: '@ValleyGarden207', entryName: 'Pie Dough' },
  { eventId: 'drc-regionals-24-25', category: 'Region 4 (Mid-North)', rank: 1, winnerName: '@Khlorisflora7.0', entryName: 'Papaya Patties' },
  { eventId: 'drc-regionals-24-25', category: 'Region 5 (Mid-West)', rank: 1, winnerName: '@Rwsolventless', entryName: 'Super Boof' },

  // Dab-A-Doo Valencia 2015
  { eventId: 'dad-val-2015', category: 'Solvent (Live Resin)', rank: 1, winnerName: ['OilHunters', 'Dr Feis'], entryName: 'Somango OG Live Resin' },
  { eventId: 'dad-val-2015', category: 'Solvent', rank: 2, winnerName: ['Herbalist BCN', 'Aethrr'], entryName: '707 Headband Terp Sap' },
  { eventId: 'dad-val-2015', category: 'Solvent', rank: 3, winnerName: 'Champion Seeds', entryName: null },
  
  // Dab-A-Doo Barcelona 2016
  { eventId: 'dad-bcn-2016', category: 'Non-Solvent', rank: 1, winnerName: 'HQ', entryName: 'Tiger Melon i.w.e.' },
  { eventId: 'dad-bcn-2016', category: 'Non-Solvent', rank: 2, winnerName: 'El Plaer de la Vida', entryName: 'Girl Pleasure Cookies' },
  { eventId: 'dad-bcn-2016', category: 'Non-Solvent', rank: 3, winnerName: 'Club Anesthesia Barcelona', entryName: 'Violator Kush' },
  { eventId: 'dad-bcn-2016', category: 'Solvent', rank: 1, winnerName: 'Oil Hunters', entryName: 'OG Gangstars' },
  { eventId: 'dad-bcn-2016', category: 'Solvent', rank: 2, winnerName: '23 Oils', entryName: 'Mango OG Live Resin' },
  { eventId: 'dad-bcn-2016', category: 'Solvent', rank: 3, winnerName: 'Kippax Concentrates', entryName: 'Mother of All Dawg' },
  { eventId: 'dad-bcn-2016', category: 'Rosin', rank: 1, winnerName: 'Carroll Leds Genetics', entryName: 'Super Orange Haze Rosin' },
  { eventId: 'dad-bcn-2016', category: 'Rosin', rank: 2, winnerName: ['Serious Seeds', 'House of the Great Gardener'], entryName: 'Warlock Rosin' },
  { eventId: 'dad-bcn-2016', category: 'Rosin', rank: 3, winnerName: 'House of the Great Gardener', entryName: 'Barb Drysift Rosin' },

  // Dab-A-Doo Mexico 2018
  { eventId: 'dad-mex-2018', category: 'Overall', rank: 2, winnerName: 'Eleven Roses', entryName: null },

  // Dab-A-Doo Amsterdam 2021
  { eventId: 'dad-ams-2021', category: 'Non-Solvent', rank: 1, winnerName: 'Green Place', entryName: 'Entry #19' },
  { eventId: 'dad-ams-2021', category: 'Non-Solvent', rank: 2, winnerName: 'Zmoothiez', entryName: 'Entry #16' },

  // Dab-A-Doo Barcelona 2022
  { eventId: 'dad-bcn-2022', category: 'Best Sift', rank: 1, winnerName: 'Champion Seeds', entryName: 'White Roquefort' },
  { eventId: 'dad-bcn-2022', category: 'Best Sift', rank: 2, winnerName: 'Champion Seeds', entryName: 'Purple Citrus' },
  { eventId: 'dad-bcn-2022', category: 'Best Rosin', rank: 1, winnerName: 'THC Aficionados', entryName: 'Ghost Dolce' },
  { eventId: 'dad-bcn-2022', category: 'Best Rosin', rank: 2, winnerName: 'Lovely Hash Co.', entryName: 'Bapaya' },
  { eventId: 'dad-bcn-2022', category: 'Best Rosin', rank: 3, winnerName: 'Pressure Labz', entryName: 'Fruit Ninja' },
  { eventId: 'dad-bcn-2022', category: 'Best Solvent', rank: 1, winnerName: 'Johnny Dabb', entryName: 'Runtz' },
  { eventId: 'dad-bcn-2022', category: 'Best Solvent', rank: 2, winnerName: 'Terp Tower Invitational', entryName: 'Cookies n Cream' },
  { eventId: 'dad-bcn-2022', category: 'Best Solvent', rank: 3, winnerName: 'Champion Seeds', entryName: 'Mendocino Purps × Uva' },
  { eventId: 'dad-bcn-2022', category: 'Best Ice Hash', rank: 1, winnerName: 'Alto Jardin Farm', entryName: 'Purple Punch' },
  { eventId: 'dad-bcn-2022', category: 'Best Ice Hash', rank: 2, winnerName: 'Growth Farm', entryName: 'Ice Cream Cake × Wilson F2' },
  { eventId: 'dad-bcn-2022', category: 'Best Ice Hash', rank: 3, winnerName: 'Gold Green Extracts', entryName: 'Garlic Vibes' },
  { eventId: 'dad-bcn-2022', category: 'Best Hash Queen', rank: 1, winnerName: 'Ciubyyy', entryName: 'White Guava' },
  { eventId: 'dad-bcn-2022', category: 'Best Hash Queen', rank: 2, winnerName: 'Sweet Grass', entryName: 'Barbara Budd' },
  { eventId: 'dad-bcn-2022', category: 'Best Hash Queen', rank: 3, winnerName: 'Lil Big Smoker', entryName: 'Modified Papaya Candy' },

  // Dab-A-Doo Northeast (USA) 2024
  { eventId: 'dad-ne-2024', category: 'Rosin', rank: 1, winnerName: 'Michelin Terps', entryName: 'Super Boof' },
  { eventId: 'dad-ne-2024', category: 'Rosin', rank: 2, winnerName: 'Grow Space Killa', entryName: 'Hachimaki Grape Juice' },
  { eventId: 'dad-ne-2024', category: 'Rosin', rank: 3, winnerName: 'Third Shift Resin', entryName: 'Wedding Pie' },
  { eventId: 'dad-ne-2024', category: 'Full Melt', rank: 1, winnerName: 'Third Shift Resin', entryName: 'Stuntz' },
  { eventId: 'dad-ne-2024', category: 'Full Melt', rank: 2, winnerName: 'Crème De La Crème', entryName: '93 Octane' },
  { eventId: 'dad-ne-2024', category: 'Full Melt', rank: 3, winnerName: 'Grind Cannabis', entryName: 'Halle Berry' },

  // Dab-A-Doo Canada (Undated)
  { eventId: 'dad-ca-na', category: 'Solvent', rank: 1, winnerName: '@electric_eskimo_extracts', entryName: 'ROCKSTAR HARD DIAMONDS' },
  { eventId: 'dad-ca-na', category: 'Solvent', rank: 2, winnerName: 'Beard Bros', entryName: 'ANIMAL TRIANGLE' },
  { eventId: 'dad-ca-na', category: 'Solvent', rank: 3, winnerName: '@healthybudzz', entryName: 'HONEY OIL' },

  // The Emerald Cup 2024
  { eventId: 'ecup-2024', category: 'Solventless Ice Water Hash – Full Melt', rank: 1, winnerName: ['Ay Papi', 'Huckleberry Hill Farms'], entryName: 'Whitethorn Rose Ice Water Hash 6 Star Full Melt' },
  { eventId: 'ecup-2024', category: 'Solventless Ice Water Hash – Full Melt', rank: 2, winnerName: 'Have Hash', entryName: 'Sour Bears' },
  { eventId: 'ecup-2024', category: 'Solventless Ice Water Hash – Full Melt', rank: 3, winnerName: ['Ay Papi', 'Mattole Valley Sun Grown'], entryName: 'Purple Papaya Ice Water Hash 6 Star Full Melt' },
  { eventId: 'ecup-2024', category: 'Solventless Rosin', rank: 1, winnerName: ['Have Hash', 'Royal Budline'], entryName: 'Honey Bananas Cold Cure Live Rosin' },
  { eventId: 'ecup-2024', category: 'Solventless Rosin', rank: 2, winnerName: 'Moon Valley Cannabis', entryName: 'Panther Candy Dual Consistency Live Rosin' },
  { eventId: 'ecup-2024', category: 'Solventless Rosin', rank: 3, winnerName: ['Punch Extracts', 'Luma Farms'], entryName: 'Durban Lime' },
  { eventId: 'ecup-2024', category: 'Personal Use Solventless Concentrate', rank: 1, winnerName: 'Ronnie Gertz', entryName: 'Medjool 90u Ice Water Hash' },
  { eventId: 'ecup-2024', category: 'Personal Use Solventless Concentrate', rank: 2, winnerName: 'Christian Luevano', entryName: 'Peach Zephyr' },
  { eventId: 'ecup-2024', category: 'Personal Use Solventless Concentrate', rank: 3, winnerName: 'Mendo Dope', entryName: '“Sum Mo Ov It” Jam Whipped Doughnut' },

  // The Emerald Cup 2023
  { eventId: 'ecup-2023', category: 'Live Rosin (Solventless)', rank: 1, winnerName: ['Papa\'s Select', 'Booney Acres'], entryName: 'Strawberry Rainbows Premium Live Rosin' },
  { eventId: 'ecup-2023', category: 'Live Rosin (Solventless)', rank: 2, winnerName: ['El Krem', 'Purple City Genetics', 'Ahti Hash', 'Sunrise Gardens'], entryName: 'El Krem Moroccan Peaches Live Rosin' },
  { eventId: 'ecup-2023', category: 'Live Rosin (Solventless)', rank: 3, winnerName: 'Matt Schackow', entryName: 'Papaya Live Rosin Badder' },
  { eventId: 'ecup-2023', category: 'Personal Use Solventless', rank: 1, winnerName: 'Brett Byrd', entryName: 'Purple Magic' },
  { eventId: 'ecup-2023', category: 'Personal Use Solventless', rank: 2, winnerName: 'Matt Schackow', entryName: 'Papaya Live Rosin Badder' },
  { eventId: 'ecup-2023', category: 'Personal Use Solventless', rank: 3, winnerName: 'Christian Luevano', entryName: 'Papaya Piss' },

  // The Emerald Cup 2022
  { eventId: 'ecup-2022', category: 'Ice Water Hash', rank: 1, winnerName: 'Heritage Hash Co', entryName: 'Whitethorn Rose Live Bubble Hash' },
  { eventId: 'ecup-2022', category: 'Ice Water Hash', rank: 2, winnerName: 'el Krem', entryName: 'Papaya Bomb Ice Water Hash' },
  { eventId: 'ecup-2022', category: 'Ice Water Hash', rank: 3, winnerName: 'Papa’s Select', entryName: 'Amarelo #9 90u Ice Water Hash' },
  { eventId: 'ecup-2022', category: 'Rosin', rank: 1, winnerName: ['Rosin Tech Labs', 'Luma Farms'], entryName: 'Papaya' },
  { eventId: 'ecup-2022', category: 'Rosin', rank: 2, winnerName: 'Heritage Hash Co', entryName: 'Whitethorn Rose Live Rosin' },
  { eventId: 'ecup-2022', category: 'Rosin', rank: 3, winnerName: ['Kalya', 'Luma Farms'], entryName: 'Lemon Limez Rosin' },
  { eventId: 'ecup-2022', category: 'Personal Use Solventless', rank: 1, winnerName: ['Alice Reis', 'Flynn Abeln'], entryName: 'Wooksauce Winery Screaming Mimis' },
  { eventId: 'ecup-2022', category: 'Personal Use Solventless', rank: 2, winnerName: 'Brett Byrd', entryName: 'Modified Grapes Full Spec 45-159' },
  { eventId: 'ecup-2022', category: 'Personal Use Solventless', rank: 3, winnerName: 'Brett Byrd', entryName: 'Gush Mints Full Spec 45-159' },

  // The Emerald Cup 2021
  { eventId: 'ecup-2021', category: 'Ice Water Hash (Solventless)', rank: 1, winnerName: 'Papa’s Select', entryName: 'Strawberry Jelly 120u Water Hash' },
  { eventId: 'ecup-2021', category: 'Ice Water Hash (Solventless)', rank: 2, winnerName: 'Papa’s Select', entryName: 'Kombucha 90u Water Hash' },
  { eventId: 'ecup-2021', category: 'Ice Water Hash (Solventless)', rank: 3, winnerName: 'Papa’s Select', entryName: 'Garlic Juice 120u Water Hash' },
  { eventId: 'ecup-2021', category: 'Solventless Rosin', rank: 1, winnerName: ['Kalya Extracts', 'Landhammer Farms'], entryName: 'Patty’s Cake' },
  { eventId: 'ecup-2021', category: 'Solventless Rosin', rank: 2, winnerName: 'Rosin Tech Labs', entryName: 'Garlic Juice #3 Fresh Pressed Live Rosin' },
  { eventId: 'ecup-2021', category: 'Solventless Rosin', rank: 3, winnerName: 'Papa’s Select', entryName: 'Strawberry Jelly Premium Live Rosin' },
  { eventId: 'ecup-2021', category: 'Personal Use Solventless', rank: 1, winnerName: 'Brett Byrd', entryName: 'Orange Elixir Live Rosin' },
  { eventId: 'ecup-2021', category: 'Personal Use Solventless', rank: 2, winnerName: 'Michael Alamares', entryName: 'Fat Tropaya' },
  { eventId: 'ecup-2021', category: 'Personal Use Solventless', rank: 3, winnerName: 'Brett Byrd', entryName: 'Tahoe C4 Live Rosin' },

  // The Emerald Cup 2019
  { eventId: 'ecup-2019', category: 'Ice Water Hash / Full Melt', rank: 1, winnerName: ['Papa’s Select', 'Humboldt Kine Farms'], entryName: 'THC BOMB 104 µ Water Hash' },
  { eventId: 'ecup-2019', category: 'Ice Water Hash / Full Melt', rank: 2, winnerName: ['Papa’s Select', 'Humboldt Kine Farms'], entryName: 'Peanut Butter Breath 104 µ Water Hash' },
  { eventId: 'ecup-2019', category: 'Ice Water Hash / Full Melt', rank: 3, winnerName: 'Papa’s Select', entryName: 'Wedding Crasher 104 µ Water Hash' },
  { eventId: 'ecup-2019', category: 'Ice Water Hash / Full Melt', rank: 4, winnerName: 'Kalya Brand', entryName: 'Cherry Blossom Full Melt' },
  { eventId: 'ecup-2019', category: 'Ice Water Hash / Full Melt', rank: 5, winnerName: 'Kalya Brand', entryName: 'Sour Diesel Full Melt' },
  { eventId: 'ecup-2019', category: 'Solventless Rosin', rank: 1, winnerName: ['Zenganic Inc.', 'Kalya Extracts', 'Sours'], entryName: 'Fruit Stripe Rosin' },
  { eventId: 'ecup-2019', category: 'Solventless Rosin', rank: 2, winnerName: ['Zenganic Inc.', 'Kalya Extracts', 'Monterey Kush Co.'], entryName: 'Banana Cream Rosin' },
  { eventId: 'ecup-2019', category: 'Solventless Rosin', rank: 3, winnerName: ['Zenganic Inc.', 'Kalya Extracts', 'Dancing Dog Ranch'], entryName: 'Garlic Juice Rosin' },
  { eventId: 'ecup-2019', category: 'Solventless Rosin', rank: 4, winnerName: ['F/ELD', 'Alien Labs'], entryName: 'Moonbow Premium Rosin' },
  { eventId: 'ecup-2019', category: 'Solventless Rosin', rank: 5, winnerName: ['Papa’s Select', 'Tar Hill Cannabis'], entryName: 'Tar Hill Pink Lemonade Premium Live Rosin' },

  // Hash It Out Cup I - November 2022
  { eventId: 'hio-1', category: 'Rosin', rank: 1, winnerName: 'Van Span', entryName: 'Sundae Driver' },
  { eventId: 'hio-1', category: 'Rosin', rank: 2, winnerName: 'Pineapple Reserve', entryName: 'Guavamon' },
  { eventId: 'hio-1', category: 'Rosin', rank: 3, winnerName: 'Wash Hash Co', entryName: 'Sticky Dubb' },

  // Hash It Out Cup II - April 2023
  { eventId: 'hio-2', category: 'Rosin', rank: 1, winnerName: 'Rocky Mountain', entryName: 'MAC Slushy' },
  { eventId: 'hio-2', category: 'Rosin', rank: 2, winnerName: 'Taste Craft', entryName: 'Sour Strawberries' },
  { eventId: 'hio-2', category: 'Rosin', rank: 3, winnerName: 'Wash Hash Co', entryName: 'Poochies Papaya' },
  { eventId: 'hio-2', category: 'JP Toro’s Choice', rank: 'Award', winnerName: 'Van Span', entryName: 'Drip Station' },

  // Hash It Out Cup III - January 2024
  { eventId: 'hio-3', category: 'Rosin', rank: 1, winnerName: 'Fire Farms Maui', entryName: 'Sour Cindy #3' },
  { eventId: 'hio-3', category: 'Rosin', rank: 2, winnerName: 'Rosin Star', entryName: 'Trop Lime' },
  { eventId: 'hio-3', category: 'Rosin', rank: 3, winnerName: 'The Woods', entryName: 'Banana Papaya' },

  // Hash It Out Cup IV - July 2024
  { eventId: 'hio-4', category: 'Rosin', rank: 1, winnerName: 'Growfare Extracts', entryName: 'Pootang Pie' },
  { eventId: 'hio-4', category: 'Rosin', rank: 2, winnerName: 'Fire Farms Maui', entryName: 'Sour Cindy #3' },
  { eventId: 'hio-4', category: 'Rosin', rank: 3, winnerName: ['Oahu Solventless', 'The Last Air Dryer'], entryName: 'Strawberry Papaya' },

  // Hash It Out Cup V - November 2024
  { eventId: 'hio-5', category: 'Rosin', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'Cotton Candy Grapes' },
  { eventId: 'hio-5', category: 'Rosin', rank: 2, winnerName: 'High Tech Rosin', entryName: 'Papaya X Cranberry Z' },
  { eventId: 'hio-5', category: 'Rosin', rank: 3, winnerName: 'Soccer Dad', entryName: 'Strawberry Cheeze Popz' },
  { eventId: 'hio-5', category: 'JP Toro’s Choice', rank: 'Award', winnerName: 'High Tech Rosin', entryName: 'Papaya X Cranberry Z' },
  { eventId: 'hio-5', category: 'Scott Deppe’s Choice', rank: 'Award', winnerName: 'Homesteady Heady', entryName: 'Papaya John Byrd' },
  { eventId: 'hio-5', category: 'Netherfriends’ Choice', rank: 'Award', winnerName: 'One Source Solventless', entryName: 'Tropaya' },

  // Hash It Out Cup VI - April 2025
  { eventId: 'hio-6', category: 'Rosin', rank: 1, winnerName: 'Alti', entryName: 'Candy Fumez' },
  { eventId: 'hio-6', category: 'Rosin', rank: 2, winnerName: 'Charlie’s Pineapple Reserve', entryName: 'Honey Fumez' },
  { eventId: 'hio-6', category: 'Rosin', rank: 3, winnerName: '1 Above Canada', entryName: 'Captain Milk' },
  { eventId: 'hio-6', category: 'Fahi Shark’s / Ego Clash Choice', rank: 'Award', winnerName: 'Charlie’s Pineapple Reserve', entryName: 'Honey Fumez' },

  // Smoking Jacket 2023 (Portland)
  { eventId: 'sj-pdx-2023', category: 'Expert Judges\' Pick', rank: 1, winnerName: 'Fort Wendy', entryName: 'Yellow Zushi' },
  { eventId: 'sj-pdx-2023', category: 'Expert Judges\' Pick', rank: 2, winnerName: 'Turtle Trees', entryName: 'OG Pie Breath' },
  { eventId: 'sj-pdx-2023', category: 'Expert Judges\' Pick', rank: 3, winnerName: 'Trichome Tortoise', entryName: 'Superboof' },
  { eventId: 'sj-pdx-2023', category: 'Maker’s Choice', rank: 'Award', winnerName: 'The Real Cannabis Chris', entryName: 'Michael Jordan' },
  { eventId: 'sj-pdx-2023', category: 'People’s Choice', rank: 'Award', winnerName: 'The Real Cannabis Chris', entryName: 'Michael Jordan' },

  // Smoking Jacket 2024 (Ithaca, NY)
  { eventId: 'sj-ith-2024', category: 'Top 5 Overall', rank: 1, winnerName: 'Helios Hash', entryName: 'Vizion' },
  { eventId: 'sj-ith-2024', category: 'Top 5 Overall', rank: 2, winnerName: 'Solventless Refinery', entryName: null },
  { eventId: 'sj-ith-2024', category: 'Top 5 Overall', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: null },
  { eventId: 'sj-ith-2024', category: 'Top 5 Overall', rank: 4, winnerName: 'Burly Botanicals', entryName: null },
  { eventId: 'sj-ith-2024', category: 'Top 5 Overall', rank: 5, winnerName: 'Portal Provisions', entryName: null },
  { eventId: 'sj-ith-2024', category: 'Expert’s Choice', rank: 'Award', winnerName: 'Solventless Refinery', entryName: null },
  { eventId: 'sj-ith-2024', category: 'Maker’s Choice', rank: 'Award', winnerName: 'The Real Cannabis Chris', entryName: null },
  { eventId: 'sj-ith-2024', category: 'People’s Choice', rank: 'Award', winnerName: 'Burly Botanicals', entryName: null },
  { eventId: 'sj-ith-2024', category: 'JP Toro’s Choice', rank: 'Award', winnerName: 'Trichome Tortoise', entryName: null },

  // Hash Bash Cup 2022 (South Portland, ME)
  { eventId: 'hbc-2022', category: 'Rosin', rank: 1, winnerName: 'Pamolab', entryName: 'Guavanana (Fresh-Press Live Rosin)' },
  { eventId: 'hbc-2022', category: 'Rosin', rank: 2, winnerName: 'Hazy Hill Farm', entryName: 'Cold-Cure Live Rosin Blend' },
  { eventId: 'hbc-2022', category: 'Rosin', rank: 3, winnerName: 'The Papermill Cannabis Co', entryName: 'Champaya (Live Rosin Jam)' },
  { eventId: 'hbc-2022', category: 'Brigid Farm Staff Pick', rank: 'Award', winnerName: 'Monkey Jones', entryName: 'Twice Cream Cake' },
  { eventId: 'hbc-2022', category: 'Highest THC', rank: 'Award', winnerName: 'Five Points Farm', entryName: 'Girl Scout Cookies (78.4% THC)' },
  { eventId: 'hbc-2022', category: 'Highest Terpenes', rank: 'Award', winnerName: 'Pamolab', entryName: 'Guavanana (4.71%)' },

  // Hash Bash Cup 2023 (South Portland, ME)
  { eventId: 'hbc-2023', category: 'Rosin', rank: 1, winnerName: 'Hazy Hill Farm', entryName: 'U.F.Co (United Fruit Company)' },

  // Hash Bash Cup 2024 (Detroit/Ann Arbor, MI)
  { eventId: 'hbc-2024', category: 'Solventless Rosin', rank: 1, winnerName: 'Matthew Pankinin', entryName: null },
  { eventId: 'hbc-2024', category: 'Solventless Rosin', rank: 2, winnerName: 'Ashley Anderson', entryName: null },
  { eventId: 'hbc-2024', category: 'Solventless Rosin', rank: 3, winnerName: 'Anthony Fletcher', entryName: null },

  // HashTimes Cup 2020 (Spring, Barcelona)
  { eventId: 'htc-bcn-2020s', category: 'Hash', rank: 1, winnerName: 'Banana Perfect Tree', entryName: 'Hash Strawberry' },
  { eventId: 'htc-bcn-2020s', category: 'Hash', rank: 2, winnerName: 'Zmoothiez Geneticz', entryName: 'Holynanacrack' },
  { eventId: 'htc-bcn-2020s', category: 'Hash', rank: 3, winnerName: 'Zmoothiez Germany', entryName: 'Orange Nectar' },

  // HashTimes Cup 2024 (Spring, Barcelona)
  { eventId: 'htc-bcn-2024s', category: 'Rosin', rank: 1, winnerName: 'Manzana Postobon', entryName: 'Hisenscrew' },
  { eventId: 'htc-bcn-2024s', category: 'Dry Sift', rank: 1, winnerName: 'Lab IG', entryName: 'Jungle Cake Frozen Treasure' },
  { eventId: 'htc-bcn-2024s', category: 'Ice-O-Lator', rank: 1, winnerName: 'Nugs420', entryName: 'Scarlet x Violet' },

  // HashTimes Cup 2024 (Winter, Barcelona)
  { eventId: 'htc-bcn-2024w', category: 'Rosin', rank: 1, winnerName: 'Single Sorcery', entryName: 'ZHead' },
  { eventId: 'htc-bcn-2024w', category: 'Rosin', rank: 2, winnerName: 'London Organix', entryName: 'Poochie’s Papaya' },
  { eventId: 'htc-bcn-2024w', category: 'Rosin', rank: 3, winnerName: 'Secret Society Hash Co.', entryName: 'Not specified' },

  // HashTimes Cup 2025 (Spring, Barcelona)
  { eventId: 'htc-bcn-2025s', category: 'Rosin', rank: 1, winnerName: 'Hightoner', entryName: 'Hawaiian Fruit Market No. 32' },
  { eventId: 'htc-bcn-2025s', category: 'Rosin', rank: 2, winnerName: 'Colombian Exotics', entryName: 'Champana No. 35' },
  { eventId: 'htc-bcn-2025s', category: 'Rosin', rank: 3, winnerName: ['Ceros Farm', 'High Chameleon'], entryName: 'Nectarine OG No. 33' },
  { eventId: 'htc-bcn-2025s', category: 'Dry Sift', rank: 1, winnerName: 'Static Room', entryName: 'Papaya Drip No. 12' },
  { eventId: 'htc-bcn-2025s', category: 'Dry Sift', rank: 2, winnerName: 'Static Room', entryName: 'Nugs420 Yellow Melon No. 18' },
  { eventId: 'htc-bcn-2025s', category: 'Dry Sift', rank: 3, winnerName: 'Nugs420', entryName: 'Yellow Melon No. 18' },
  { eventId: 'htc-bcn-2025s', category: 'Ice-O-Lator', rank: 1, winnerName: 'The Island Pharmacy', entryName: 'Skittlez No. 51' },
  { eventId: 'htc-bcn-2025s', category: 'Ice-O-Lator', rank: 2, winnerName: 'Colombian Exotics', entryName: 'Papaya Pina No. 56' },
  { eventId: 'htc-bcn-2025s', category: 'Ice-O-Lator', rank: 3, winnerName: 'The Island Pharmacy', entryName: 'Zog No. 50' },

  // Mid-Mo Canna Cup 2025
  { eventId: 'mmcc-2025', category: 'Hash', rank: 1, winnerName: 'Smallwood Farms', entryName: 'Rambutan' },
  { eventId: 'mmcc-2025', category: 'Hash', rank: 2, winnerName: 'Robert/Vibe', entryName: 'Sour Diesel' },
  { eventId: 'mmcc-2025', category: 'Hash', rank: 3, winnerName: 'Jonathon M', entryName: 'Blueberry Cupcake' },

  // Mid-Mo Canna Cup 2023
  { eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 1, winnerName: 'Vibe', entryName: 'Mac' },
  { eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 2, winnerName: 'Vibe', entryName: 'Mac Stomper' },
  { eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 3, winnerName: 'Head Change', entryName: 'Banangee Tangee' },

  // High Times Cannabis Cup Massachusetts 2025
  { eventId: 'htcc-ma-2025', category: 'Best Non-Solvent Concentrates', rank: 1, winnerName: 'Harbor House Collective', entryName: 'Aspen OG 90 to 120 Microgram Live Rosin Cold Cure' },
  { eventId: 'htcc-ma-2025', category: 'Best Non-Solvent Concentrates', rank: 2, winnerName: 'Bountiful Farms', entryName: 'Kanty Fume Premium Live Hash Rosin' },
  { eventId: 'htcc-ma-2025', category: 'Best Non-Solvent Concentrates', rank: 3, winnerName: 'Lazy River Products', entryName: 'Dante’s Inferno 8.5 G Butter' },
  { eventId: 'htcc-ma-2025', category: 'Best Solvent Concentrates', rank: 1, winnerName: 'Harbor House Collective', entryName: 'Super Boof with Alberino Number Two Batter' },
  { eventId: 'htcc-ma-2025', category: 'Best Solvent Concentrates', rank: 2, winnerName: 'Crispy Commission Concentrates', entryName: 'Super Delight Live Sugar' },
  { eventId: 'htcc-ma-2025', category: 'Best Solvent Concentrates', rank: 3, winnerName: 'Resonate', entryName: 'Citrus Rush Batter' },

  // Rooster THC Classic 2025
  { eventId: 'rtcc-2025', category: 'Rosin', rank: 1, winnerName: 'Good Trees', entryName: 'Biscotti Chunks' },
  { eventId: 'rtcc-2025', category: 'Rosin', rank: 2, winnerName: 'Floraco Rosin', entryName: 'Swamp Water Fumez 9OU Rosin' },
  { eventId: 'rtcc-2025', category: 'Rosin', rank: 3, winnerName: 'The Green Solution', entryName: 'Amber Live – Bob Hope' },

  // NECANN Cup 2025
  { eventId: 'necann-2025', category: 'Licensed Facility Non-Solvent Concentrate', rank: 1, winnerName: 'Sweetgrass Botanicals', entryName: 'Superboof Live Rosin' },
  { eventId: 'necann-2025', category: 'Licensed Facility Non-Solvent Concentrate', rank: 2, winnerName: 'Bountiful Farms', entryName: 'Water Melons Premium Live Hash Rosin' },
  { eventId: 'necann-2025', category: 'Licensed Facility Non-Solvent Concentrate', rank: 3, winnerName: 'Sun Crafted Cannabis', entryName: 'Sweet Peach – 73M – Live Rosin' },
  { eventId: 'necann-2025', category: 'Licensed Facility Solvent Concentrate', rank: 1, winnerName: 'Crispy Commission Concentrates', entryName: 'Super Delight Live Sugar' },
  { eventId: 'necann-2025', category: 'Licensed Facility Solvent Concentrate', rank: 2, winnerName: 'Regenerative LLC', entryName: 'Tropical Runtz Live Badder' },
  { eventId: 'necann-2025', category: 'Licensed Facility Solvent Concentrate', rank: 3, winnerName: 'Coastal Healing', entryName: 'Lemon Zephyr Cured' },

  // New Mexico Legacy Cup 2025
  { eventId: 'nmlc-2025', category: 'Solventless', rank: 1, winnerName: 'Prohibition 37', entryName: 'Wedding Pie' },
  { eventId: 'nmlc-2025', category: 'Solventless', rank: 2, winnerName: 'Hype Boyz Genetics', entryName: 'Hype Breath' },
  { eventId: 'nmlc-2025', category: 'Solventless', rank: 3, winnerName: 'Righteous Herb', entryName: 'Ice Cream Cake' },
  { eventId: 'nmlc-2025', category: 'Concentrates/BHO', rank: 1, winnerName: 'Pecos Valley Production', entryName: 'Unicorn Fartz' },

  // Terp Tower Invitational 2025
  { eventId: 'tti-bcn-2025', category: 'Rosin', rank: 1, winnerName: ['Selva', 'Red Tiger'], entryName: 'Unobtanium' },
  { eventId: 'tti-bcn-2025', category: 'Rosin', rank: 2, winnerName: 'Firehouse', entryName: 'Fruity Joy' },
  { eventId: 'tti-bcn-2025', category: 'Rosin', rank: 3, winnerName: 'Greenardo', entryName: 'Ice Cream Cake' },
  { eventId: 'tti-bcn-2025', category: 'Water Hash', rank: 1, winnerName: ['Selva', 'Red Tiger'], entryName: 'Unobtanium' },
  { eventId: 'tti-bcn-2025', category: 'Water Hash', rank: 2, winnerName: 'Greenardo', entryName: 'Ice Cream Cake' },
  { eventId: 'tti-bcn-2025', category: 'Water Hash', rank: 3, winnerName: 'Weed You', entryName: 'Garlic' },
  
  // High Times Cannabis Cup Missouri 2024
  { eventId: 'htcc-mo-2024', category: 'Concentrates', rank: 1, winnerName: 'Amaze', entryName: 'Amaze Orange Live Rosin' },
  { eventId: 'htcc-mo-2024', category: 'Concentrates', rank: 2, winnerName: 'Elicit', entryName: 'Monopoly Melts by Elicit Plumosa' },
  { eventId: 'htcc-mo-2024', category: 'Concentrates', rank: 3, winnerName: 'Smoky River Cannabis', entryName: 'Smoky River Cannabis Lemon Cookie Rosin' },

  // The Organic Cup Barcelona 2025
  { eventId: 'oc-bcn-2025', category: 'Rosin', rank: 1, winnerName: ['Green Maze Farm', 'Harbey’s'], entryName: 'Cherry Zkittlez x Marmalade' },
  { eventId: 'oc-bcn-2025', category: 'Rosin', rank: 2, winnerName: 'Hightower', entryName: 'Hawaiian Fruit Market' },
  { eventId: 'oc-bcn-2025', category: 'Rosin', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: 'Guapa Pie 2' },
  { eventId: 'oc-bcn-2025', category: 'Full Melt', rank: 1, winnerName: ['Green Maze Farm', 'Harbey’s'], entryName: 'Brandy Wine 2.0' },
  { eventId: 'oc-bcn-2025', category: 'Full Melt', rank: 2, winnerName: 'The Real Cannabis Chris', entryName: 'Guapa Empanada de Piña 22' },
  { eventId: 'oc-bcn-2025', category: 'Full Melt', rank: 3, winnerName: 'Nicolas Nuñez', entryName: 'Tutto Frutta' },
  { eventId: 'oc-bcn-2025', category: 'Traditional Hash', rank: 1, winnerName: 'Stickybuds', entryName: 'Highribo' },
  { eventId: 'oc-bcn-2025', category: 'Traditional Hash', rank: 2, winnerName: 'La Kalada', entryName: '24K x Forbidden Fruit' },
  { eventId: 'oc-bcn-2025', category: 'Traditional Hash', rank: 3, winnerName: ['Gold Green', 'Black Farm'], entryName: 'Black Papaya' },

  // Mother Cup 2025
  { eventId: 'mc-bcn-2025', category: 'Water Hash', rank: 1, winnerName: 'Fire House', entryName: 'Tea Time' },
  { eventId: 'mc-bcn-2025', category: 'Water Hash', rank: 2, winnerName: 'La Kalada', entryName: 'Dolato' },
  { eventId: 'mc-bcn-2025', category: 'Rosin', rank: 1, winnerName: ['We Flowers', 'We Xtract'], entryName: 'GMOZ' },
  { eventId: 'mc-bcn-2025', category: 'Rosin', rank: 2, winnerName: 'Real Deal Resin', entryName: 'Lemon OGZ' },
  { eventId: 'mc-bcn-2025', category: 'Rosin', rank: 3, winnerName: ['Greenmaze Farm', 'Harbey’s Club BCN'], entryName: 'Cherry Zikttlez (Cherry Marmalade x Zkittlez)' },

  // Errl Cup Spring 2025
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent', rank: 1, winnerName: 'Consecrated Farms', entryName: 'Cherry Papayaz' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent', rank: 2, winnerName: 'Kountry Trees', entryName: 'Banana Peel' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent', rank: 3, winnerName: 'Freeland Farms', entryName: 'Hash' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Indica', rank: 1, winnerName: 'Copperstate', entryName: 'Papaya x Pienana' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Indica', rank: 2, winnerName: '22 Red', entryName: 'GCC' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Indica', rank: 3, winnerName: 'Abundant Organics', entryName: 'Ghost of Trinity' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Sativa', rank: 1, winnerName: 'Copperstate', entryName: 'Papaya Superboof' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Hybrid', rank: 1, winnerName: 'Mr. Honey', entryName: 'Honey Banana' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Hybrid', rank: 2, winnerName: 'Copperstate', entryName: 'Pienana x Superboof' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Non-Solvent - Hybrid', rank: 3, winnerName: 'Alien Labs', entryName: 'Atomic Apple' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Indica', rank: 1, winnerName: 'Nugrun', entryName: 'Ice Cream' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Indica', rank: 2, winnerName: 'Uncle X', entryName: 'Papaya Sugar Wax' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Indica', rank: 3, winnerName: 'Mohave Cannabis Co', entryName: 'Gen Z Crumble' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Sativa', rank: 1, winnerName: 'Mohave Cannabis Co', entryName: 'Tiki Breeze Budder' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Sativa', rank: 2, winnerName: 'Hashishans', entryName: 'Applesauce Bitters' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Sativa', rank: 3, winnerName: 'Uncle X', entryName: 'Monkey Junk Sugar Wax' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Hybrid', rank: 1, winnerName: 'High Vibrations', entryName: '99 Limes' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Hybrid', rank: 2, winnerName: 'Nugrun', entryName: 'Gorilla Butter' },
  { eventId: 'errl-spring-2025', category: 'Concentrate - Hybrid', rank: 3, winnerName: '22 Red', entryName: 'Pink Guava' },

  // Arizona Cannabis Awards 2024/2025
  { eventId: 'aca-phx-2025', category: 'Concentrates Brand', rank: 1, winnerName: 'Mohave Cannabis Co', entryName: null },
  { eventId: 'aca-phx-2025', category: 'Concentrates Brand', rank: 2, winnerName: 'Canamo Concentrates', entryName: null },
  { eventId: 'aca-phx-2025', category: 'Concentrates Brand', rank: 3, winnerName: 'Mr. Honey Extracts', entryName: null },

  // Chiang Mai Cannabis Cup (Terps Of Life) 2025
  { eventId: 'cmcc-2025', category: 'Overall', rank: 1, winnerName: 'CannabisNation', entryName: 'Permanent Marker BX1' },
  { eventId: 'cmcc-2025', category: 'Overall', rank: 2, winnerName: 'YASA', entryName: 'Blackout Cherries' },
  { eventId: 'cmcc-2025', category: 'Overall', rank: 3, winnerName: 'CannabisNation', entryName: 'Red Bullz' },


    // High 95 Cannabis Cup 2025
  { eventId: 'h95-2025', category: 'Hash', rank: 'N/A', winnerName: 'Misty’s Melts', entryName: 'Sour Papaya' },
  { eventId: 'h95-2025', category: 'Hash', rank: 'N/A', winnerName: 'Best Friend Farms', entryName: 'Gas Masque' },
  { eventId: 'h95-2025', category: 'Rosin', rank: 'N/A', winnerName: 'Best Friend Farms', entryName: 'Strawberry Smoothie Bandz' },
  { eventId: 'h95-2025', category: 'Terp Indoor', rank: 'N/A', winnerName: 'Uncle Skunky', entryName: 'BTY OG' },
  { eventId: 'h95-2025', category: 'THC Indoor', rank: 'N/A', winnerName: 'The Lone Tree', entryName: 'Triple Burger (GMO BX3)' },

  // Bushido Cup 2025
  { eventId: 'bc-phuket-2025', category: 'Ice-O-Lator', rank: 1, winnerName: 'Authum Sunset', entryName: 'Black Market' },
  { eventId: 'bc-phuket-2025', category: 'Ice-O-Lator', rank: 2, winnerName: ['Levelz', 'Ratcha'], entryName: 'Picasso Moon' },
  { eventId: 'bc-phuket-2025', category: 'Ice-O-Lator', rank: 3, winnerName: 'M.A.G. Farm', entryName: 'Gas Fanta' },
  { eventId: 'bc-phuket-2025', category: 'Rosin', rank: 1, winnerName: 'Chisamui', entryName: 'Melon Burst' },
  { eventId: 'bc-phuket-2025', category: 'Rosin', rank: 2, winnerName: ['Levelz', 'Ratcha'], entryName: 'Ocasso Moon' },
  { eventId: 'bc-phuket-2025', category: 'Rosin', rank: 3, winnerName: 'Boss Lab', entryName: 'Yankiz' },

  // NuWu Cup 2024
  { eventId: 'nwc-2024', category: 'Influencer’s Choice for Best Extract', rank: 1, winnerName: 'CAMP', entryName: 'Dia de los Muertos Live Rosin' },
  { eventId: 'nwc-2024', category: 'Consumer’s Choice for Best Extract', rank: 1, winnerName: 'Mojo', entryName: 'Permanent Marker' },

  // HomeGrown Cup Winter Edition 2024
  { eventId: 'hgc-winter-2024', category: 'Drysift', rank: 1, winnerName: 'Hortizan', entryName: 'NY Trop' },
  { eventId: 'hgc-winter-2024', category: 'Drysift', rank: 1, winnerName: ['Stycky Ycky', 'Hortizan'], entryName: 'Rainbow Grapefruit' },
  { eventId: 'hgc-winter-2024', category: 'Drysift', rank: 2, winnerName: 'Medusa Dabs', entryName: 'Peach Candy X Pink Runtz #22' },
  { eventId: 'hgc-winter-2024', category: 'Drysift', rank: 3, winnerName: 'Deepdownexotics', entryName: 'Pink Z Mix' },
  { eventId: 'hgc-winter-2024', category: 'Ice-O-Lator', rank: 1, winnerName: 'Zmoothiez', entryName: 'Sunset Sherbert Green Pheno' },
  { eventId: 'hgc-winter-2024', category: 'Ice-O-Lator', rank: 2, winnerName: 'Deepdownexotics', entryName: 'Pink RSII' },
  { eventId: 'hgc-winter-2024', category: 'Ice-O-Lator', rank: 3, winnerName: 'Melazas Farm', entryName: 'Tiramisu X Ice Cream Cake' },
  { eventId: 'hgc-winter-2024', category: 'Rosin', rank: 1, winnerName: ['Seedstockers', 'Attention to Terps'], entryName: 'Zmäkdaun' },
  { eventId: 'hgc-winter-2024', category: 'Rosin', rank: 2, winnerName: 'Deepdownexotics', entryName: 'Zowahh X Zunami' },
  { eventId: 'hgc-winter-2024', category: 'Rosin', rank: 3, winnerName: 'Le Mont Brumeux', entryName: 'Chem D. Chem91. Mac' },

 // Cannabis Industrie Awards 2024
  { eventId: 'cia-2024', category: 'Hash of the Year', rank: 1, winnerName: 'Aardachtig', entryName: 'Fuego Loco' },
  
  // Oregon Growers Cup 2024
  { eventId: 'ogc-2024', category: 'BHO', rank: 1, winnerName: 'Doctor Jolly’s', entryName: 'Glue' },
  { eventId: 'ogc-2024', category: 'BHO', rank: 2, winnerName: 'White Label Extracts', entryName: 'GMO Live Sauce' },
  { eventId: 'ogc-2024', category: 'BHO', rank: 3, winnerName: 'Willamette Valley Alchemy', entryName: 'Mint Mango' },
  { eventId: 'ogc-2024', category: 'Hash', rank: 1, winnerName: 'Bonafide Cannabis', entryName: 'Fuji Full Melt' },
  { eventId: 'ogc-2024', category: 'Solventless', rank: 1, winnerName: 'Entourage', entryName: 'Starburst 36' },
  { eventId: 'ogc-2024', category: 'Solventless', rank: 2, winnerName: 'NW Kind', entryName: 'Strawberry Pie' },
  { eventId: 'ogc-2024', category: 'Solventless', rank: 3, winnerName: 'Oregrown', entryName: 'Mr. Nasty' },
  
  // High Times Cannabis Cup Michigan 2024
  { eventId: 'htcc-mi-2024', category: 'Solvent Concentrates', rank: 1, winnerName: ['Cannabee Extracts', 'Real Leaf Solutions'], entryName: 'Lilac Diesel Live Resin Terp Diamonds' },
  { eventId: 'htcc-mi-2024', category: 'Solvent Concentrates', rank: 2, winnerName: 'Dutch Touch Genetics', entryName: 'Space Hippy Nug Run Sugar' },
  { eventId: 'htcc-mi-2024', category: 'Solvent Concentrates', rank: 3, winnerName: ['Cannabee Extracts', 'Old School Organics'], entryName: 'Sugar Cones Live Resin Terp Badder' },
  { eventId: 'htcc-mi-2024', category: 'Non-Solvent Concentrates', rank: 1, winnerName: 'Wojo Wax', entryName: 'Oishii' },
  { eventId: 'htcc-mi-2024', category: 'Non-Solvent Concentrates', rank: 2, winnerName: 'Local Grove', entryName: 'Candy Fumez' },
  { eventId: 'htcc-mi-2024', category: 'Non-Solvent Concentrates', rank: 3, winnerName: ['North Coast', 'Pressure Pack'], entryName: 'Lemon Vuitton' },

  // The Emjays International Cannabis Awards 2024
  { eventId: 'emjays-2024', category: 'Extraction/Concentrate Brand of the Year', rank: 1, winnerName: 'The Clear', entryName: null },

  // Sevilla Cup 2024
  { eventId: 'sevilla-cup-2024', category: 'Dry Sift', rank: 1, winnerName: 'Sticky Glove', entryName: 'Pink Limez' },
  { eventId: 'sevilla-cup-2024', category: 'Dry Sift', rank: 2, winnerName: 'The Coach', entryName: 'Hokuzai' },
  { eventId: 'sevilla-cup-2024', category: 'Dry Sift', rank: 3, winnerName: 'The Coach', entryName: 'Tropicana Cherry' },
  { eventId: 'sevilla-cup-2024', category: 'Ice-O-Lator', rank: 1, winnerName: 'El dorado', entryName: 'Ice Cream Cake' },
  { eventId: 'sevilla-cup-2024', category: 'Ice-O-Lator', rank: 2, winnerName: 'The coach', entryName: 'Ultra Boof' },
  { eventId: 'sevilla-cup-2024', category: 'Ice-O-Lator', rank: 3, winnerName: 'The coach', entryName: 'Vice City' },
  { eventId: 'sevilla-cup-2024', category: 'Rosin', rank: 1, winnerName: ['Le Doc', 'Casa del Fuego'], entryName: 'RS 11' },
  { eventId: 'sevilla-cup-2024', category: 'Rosin', rank: 2, winnerName: 'El Club Verde', entryName: 'Mela Verde' },
  { eventId: 'sevilla-cup-2024', category: 'Rosin', rank: 3, winnerName: ['La Mata Farm', 'Seven Rosin'], entryName: 'Red Sunshine' },
  { eventId: 'sevilla-cup-2024', category: 'CBD Hash', rank: 1, winnerName: 'The CBD Star', entryName: 'Ice Olator' },
  { eventId: 'sevilla-cup-2024', category: 'CBD Hash', rank: 2, winnerName: 'La Catalana Farm', entryName: 'Zkittlez Dry' },
  { eventId: 'sevilla-cup-2024', category: 'CBD Hash', rank: 3, winnerName: 'La Catalana Farm', entryName: 'Casablanca' },

   // Amsterdam Coffeeshop Awards 2024
  { eventId: 'aca-2024', category: 'Traditional Hash', rank: 1, winnerName: 'Coffeeshop Hashtag', entryName: 'Tidghine' },
  { eventId: 'aca-2024', category: 'Traditional Hash', rank: 2, winnerName: 'Coffeeshop Relax', entryName: 'Zero Zero' },
  { eventId: 'aca-2024', category: 'Traditional Hash', rank: 3, winnerName: 'Coffeeshop Relax', entryName: 'Beldia' },
  { eventId: 'aca-2024', category: 'Rosin', rank: 1, winnerName: 'Coffeeshop Hashtag', entryName: 'Peach Oz' },
  { eventId: 'aca-2024', category: 'Rosin', rank: 2, winnerName: 'Barney’s Farm', entryName: 'Candy Fumez' },
  { eventId: 'aca-2024', category: 'Rosin', rank: 3, winnerName: 'Coffeeshop The Old Church', entryName: 'G4' },

  // Taste of Texas Hemp Cup 2024
  { eventId: 'tothc-2024', category: 'Texas Terpene King', rank: 1, winnerName: '@tandtroots', entryName: 'Fresh-Pressed Legendary Platinum OG Rosin' },
  { eventId: 'tothc-2024', category: 'Top Solvent Extract', rank: 1, winnerName: '@greensyndicatehc', entryName: 'Cherry Bomb' },
  { eventId: 'tothc-2024', category: 'Top Solventless Extract', rank: 1, winnerName: '@thehazeconnect', entryName: 'Banana OG' },

  // The Extractors Cup 2024
  { eventId: 'tec-2024', category: 'Overall', rank: 1, winnerName: 'Sub Zero Extracts', entryName: 'Papaya' },
  { eventId: 'tec-2024', category: 'Overall', rank: 2, winnerName: 'BlackLemonLab', entryName: 'Pink Honey #5' },
  { eventId: 'tec-2024', category: 'Overall', rank: 3, winnerName: 'Fat Hash Co', entryName: 'Maple Nector' },

  // Farmers Cup 710 Edition 2024
  { eventId: 'fc-710-2024', category: 'Solvent Dabs', rank: 1, winnerName: 'Arcata Fire', entryName: 'Orange Apricot' },
  { eventId: 'fc-710-2024', category: 'Solvent Dabs', rank: 2, winnerName: 'Errl Hill', entryName: 'Crème Brulee' },
  { eventId: 'fc-710-2024', category: 'Solvent Dabs', rank: 3, winnerName: 'Brother’s Mark', entryName: 'Modified Grape' },
  { eventId: 'fc-710-2024', category: 'Rosin Dabs', rank: 1, winnerName: 'Arcata Fire', entryName: 'GMO Cookies' },
  { eventId: 'fc-710-2024', category: 'Rosin Dabs', rank: 2, winnerName: ['Punch', 'Humboldt Kine'], entryName: 'Grease Bucket' },
  { eventId: 'fc-710-2024', category: 'Rosin Dabs', rank: 3, winnerName: 'Legion of Dank', entryName: 'Terp Wreck' },
  { eventId: 'fc-710-2024', category: 'Homegrow Hash', rank: 'Award', winnerName: 'Hanalei Andre Howard', entryName: 'Orange TurboTax' },
  { eventId: 'fc-710-2024', category: 'Homegrow Rosin', rank: 'Award', winnerName: 'Good Bears', entryName: 'Super Milk' },

  // Michigan Zalympix 2024
  { eventId: 'miz-2024', category: 'Rosin - Best Overall', rank: 1, winnerName: 'Known', entryName: 'White Gummy Bear' },
  { eventId: 'miz-2024', category: 'Rosin - Best Overall', rank: 2, winnerName: ['Organic Mechanic', 'Peninsula Gardens'], entryName: 'Plan Z' },
  { eventId: 'miz-2024', category: 'Rosin - Best Overall', rank: 3, winnerName: 'Rkive', entryName: 'Sudzorange Mintz' },
  { eventId: 'miz-2024', category: 'Rosin - Best Tasting', rank: 1, winnerName: ['Organic Mechanic', 'Peninsula Gardens'], entryName: 'Plan Z' },
  { eventId: 'miz-2024', category: 'Rosin - Best Tasting', rank: 2, winnerName: 'Known', entryName: 'White Gummy Bear' },
  { eventId: 'miz-2024', category: 'Rosin - Best Tasting', rank: 3, winnerName: 'Rkive', entryName: 'Sudzorange Mintz' },
  { eventId: 'miz-2024', category: 'Rosin - Best Terps', rank: 1, winnerName: ['Element', 'Tip Top Crop'], entryName: 'Space Guavaz' },
  { eventId: 'miz-2024', category: 'Rosin - Best Terps', rank: 2, winnerName: 'Known', entryName: 'White Gummy Bear' },
  { eventId: 'miz-2024', category: 'Rosin - Best Terps', rank: 3, winnerName: 'Rkive', entryName: 'Sudzorange Mintz' },
  { eventId: 'miz-2024', category: 'Rosin - Best Looking', rank: 1, winnerName: 'North Coast', entryName: 'Lemon Vuitton' },
  { eventId: 'miz-2024', category: 'Rosin - Heaviest Hitting', rank: 1, winnerName: ['Eastside Alchemy', 'Matty B Stackers'], entryName: 'Permanent Marker' },
  { eventId: 'miz-2024', category: 'Rosin - Gassiest', rank: 1, winnerName: ['Element', 'Tip Top Crop'], entryName: 'Space Guavaz' },

  // Spannabis Champions Cup Bilbao 2024
  { eventId: 'scc-bilbao-2024', category: 'Hash', rank: 1, winnerName: 'Alde Zarra Elkartea', entryName: 'Caviar Sour Lime #10' },
  { eventId: 'scc-bilbao-2024', category: 'Hash', rank: 2, winnerName: 'Zurefarm', entryName: 'Luna' },
  { eventId: 'scc-bilbao-2024', category: 'Hash', rank: 3, winnerName: 'Zuki Farm', entryName: '11Bananax' },
  { eventId: 'scc-bilbao-2024', category: 'Rosin', rank: 1, winnerName: 'Frosty Hash Genetics', entryName: 'Zkittlez' },
  { eventId: 'scc-bilbao-2024', category: 'Rosin', rank: 2, winnerName: 'We Flowers', entryName: 'Live Rosin G-Joy' },
  { eventId: 'scc-bilbao-2024', category: 'Rosin', rank: 3, winnerName: 'Zuki Farm', entryName: '11Bananax' },

  // Clio Cultivators Cup 2024
  { eventId: 'ccc-mi-2024', category: 'Concentrate', rank: 1, winnerName: 'S.O.B.', entryName: 'Super Boof x Guava Tangie Thumbprint' },
  { eventId: 'ccc-mi-2024', category: 'Concentrate', rank: 2, winnerName: 'Dank Dakk Meds', entryName: 'Juicy Fruit' },
  { eventId: 'ccc-mi-2024', category: 'Concentrate', rank: 3, winnerName: 'Buzzy Bee Farms', entryName: 'Sunny D x Raspberry Boogie' },

 // Legacy Cup V 2024
  { eventId: 'legacy-cup-v', category: 'Solventless Concentrate', rank: 1, winnerName: 'Happy’s Headstash', entryName: 'Rainbow Guava #5' },
  { eventId: 'legacy-cup-v', category: 'Solventless Concentrate', rank: 2, winnerName: 'Grind.Smoke.Repeat', entryName: 'Old School Blueberry' },
  { eventId: 'legacy-cup-v', category: 'Solventless Concentrate', rank: 3, winnerName: 'BubbaKush', entryName: 'Mind Melter (SolFire)' },
  { eventId: 'legacy-cup-v', category: 'Solventless Rosin', rank: 1, winnerName: 'Sweatingterpsmn', entryName: 'Swampwater Fumez' },
  { eventId: 'legacy-cup-v', category: 'Solventless Rosin', rank: 2, winnerName: 'Hashmonster Solventless', entryName: 'Truffle Cake' },
  { eventId: 'legacy-cup-v', category: 'Solventless Rosin', rank: 3, winnerName: 'Ivy League Co', entryName: 'Jelly Donutz' },

  // Missouri Growers Cup 2024
  { eventId: 'mogc-2024', category: 'BHO', rank: 1, winnerName: 'Dabstract', entryName: 'Guava Slushy Live Resin Terp Sugar' },
  { eventId: 'mogc-2024', category: 'BHO', rank: 2, winnerName: 'Standard Wellness', entryName: 'Sunset MAC' },
  { eventId: 'mogc-2024', category: 'BHO', rank: 3, winnerName: ['SMOKEY RIVER', 'BESAME'], entryName: 'Cherry Death Star Diamond & Sauce' },
  { eventId: 'mogc-2024', category: 'Rosin', rank: 1, winnerName: 'Standard Wellness', entryName: 'Garlic Cookies' },
  { eventId: 'mogc-2024', category: 'Rosin', rank: 2, winnerName: 'Cannabis Inc. (LIRO)', entryName: 'Limoncello' },
  { eventId: 'mogc-2024', category: 'Rosin', rank: 3, winnerName: ['SMOKEY RIVER', 'BESAME'], entryName: 'Papa Burger' },

  // Jack Herer Cup 2024 - Holland
  { eventId: 'jhc-nl-2024', category: 'Best Rosin', rank: 1, winnerName: '@lemistralcoffeeshopbackup', entryName: null },

  // HomeGrown Cup Weekender 2024
  { eventId: 'hgc-weekender-2024', category: 'Dry Sift', rank: 1, winnerName: 'La Chanvière', entryName: 'Sunsetz' },
  { eventId: 'hgc-weekender-2024', category: 'Dry Sift', rank: 2, winnerName: 'Caramelt', entryName: 'Banana God v2' },
  { eventId: 'hgc-weekender-2024', category: 'Dry Sift', rank: 3, winnerName: ['Oldfarmer', 'Subsea Exotics'], entryName: 'Farmers Delight' },
  { eventId: 'hgc-weekender-2024', category: 'Ice-O-Lator', rank: 1, winnerName: 'La Chanvière', entryName: 'Sunsetz' },
  { eventId: 'hgc-weekender-2024', category: 'Ice-O-Lator', rank: 2, winnerName: 'Trichome Science', entryName: 'Seriotica Blend' },
  { eventId: 'hgc-weekender-2024', category: 'Ice-O-Lator', rank: 3, winnerName: 'Small Batch Melts', entryName: 'Strawberry Candy' },
  { eventId: 'hgc-weekender-2024', category: 'Rosin', rank: 1, winnerName: 'La Chanvière', entryName: 'Sunsetz' },
  { eventId: 'hgc-weekender-2024', category: 'Rosin', rank: 2, winnerName: 'Trichome Science', entryName: 'Seriotica Blend' },
  { eventId: 'hgc-weekender-2024', category: 'Rosin', rank: 3, winnerName: 'Cubes710', entryName: 'Tropi Lemon Z Live 90u' },

  // Copa Chami 2024
  { eventId: 'copa-chami-2024', category: 'Mejor Rosin', rank: 1, winnerName: 'Tomi Becerra (San Luis)', entryName: 'Tanex × Sublimator F2' },
  { eventId: 'copa-chami-2024', category: 'Mejor Rosin', rank: 2, winnerName: 'Jorge Fuentes (Chamical)', entryName: 'Sugar Black Rose' },
  { eventId: 'copa-chami-2024', category: 'Mejor Rosin', rank: 3, winnerName: 'Tarzan (San Juan)', entryName: 'Dosydos' },
  { eventId: 'copa-chami-2024', category: 'Mejor Live Rosin', rank: 1, winnerName: 'Naesa (Buenos Aires)', entryName: 'Apple and Banana' },
  { eventId: 'copa-chami-2024', category: 'Mejor Live Rosin', rank: 2, winnerName: 'H. Salvatierra (Salta)', entryName: 'Eli' },
  { eventId: 'copa-chami-2024', category: 'Mejor Live Rosin', rank: 3, winnerName: 'Agustín P (Córdoba)', entryName: 'Zaza #5' },
  { eventId: 'copa-chami-2024', category: 'Mejor B.H.O', rank: 1, winnerName: 'Chapi (Merlo)', entryName: 'Orange’s Bear' },
  { eventId: 'copa-chami-2024', category: 'Mejor B.H.O', rank: 2, winnerName: 'Waxxi (Córdoba)', entryName: 'Petroleum' },
  { eventId: 'copa-chami-2024', category: 'Mejor B.H.O', rank: 3, winnerName: 'Waxxi (Córdoba)', entryName: 'Tahoe' },

  // Jack Herer Cup Germany 2024
  { eventId: 'jhc-de-2024', category: 'Rosin', rank: 1, winnerName: 'La Kalada', entryName: 'Z-PUNCH' },
  { eventId: 'jhc-de-2024', category: 'Rosin', rank: 2, winnerName: 'La Kalada', entryName: 'MELAVERDE' },
  { eventId: 'jhc-de-2024', category: 'Rosin', rank: 3, winnerName: 'MG Farms 420', entryName: 'PURE MANDARIN BOMB' },
  { eventId: 'jhc-de-2024', category: 'Traditional Hash', rank: 1, winnerName: null, entryName: 'HIA' },
  { eventId: 'jhc-de-2024', category: 'Traditional Hash', rank: 2, winnerName: null, entryName: 'GALAXY PRIMERA' },
  { eventId: 'jhc-de-2024', category: 'Traditional Hash', rank: 3, winnerName: null, entryName: 'NEUS VAN DE ZALM' },  

  // Hash Bash Cup 4 (2024)
  { eventId: 'hbc-me-2024', category: 'Podium', rank: 1, winnerName: 'JAR CO.', entryName: 'Devil Driver' },
  { eventId: 'hbc-me-2024', category: 'Podium', rank: 2, winnerName: 'FIVE POINTS FARM', entryName: 'Riptide Rush' },
  { eventId: 'hbc-me-2024', category: 'Podium', rank: 3, winnerName: 'HAZY HILL FARM', entryName: 'Bluth’s Bananas' },
  { eventId: 'hbc-me-2024', category: 'Brigid Staff Choice', rank: 'Award', winnerName: 'JAR CO.', entryName: 'Devil Driver' },

  // Jack Herer Cup Germany 2023
  { eventId: 'jhc-de-2023', category: 'Best Import Hash', rank: 1, winnerName: 'The Box', entryName: 'Mandarin Sorbet' },
  { eventId: 'jhc-de-2023', category: 'Best Import Hash', rank: 2, winnerName: 'Take Away Harlem', entryName: 'Tahamint' },
  { eventId: 'jhc-de-2023', category: 'Best Import Hash', rank: 3, winnerName: 'Le Mistral', entryName: 'Beldia Gold' },
  { eventId: 'jhc-de-2023', category: 'Best Solventless Extract', rank: 1, winnerName: 'The Coffeeshops.com', entryName: 'Rafikis Fruit' },
  { eventId: 'jhc-de-2023', category: 'Best Solventless Extract', rank: 2, winnerName: 'Ex-Tractor', entryName: 'Blue Kushy x Mac' },
  { eventId: 'jhc-de-2023', category: 'Best Solventless Extract', rank: 3, winnerName: 'Cremers', entryName: 'LA Kush Cake' },

  // Jack Herer Cup Amsterdam 2020
  { eventId: 'jhc-ams-2020', category: 'Best Import Hash', rank: 1, winnerName: 'Le Mistral', entryName: 'Beldia' },
  { eventId: 'jhc-ams-2020', category: 'Best Import Hash', rank: 2, winnerName: 'Waterworld', entryName: 'Heya' },
  { eventId: 'jhc-ams-2020', category: 'Best Import Hash', rank: 3, winnerName: 'GreenHouse Secret Farmers', entryName: 'Super Hia' },
  { eventId: 'jhc-ams-2020', category: 'Best Neder Hash', rank: 1, winnerName: 'Relax', entryName: 'Relax Balls' },
  { eventId: 'jhc-ams-2020', category: 'Best Neder Hash', rank: 2, winnerName: 'The Corner', entryName: 'Layer Cake' },
  { eventId: 'jhc-ams-2020', category: 'Best Neder Hash', rank: 3, winnerName: 'The Corner', entryName: 'Corner String' },
  { eventId: 'jhc-ams-2020', category: 'Best Extract', rank: 1, winnerName: 'Family First', entryName: 'Pink Lychee Wet Butter' },
  { eventId: 'jhc-ams-2020', category: 'Best Extract', rank: 2, winnerName: 'Jank’s Indian Club', entryName: 'Flock of Birds' },
  { eventId: 'jhc-ams-2020', category: 'Best Extract', rank: 3, winnerName: 'Family First', entryName: 'Magnun Opus Wet Butter' },
  { eventId: 'jhc-ams-2020', category: 'Best Int. Solventless Extract', rank: 1, winnerName: 'GreenHouse Secret Farmers', entryName: 'Cheese Dawg' },
  { eventId: 'jhc-ams-2020', category: 'Best Int. Solventless Extract', rank: 2, winnerName: 'Johnny Dabb', entryName: 'Scotts OG Cold Cure Hash Rosin' },
  { eventId: 'jhc-ams-2020', category: 'Best Int. Solventless Extract', rank: 3, winnerName: 'Dr. Duc Grow', entryName: 'Marley’s Collie' },

  // Jack Herer Cup Amsterdam 2019
  { eventId: 'jhc-ams-2019', category: 'Best Import Hash', rank: 1, winnerName: 'Dampkring', entryName: 'NIQA Original' },
  { eventId: 'jhc-ams-2019', category: 'Best Import Hash', rank: 2, winnerName: 'Papillon', entryName: 'Cream' },
  { eventId: 'jhc-ams-2019', category: 'Best Import Hash', rank: 3, winnerName: 'Catch 33', entryName: 'Zero Zero' },
  { eventId: 'jhc-ams-2019', category: 'Best Neder Hash', rank: 1, winnerName: 'Family First', entryName: 'Zkittlez Wax' },
  { eventId: 'jhc-ams-2019', category: 'Best Neder Hash', rank: 2, winnerName: 'Original Dampkring', entryName: 'OG Slugger' },
  { eventId: 'jhc-ams-2019', category: 'Best Neder Hash', rank: 3, winnerName: 'Easy Times', entryName: 'Kosher Kush Ice' },

  // Highlife Cup 2024
  { eventId: 'hlc-2024', category: 'Old School Hash', rank: 1, winnerName: 'Coffeeshop Magic (Den Haag)', entryName: 'Shaher Beldia' },
  { eventId: 'hlc-2024', category: 'Old School Hash', rank: 2, winnerName: 'Cremers (Den Haag)', entryName: 'Hia Blond' },
  { eventId: 'hlc-2024', category: 'Old School Hash', rank: 3, winnerName: 'Genesis (Geleen)', entryName: 'Beldia Old Skool Hasj' },
  { eventId: 'hlc-2024', category: 'Modern Hash', rank: 1, winnerName: 'Coffeeshop Solo (Amsterdam)', entryName: 'Wedding Cookies' },
  { eventId: 'hlc-2024', category: 'Modern Hash', rank: 2, winnerName: 'Dizzy Duck (Den Haag)', entryName: 'Static Living Soil Tropicana Cookies' },
  { eventId: 'hlc-2024', category: 'Modern Hash', rank: 3, winnerName: 'High Society (Leiden)', entryName: 'Dry Shift Kosher Kush' },
  { eventId: 'hlc-2024', category: 'House Favorite Hash', rank: 1, winnerName: 'Dizzy Duck (Den Haag)', entryName: 'Forbidden Joy 904 The Hash Valley' },
  { eventId: 'hlc-2024', category: 'House Favorite Hash', rank: 2, winnerName: 'Coffeeshop Solo (Amsterdam)', entryName: 'Do-si-Dos' },
  { eventId: 'hlc-2024', category: 'House Favorite Hash', rank: 3, winnerName: 'Coffeeshop Hashtag (Amsterdam)', entryName: 'RS11' },
  { eventId: 'hlc-2024', category: 'Hash Special', rank: 1, winnerName: 'Coffeeshop Fly (Den Haag)', entryName: 'Holy Cream' },
  { eventId: 'hlc-2024', category: 'Hash Special', rank: 2, winnerName: 'Cremers (Den Haag)', entryName: 'Bacio Cake' },
  { eventId: 'hlc-2024', category: 'Hash Special', rank: 3, winnerName: 'Dizzy Duck (Den Haag)', entryName: 'Fresh Frozen Papaya Power by ZmoothieZ' },
  { eventId: 'hlc-2024', category: 'Hash Overall Winner', rank: 1, winnerName: 'Coffeeshop Solo (Amsterdam)', entryName: 'Wedding Cookies' },
  { eventId: 'hlc-2024', category: 'Potency Cup Hash Winner', rank: 1, winnerName: 'Cremers (Den Haag)', entryName: 'Bacio Cake' },
  
  // IC 420 Cup 2024
  { eventId: 'ic420-2024', category: 'Rosin', rank: 1, winnerName: 'We Flowers', entryName: 'I am not your Princess' },
  { eventId: 'ic420-2024', category: 'Rosin', rank: 2, winnerName: 'The Roomkiler', entryName: 'Barbarissima' },
  { eventId: 'ic420-2024', category: 'Rosin', rank: 3, winnerName: 'Hash Theory', entryName: 'Z Road' },
  { eventId: 'ic420-2024', category: 'Hash', rank: 1, winnerName: 'Greenmazefarm', entryName: 'Brandy Wine 2.0' },
  { eventId: 'ic420-2024', category: 'Hash', rank: 2, winnerName: ['We Flowers', 'Mr Rushi'], entryName: 'Peach in Lime' },
  { eventId: 'ic420-2024', category: 'Hash', rank: 3, winnerName: 'Roolab', entryName: 'Sunset Gas' },

  // Rooster THC Classic 2024
{ eventId: 'rtcc-2024', category: 'Rosin', rank: 1, winnerName: ['Verde Natural', 'Dablogic'], entryName: '90µMicron Live Rosin – Rainbow Belts 3.0' },
  { eventId: 'rtcc-2024', category: 'Rosin', rank: 2, winnerName: 'Äkta', entryName: 'Early Riser – Cold Cure Live Rosin' },
  { eventId: 'rtcc-2024', category: 'Rosin', rank: 3, winnerName: 'Snaxland', entryName: 'Blame Canada' },
  { eventId: 'rtcc-2024', category: 'Solventless Vape', rank: 1, winnerName: 'Sunshine', entryName: 'Pink Zugar 90u Rosin Cart' },
  { eventId: 'rtcc-2024', category: 'Solventless Vape', rank: 2, winnerName: ['Verde Natural', 'Dablogic'], entryName: '90 Micron Live Rosin Premier Vape – Kiwi Comet' },
  { eventId: 'rtcc-2024', category: 'Solventless Vape', rank: 3, winnerName: 'Äkta', entryName: 'Hard Lemonade – Live Rosin Vape' },

  // Essie Awards 2024
  { eventId: 'essie-2024', category: 'Best Cartridge Live Rosin', rank: 1, winnerName: ['Nero', 'Pharmers Quality Concentrates'], entryName: 'Gorilla Treats' },
  { eventId: 'essie-2024', category: 'Best Cartridge Live Rosin', rank: 2, winnerName: ['Olio', 'Sandia Botanicals'], entryName: 'Moonshine Slurri' },
  { eventId: 'essie-2024', category: 'Best Cartridge Live Rosin', rank: 3, winnerName: 'Dime Industries', entryName: 'Jet Fuel' },
  { eventId: 'essie-2024', category: 'Best Hash (Ice Water/Bubble)', rank: 1, winnerName: 'Olio', entryName: 'SOUR CANE' },
  { eventId: 'essie-2024', category: 'Best Hash (Ice Water/Bubble)', rank: 2, winnerName: 'Olio', entryName: 'Ice Cream Cake' },
  { eventId: 'essie-2024', category: 'Best Hash (Ice Water/Bubble)', rank: 3, winnerName: 'Prohibition 37', entryName: 'Sacred Sour' },
  { eventId: 'essie-2024', category: 'Best Caviar/Terp Sauce', rank: 1, winnerName: ['Olio', 'Gasd Up Exotics'], entryName: 'Lemon Tree' },
  { eventId: 'essie-2024', category: 'Best Caviar/Terp Sauce', rank: 2, winnerName: 'Elevated', entryName: 'Truffle Treats' },
  { eventId: 'essie-2024', category: 'Best Caviar/Terp Sauce', rank: 3, winnerName: ['Discount Dabs', 'GH Labs'], entryName: 'White Truffle Sugar' },
  { eventId: 'essie-2024', category: 'Best Diamonds', rank: 1, winnerName: 'Herbal Edibles & Extracts', entryName: 'Kandy Kush' },
  { eventId: 'essie-2024', category: 'Best Diamonds', rank: 2, winnerName: 'Manana', entryName: 'Trop Cherry Live Diamonds' },
  { eventId: 'essie-2024', category: 'Best Diamonds', rank: 3, winnerName: ['Pharmers Quality Concentrates', 'Daft'], entryName: 'Lemon OG' },
  { eventId: 'essie-2024', category: 'Best Live Resin', rank: 1, winnerName: 'Olio', entryName: 'Cherry Punch' },
  { eventId: 'essie-2024', category: 'Best Live Resin', rank: 2, winnerName: 'Elevated', entryName: 'Golden Goat' },
{ eventId: 'essie-2024', category: 'Best Live Resin', rank: 3, winnerName: ['Pharmers Quality Concentrates', 'Sandia Botanicals'], entryName: 'Mod Grapes' },
  { eventId: 'essie-2024', category: 'Best Live Rosin', rank: 1, winnerName: 'Carver Family Farms', entryName: 'Mendocaine' },
  { eventId: 'essie-2024', category: 'Best Live Rosin', rank: 2, winnerName: ['Olio', 'Gasd Up Exotics'], entryName: 'Chem De LA Chem' },
  { eventId: 'essie-2024', category: 'Best Live Rosin', rank: 3, winnerName: ['Gold Lotus', 'Gold Fish Farms'], entryName: 'Purple Marmalade' },
  { eventId: 'essie-2024', category: 'Best Live Rosin Jam', rank: 1, winnerName: ['Alabastra', 'New Mexico High Grade'], entryName: 'Toronja' },
  { eventId: 'essie-2024', category: 'Best Live Rosin Jam', rank: 2, winnerName: 'Olio', entryName: 'Modified Grapes' },
  { eventId: 'essie-2024', category: 'Best Live Rosin Jam', rank: 3, winnerName: 'Harvest Foundation', entryName: 'Grape 33' },
  { eventId: 'essie-2024', category: 'Best Specialty Extract', rank: 1, winnerName: 'Urban Wellness', entryName: 'Strawnana' },

  // Womens Canna Awards 2024
  { eventId: 'wca-2024', category: 'Concentrate', rank: 1, winnerName: 'Punch Extracts', entryName: 'Whitehorn Rose Half & Half Rosin' },
  
  // The Organic Cup 2024
{ eventId: 'oc-bcn-2024', category: 'Hashish', rank: 1, winnerName: ['Weed You', 'Omnia'], entryName: 'Maracuja' },
{ eventId: 'oc-bcn-2024', category: 'Hashish', rank: 2, winnerName: ['Weed You', 'Omnia'], entryName: 'Orange Groovy BX' },
  { eventId: 'oc-bcn-2024', category: 'Hashish', rank: 3, winnerName: 'One Love Breeder', entryName: 'Potito' },
  { eventId: 'oc-bcn-2024', category: 'Rosin', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'Dulce de Fresca' },
  { eventId: 'oc-bcn-2024', category: 'Rosin', rank: 2, winnerName: 'Raiders of the Lost Terps', entryName: 'F2 Zkittlez X Banana Punch' },
  { eventId: 'oc-bcn-2024', category: 'Rosin', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: 'Wild Cherry' },
  { eventId: 'oc-bcn-2024', category: 'Full Melt', rank: 1, winnerName: 'Fire House Barcelona', entryName: 'Forbidden Blueprint' },
  { eventId: 'oc-bcn-2024', category: 'Full Melt', rank: 2, winnerName: ['Weed You', 'Dochazed'], entryName: 'Dosi Papaya' },
  { eventId: 'oc-bcn-2024', category: 'Full Melt', rank: 3, winnerName: 'French Touch Seeds', entryName: 'Dee Dee' },

  // Errl Cup 2024
  { eventId: 'errl-spring-2024', category: 'Non-Solvent', rank: 1, winnerName: 'High Kountry Consulting', entryName: 'Banana Wrecker' },
  { eventId: 'errl-spring-2024', category: 'Non-Solvent', rank: 2, winnerName: 'Crucial', entryName: 'Moonwalker Kush' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Indica', rank: 1, winnerName: 'Aeriz', entryName: 'Krypt Walker LR Sugar' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Indica', rank: 2, winnerName: 'Hashishans', entryName: 'Cotton Candy Cookies LR' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Indica', rank: 3, winnerName: 'Shango', entryName: 'Wedding Pie' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Sativa', rank: 1, winnerName: 'Mohave Cannabis Co', entryName: 'Blue Dream Sugar' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Sativa', rank: 2, winnerName: 'Aeriz', entryName: 'Upnorth NFI LR Sugar' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Sativa', rank: 3, winnerName: 'Mozey', entryName: 'Raspberry Cough Badder' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Hybrid', rank: 1, winnerName: 'Hashishans', entryName: 'Garlic Fusion X Full Send LR' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Hybrid', rank: 2, winnerName: 'Mohave Cannabis Co', entryName: 'Pure Michigan' },
  { eventId: 'errl-spring-2024', category: 'Concentrate Hybrid', rank: 3, winnerName: 'Amber', entryName: 'Ghost Train Haze LR' },

  // Spannabis Champions Cup BCN 2024
  { eventId: 'scc-bcn-2024', category: 'Hash', rank: 1, winnerName: 'Zurefarm CSC', entryName: 'Bananaz' },
  { eventId: 'scc-bcn-2024', category: 'Hash', rank: 2, winnerName: 'GWA Social Club', entryName: 'Rapple X Ozk Blend' },
  { eventId: 'scc-bcn-2024', category: 'Hash', rank: 3, winnerName: 'We Flowers', entryName: 'Peach ‘N Lime' },
  { eventId: 'scc-bcn-2024', category: 'Rosin', rank: 1, winnerName: 'Frosty Hash', entryName: 'Zkittlez' },
  { eventId: 'scc-bcn-2024', category: 'Rosin', rank: 2, winnerName: 'Brothers In Farm Growshop', entryName: 'Z-Lime' },
  { eventId: 'scc-bcn-2024', category: 'Rosin', rank: 3, winnerName: 'Slite23', entryName: 'Grape Gas' },

  // High 95 Cup 2024
  { eventId: 'h95-2024', category: 'Hash', rank: 1, winnerName: 'Misty’s Melts', entryName: 'Sour Papaya' },
  { eventId: 'h95-2024', category: 'Rosin', rank: 1, winnerName: 'Best Friend Farms', entryName: 'Strawberry Smoothie Bandz' },
  { eventId: 'h95-2024', category: 'Solvent', rank: 1, winnerName: 'Golden Road Extracts', entryName: 'White Diamonds' },

  // 2nd Annual Chiang Mai Cannabis Cup
  { eventId: 'cmcc-2nd', category: 'Best Hash', rank: 1, winnerName: 'Farm Indus', entryName: 'White Widow' },
  { eventId: 'cmcc-2nd', category: 'Best Dab', rank: 1, winnerName: 'Recreational Rosin', entryName: 'Mac 1 Rosin' },

  // 3rd Annual NuWu Cup 2023
  { eventId: 'nwc-2023', category: 'Best Extract', rank: 1, winnerName: 'STIIIZY', entryName: 'Grape Soda Live Rosin Budder' },

  // Copa Cannabica Farallones 2023
  { eventId: 'ccf-2023', category: 'Extracts without Solvents', rank: 1, winnerName: ['Yerbasy Haze', 'RosinBeat'], entryName: 'Grape Gas (Fresh Frozen)' },
  { eventId: 'ccf-2023', category: 'Extracts without Solvents', rank: 2, winnerName: ['Oscar Benavides', 'Compound Genetics'], entryName: 'MarshmallowOG (Live Rosin)' },

  // 9th Oregon Cannabis Growers Cup 2023
  { eventId: 'ogc-2023', category: 'Solventless', rank: 1, winnerName: 'Terpdoh', entryName: 'Sonic Strawberries' },
  { eventId: 'ogc-2023', category: 'Solventless', rank: 2, winnerName: 'Whale Oil Extracts', entryName: 'Sherbert' },
  { eventId: 'ogc-2023', category: 'Solventless', rank: 3, winnerName: 'Decibel Farms', entryName: 'Bussin Muffins' },
  { eventId: 'ogc-2023', category: 'BHO', rank: 1, winnerName: ['Dr Jolly’s', 'Happy Healing'], entryName: 'Blood Orange Amethyst' },
  { eventId: 'ogc-2023', category: 'BHO', rank: 2, winnerName: 'White Label Extracts', entryName: 'Donkey Butter' },
  { eventId: 'ogc-2023', category: 'BHO', rank: 3, winnerName: 'Entourage', entryName: 'Pave' },
  { eventId: 'ogc-2023', category: 'CBD Concentrate', rank: 1, winnerName: 'Concentrate Group', entryName: 'Blue Afgoo' },  

  // Kurple Kup & Uncle Stoner Approved Squash Off 2023
  { eventId: 'kurple-kup-2023', category: 'Uncle Stoner Approved Squash Off', rank: 1, winnerName: '@505grower', entryName: 'Zoap' },
  { eventId: 'kurple-kup-2023', category: 'Uncle Stoner Approved Squash Off', rank: 2, winnerName: '@hvst.m', entryName: 'White Rainbow' },
  { eventId: 'kurple-kup-2023', category: 'Uncle Stoner Approved Squash Off', rank: 3, winnerName: '@dipresent', entryName: 'Kataract Kush' },

  // Sevilla Cup 2023
  { eventId: 'sevilla-cup-2023', category: 'Dry Sift', rank: 1, winnerName: 'Liu Extracts', entryName: 'Static Jealousy Mints' },
  { eventId: 'sevilla-cup-2023', category: 'Dry Sift', rank: 2, winnerName: 'Liu Extracts', entryName: 'Static Cereal Milk' },
  { eventId: 'sevilla-cup-2023', category: 'Dry Sift', rank: 3, winnerName: 'Bask Triangle Farm', entryName: 'Tropikanna Cherry' },
  { eventId: 'sevilla-cup-2023', category: 'Ice-O-Lator', rank: 1, winnerName: 'Zurefarm', entryName: 'Samoas' },
  { eventId: 'sevilla-cup-2023', category: 'Ice-O-Lator', rank: 2, winnerName: 'Casa Del Fuego', entryName: 'Forbidden Fruit' },
  { eventId: 'sevilla-cup-2023', category: 'Ice-O-Lator', rank: 3, winnerName: 'Fum Dens', entryName: 'Tropicali #7' },
  { eventId: 'sevilla-cup-2023', category: 'Flower Rosin', rank: 1, winnerName: 'Green VB', entryName: 'Goji Dawg x Birthday' },
  { eventId: 'sevilla-cup-2023', category: 'Flower Rosin', rank: 2, winnerName: 'Valhalla', entryName: 'K-Mintz' },
  { eventId: 'sevilla-cup-2023', category: 'Flower Rosin', rank: 3, winnerName: 'Tosterp', entryName: 'Sugar' },
  { eventId: 'sevilla-cup-2023', category: 'Hash Rosin', rank: 1, winnerName: 'Zurefarm', entryName: 'Bananaz' },
  { eventId: 'sevilla-cup-2023', category: 'Hash Rosin', rank: 2, winnerName: 'Casa Del Fuego', entryName: 'GMO' },
  { eventId: 'sevilla-cup-2023', category: 'Hash Rosin', rank: 3, winnerName: 'Eldorado', entryName: 'Hokuzai' },
  { eventId: 'sevilla-cup-2023', category: 'CBD Hash', rank: 1, winnerName: 'The CBD Star', entryName: 'Burbuka Cream' },
  { eventId: 'sevilla-cup-2023', category: 'CBD Hash', rank: 2, winnerName: 'La Catalana CBD', entryName: 'Black Berry' },
  { eventId: 'sevilla-cup-2023', category: 'CBD Hash', rank: 3, winnerName: 'The CBD Star', entryName: 'Lemon CBD Star' },

  // High 95 Cup 2023
  { eventId: 'h95-2023', category: 'Hash', rank: 1, winnerName: 'Hazy Hill Farm', entryName: 'Road Rage' },
  { eventId: 'h95-2023', category: 'Hash', rank: 2, winnerName: 'Hazy Hill Farm', entryName: 'Rainbow Belts' },
  { eventId: 'h95-2023', category: 'Hash', rank: 3, winnerName: 'Best Friend Farms', entryName: '207 headband' },
  { eventId: 'h95-2023', category: 'Rosin', rank: 1, winnerName: 'Best Friend Farms', entryName: 'Grape zmuckerzz #2' },
  { eventId: 'h95-2023', category: 'Rosin', rank: 2, winnerName: 'High Striker Farm', entryName: 'Papaya' },
  { eventId: 'h95-2023', category: 'Rosin', rank: 3, winnerName: 'Black Bog Farm', entryName: 'Fruity Child' },
  { eventId: 'h95-2023', category: 'Solvent', rank: 1, winnerName: 'Right coast reserve', entryName: 'Grape ice' },
  { eventId: 'h95-2023', category: 'Solvent', rank: 2, winnerName: 'Ripple Wellness', entryName: 'Dozi-zo’z Live Resin' },
  { eventId: 'h95-2023', category: 'Solvent', rank: 3, winnerName: 'Ripple wellness', entryName: 'Papaya Cake Live resin' },

  // Copa Cannabica México 2023
  { eventId: 'ccm-2023', category: 'Rosin', rank: 1, winnerName: 'El Tio 710', entryName: 'white russian' },
  { eventId: 'ccm-2023', category: 'Hash', rank: 1, winnerName: 'Kush Brothers', entryName: 'ALL STARS' },
  { eventId: 'ccm-2023', category: 'BHO', rank: 1, winnerName: ['OG-Xtracts', 'The High Company'], entryName: 'Super Boof' },

  // NECANN Canna Cup Maine 2023
  { eventId: 'necann-me-2023', category: 'Non Solvent Concentrate', rank: 1, winnerName: 'Grind Cannabis Co', entryName: 'Guava Icee #3' },
  { eventId: 'necann-me-2023', category: 'Non Solvent Concentrate', rank: 2, winnerName: 'Monkey Jones', entryName: 'OG Kush Breath' },
  { eventId: 'necann-me-2023', category: 'Non Solvent Concentrate', rank: 3, winnerName: 'Pamo Lab', entryName: 'Fizbo Live Rosin' },
  { eventId: 'necann-me-2023', category: 'Solvent Concentrate', rank: 1, winnerName: ['Seaweed Co', 'Right Coast Reserve'], entryName: 'Grape Ice Cured Resin' },
  { eventId: 'necann-me-2023', category: 'Solvent Concentrate', rank: 2, winnerName: ['Hybrid Farms', 'Golden Road'], entryName: 'Ice Cream Cake Live Resin' },
  { eventId: 'necann-me-2023', category: 'Solvent Concentrate', rank: 3, winnerName: 'Ripple Wellness', entryName: 'Dozi-Zo’s #15 Live Resin' },

  // Australian Cannabis Cup 2023
  { eventId: 'acc-2023', category: 'Extract Cup', rank: 1, winnerName: 'Dr Heelsgood', entryName: 'Mullum Madness × Black Widow La Niña' },
  { eventId: 'acc-2023', category: 'Hash Cup', rank: 1, winnerName: 'The Sticky Frenchy Guy', entryName: 'Wedding Cake × Blueberry Muffin' },

  // Rhode Island Cultivators Cup 2023
  { eventId: 'ricc-2023', category: 'Rosin', rank: 1, winnerName: 'CMS Gradens', entryName: 'Splenda Live Rosin' },
  { eventId: 'ricc-2023', category: 'Rosin', rank: 2, winnerName: 'Ri-Finest Gardens', entryName: 'Sundae Driver' },
  { eventId: 'ricc-2023', category: 'Rosin', rank: 3, winnerName: 'Mammoth', entryName: 'Cap Junky' },

  // High Times Cannabis Cup New Mexico: People’s Choice Edition 2023
{ eventId: 'htcc-nm-2023', category: 'Solvent Concentrates', rank: 1, winnerName: 'Herbal Edibles & Extracts', entryName: 'Orange Flambe Sauce & Diamonds' },
{ eventId: 'htcc-nm-2023', category: 'Solvent Concentrates', rank: 2, winnerName: 'Pharmers', entryName: 'Orange Soda Live Diamonds' },
{ eventId: 'htcc-nm-2023', category: 'Solvent Concentrates', rank: 3, winnerName: 'Mountaintop Extracts', entryName: 'Concord Clementine Caviar' },
{ eventId: 'htcc-nm-2023', category: 'Non-Solvent Concentrates', rank: 1, winnerName: 'Sandia Botanicals', entryName: 'Olio Slurricane Solventless Rosin Cold Cure' },
{ eventId: 'htcc-nm-2023', category: 'Non-Solvent Concentrates', rank: 2, winnerName: 'Nero', entryName: 'Golden Crisps Live Hash Rosin Cold Cure Badder' },
{ eventId: 'htcc-nm-2023', category: 'Non-Solvent Concentrates', rank: 3, winnerName: 'Frozin', entryName: 'Grape Galette Fresh Frozen Rosin' },

// Michigan Clio Cultivators Cup 2023
{ eventId: 'ccc-mi-2023', category: 'Concentrates', rank: 1, winnerName: 'Mi Terp Farmz', entryName: 'Trop Cherry Rosin' },
{ eventId: 'ccc-mi-2023', category: 'Concentrates', rank: 2, winnerName: 'S-Tier Extracts', entryName: 'Chem Cookies' },
{ eventId: 'ccc-mi-2023', category: 'Concentrates', rank: 3, winnerName: 'Dank Dakk Meds', entryName: 'Juicy Fruit' },

// The Indigenous Cannabis Cup (Undated)
{ eventId: 'icc-ca-na', category: 'Solvent Extract', rank: 1, winnerName: 'Sticky', entryName: 'Cantaloupe Gelato Breath Budder' },
{ eventId: 'icc-ca-na', category: 'Solvent Extract', rank: 2, winnerName: 'Dan Kushie', entryName: 'hash oil' },
{ eventId: 'icc-ca-na', category: 'Solvent Extract', rank: 3, winnerName: 'Healthy Budzz', entryName: 'Honey Oil' },
{ eventId: 'icc-ca-na', category: 'Solventless', rank: 1, winnerName: 'Chronic Relief Extracts', entryName: 'Dry Sift Hash' },
{ eventId: 'icc-ca-na', category: 'Solventless', rank: 2, winnerName: 'BC Quad Shop', entryName: 'Afghan Berries Hash' },
{ eventId: 'icc-ca-na', category: 'Solventless', rank: 2, winnerName: 'High Maintenance Extracts', entryName: 'Dank Shrader hash rosin' },

// HomeGrown Cup 2023 Weekender
{ eventId: 'hgc-weekender-2023', category: 'Rosin', rank: 1, winnerName: ['Fat Beans', 'Hassan’s'], entryName: 'Banana Shake' },
{ eventId: 'hgc-weekender-2023', category: 'Rosin', rank: 2, winnerName: 'Trichomescience SeriOTICA', entryName: 'Seriotica' },
{ eventId: 'hgc-weekender-2023', category: 'Rosin', rank: 3, winnerName: 'Cubes710', entryName: 'Sour Rainbow 29 Bx1 #1' },
{ eventId: 'hgc-weekender-2023', category: 'Ice-O-Lator', rank: 1, winnerName: 'Burningtreezzz', entryName: 'Glookies + Strawberry Lemonade' },
{ eventId: 'hgc-weekender-2023', category: 'Ice-O-Lator', rank: 2, winnerName: 'Beyond Flower', entryName: 'Mac & Cheese' },
{ eventId: 'hgc-weekender-2023', category: 'Ice-O-Lator', rank: 3, winnerName: 'Trichomescience SeriOTICA', entryName: 'Seriotica' },
{ eventId: 'hgc-weekender-2023', category: 'Ice-O-Lator', rank: 3, winnerName: 'Flying Genetics', entryName: 'Tropi Lemon Z' },
{ eventId: 'hgc-weekender-2023', category: 'Drysift', rank: 1, winnerName: 'Lume Extracts', entryName: 'Zowahh' },
{ eventId: 'hgc-weekender-2023', category: 'Drysift', rank: 2, winnerName: 'Burningtreezzz', entryName: 'Truffle Butter + Strawberry Lemonade' },
{ eventId: 'hgc-weekender-2023', category: 'Drysift', rank: 3, winnerName: 'Fruits Cannabis', entryName: 'Rainbow Belts' },

// High Times Cannabis Cup – SoCal People’s Choice Edition 2023
{ eventId: 'htcc-socal-2023', category: 'Solvent Concentrates', rank: 1, winnerName: 'URSA', entryName: 'Ice Cream Cake Live Resin' },
{ eventId: 'htcc-socal-2023', category: 'Solvent Concentrates', rank: 2, winnerName: 'Bear Labs', entryName: 'Jelly Rancher Diamonds' },
{ eventId: 'htcc-socal-2023', category: 'Solvent Concentrates', rank: 3, winnerName: 'Jetty', entryName: 'Tropicana Cherry Live Sugar & Sauce' },
{ eventId: 'htcc-socal-2023', category: 'Non-Solvent Concentrates', rank: 1, winnerName: 'Papa’s Select', entryName: 'Satsuma Sherb Premium Live Rosin' },
{ eventId: 'htcc-socal-2023', category: 'Non-Solvent Concentrates', rank: 2, winnerName: 'Team Elite Genetics', entryName: 'Styrofoam Cup Cold Cure Live Rosin Badder' },
{ eventId: 'htcc-socal-2023', category: 'Non-Solvent Concentrates', rank: 3, winnerName: 'Bear Labs', entryName: 'Donny Burger Live Rosin' },

// High Times Cannabis Cup Michigan: People’s Choice Edition 2023
{ eventId: 'htcc-mi-pc-2023', category: 'AU Non-Solvent Concentrates', rank: 1, winnerName: ['Pressure Pack', 'North Coast'], entryName: 'Blue Zorbet Hash Rosin' },
{ eventId: 'htcc-mi-pc-2023', category: 'AU Non-Solvent Concentrates', rank: 2, winnerName: 'LightSky Farms', entryName: 'Grape Breath Live Rosin' },
{ eventId: 'htcc-mi-pc-2023', category: 'AU Non-Solvent Concentrates', rank: 3, winnerName: 'Society C', entryName: 'Pastries Live Rosin' },
{ eventId: 'htcc-mi-pc-2023', category: 'AU Solvent Concentrates', rank: 1, winnerName: ['HumbleBee', 'Exotic Matter'], entryName: 'Papaya Live Resin' },
{ eventId: 'htcc-mi-pc-2023', category: 'AU Solvent Concentrates', rank: 2, winnerName: 'Cannabee Extracts', entryName: 'Tahitian Sunset Terp Diamonds' },
{ eventId: 'htcc-mi-pc-2023', category: 'AU Solvent Concentrates', rank: 3, winnerName: ['Element', 'Pro Gro'], entryName: 'Sherb Cream Pie Live Resin' },

// California Cannabis Awards Music Festival 2023
{ eventId: 'cca-mf-2023', category: 'Butter / Badder', rank: 1, winnerName: 'Wonderbrett', entryName: 'Papaya' },
{ eventId: 'cca-mf-2023', category: 'Butter / Badder', rank: 2, winnerName: 'West Coast Cure', entryName: 'AcaiKush' },
{ eventId: 'cca-mf-2023', category: 'Butter / Badder', rank: 3, winnerName: 'Cream Of The Crop', entryName: 'Mendothai' },
{ eventId: 'cca-mf-2023', category: 'Rosin', rank: 1, winnerName: 'Papa’s Select', entryName: 'Pink Lemonade' },
{ eventId: 'cca-mf-2023', category: 'Rosin', rank: 2, winnerName: 'CLSICS', entryName: 'Fatso' },
{ eventId: 'cca-mf-2023', category: 'Rosin', rank: 3, winnerName: 'LA Family Farms', entryName: 'Rainbow Beltz' },

// Copa del Rey 2023
{ eventId: 'cdr-2023', category: 'Rosin', rank: 1, winnerName: 'Hisens Crew', entryName: 'Forbidden Blue Print' },
{ eventId: 'cdr-2023', category: 'Rosin', rank: 2, winnerName: 'Dakota', entryName: 'Runtz Utopia' },
{ eventId: 'cdr-2023', category: 'Rosin', rank: 3, winnerName: 'Mailo', entryName: 'Live Straw Berries' },
{ eventId: 'cdr-2023', category: 'Best Hash', rank: 1, winnerName: 'Dakota', entryName: 'Runtz Utopia' },
{ eventId: 'cdr-2023', category: 'Extraction', rank: 1, winnerName: 'Mailo', entryName: 'Atomical Tangerine' },
{ eventId: 'cdr-2023', category: 'Extraction', rank: 2, winnerName: 'Caucanabis', entryName: 'Honey Cheese' },
{ eventId: 'cdr-2023', category: 'Extraction', rank: 3, winnerName: 'Jhony Grass', entryName: 'Desconocida Kush' },
{ eventId: 'cdr-2023', category: 'Best Extract Brand', rank: 1, winnerName: 'Colombis Naturals', entryName: 'Grape Gas' },

// CannaSwiss Cup 2022/23
{ eventId: 'csc-2023', category: 'Best Hash', rank: 1, winnerName: 'biosativa GmbH', entryName: 'The Golden Maroc' },

// East Coast Zalympix 2023
{ eventId: 'ecz-2023', category: 'Best Overall', rank: 1, winnerName: 'Gotti', entryName: 'Zkittlez x Zoap' },
{ eventId: 'ecz-2023', category: 'Best Overall', rank: 2, winnerName: 'Epiphany', entryName: 'Apples & Bananas' },
{ eventId: 'ecz-2023', category: 'Best Overall', rank: 3, winnerName: 'Niche', entryName: 'Main Squeeze' },
{ eventId: 'ecz-2023', category: 'Best Terps', rank: 1, winnerName: 'Maine Trees', entryName: 'Blue Lobster' },
{ eventId: 'ecz-2023', category: 'Best Terps', rank: 2, winnerName: 'Rugged Roots', entryName: 'Sherbanger' },
{ eventId: 'ecz-2023', category: 'Best Terps', rank: 3, winnerName: 'Gotti', entryName: 'Zkittlez x Zoap' },

// Zalympix Michigan 2023
{ eventId: 'miz-2023', category: 'Overall', rank: 1, winnerName: 'Rkive', entryName: 'Candy Fumes' },
{ eventId: 'miz-2023', category: 'Overall', rank: 2, winnerName: 'Peninsula Gardens', entryName: 'Sherb Pie' },
{ eventId: 'miz-2023', category: 'Overall', rank: 3, winnerName: 'Light Sky Farms', entryName: 'Titty Sprinkles' },
{ eventId: 'miz-2023', category: 'Best Terps', rank: 1, winnerName: 'Light Sky Farms', entryName: 'Titty Sprinkles' },
{ eventId: 'miz-2023', category: 'Best Terps', rank: 2, winnerName: 'Ghostbudsters', entryName: 'Halle Berry #1' },
{ eventId: 'miz-2023', category: 'Best Terps', rank: 3, winnerName: 'Michigander Fire', entryName: 'Red Runtz' },

// Arizona Cannabis Awards 2023
{ eventId: 'aca-phx-2023', category: 'Badder', rank: 1, winnerName: 'High Grade', entryName: 'Headband Haze' },
{ eventId: 'aca-phx-2023', category: 'Badder', rank: 2, winnerName: 'MPX', entryName: 'Gas Bugnes' },
{ eventId: 'aca-phx-2023', category: 'Badder', rank: 3, winnerName: 'IO Extractz', entryName: 'Kushmintz' },

// Rooster Cup THC Classic 2023
{ eventId: 'rtcc-2023', category: 'Concentrates', rank: 1, winnerName: 'San Juan Strains', entryName: 'Jaywalker' },
{ eventId: 'rtcc-2023', category: 'Concentrates', rank: 2, winnerName: 'Pot Zero', entryName: 'Axilla' },
{ eventId: 'rtcc-2023', category: 'Concentrates', rank: 3, winnerName: 'Pot Zero', entryName: 'Reba' },
{ eventId: 'rtcc-2023', category: 'Cured Concentrates', rank: 1, winnerName: 'Nomad Extracts', entryName: 'Banana Punch Cured Sugar' },
{ eventId: 'rtcc-2023', category: 'Cured Concentrates', rank: 2, winnerName: 'Pharmacann', entryName: '#HASH Cured Trop’n Citrus - Shatter Sativa-Dominant Hybrid' },
{ eventId: 'rtcc-2023', category: 'Cured Concentrates', rank: 3, winnerName: 'Loud Labs', entryName: 'Bordello Budder' },
{ eventId: 'rtcc-2023', category: 'Live Resin', rank: 1, winnerName: 'Native Roots Cannabis Co.', entryName: 'Spectra Alien Bubba X Super Lemon Haze Live Resin' },
{ eventId: 'rtcc-2023', category: 'Live Resin', rank: 2, winnerName: 'Pharmacann', entryName: '#HASH Flash Frozen Citral Bloom - Live Resin / Sativa-Dominant Hybrid' },
{ eventId: 'rtcc-2023', category: 'Live Resin', rank: 3, winnerName: 'Billo Premium Cannabis', entryName: 'Golden Goat' },
{ eventId: 'rtcc-2023', category: 'Rosin', rank: 1, winnerName: 'Äkta', entryName: 'Chemmy Jones' },
{ eventId: 'rtcc-2023', category: 'Rosin', rank: 2, winnerName: 'Lazercat', entryName: 'Iridescent - Ultrapremo Rosin Badder' },
{ eventId: 'rtcc-2023', category: 'Rosin', rank: 3, winnerName: 'Olio', entryName: 'Red Strips #1' },

// IC 420 Cup 2023
{ eventId: 'ic420-2023', category: 'Rosin', rank: 1, winnerName: 'teamflavourhunting_es', entryName: 'Zkittlez' },
{ eventId: 'ic420-2023', category: 'Rosin', rank: 2, winnerName: 'squishash', entryName: 'Grapes Garlic Gak' },
{ eventId: 'ic420-2023', category: 'Rosin', rank: 3, winnerName: 'zurefarm_csc', entryName: 'Bananaz' },
{ eventId: 'ic420-2023', category: 'Hash', rank: 1, winnerName: 'Bud Professor', entryName: 'Melon Ball' },
{ eventId: 'ic420-2023', category: 'Hash', rank: 2, winnerName: ['sativa_engineering', 'Dochazed'], entryName: 'Blue Zushi WPFF' },
{ eventId: 'ic420-2023', category: 'Hash', rank: 3, winnerName: 'Bud Professor', entryName: 'Moon Runtz' },
{ eventId: 'ic420-2023', category: 'BHO', rank: 1, winnerName: 'jahfrenchkush', entryName: 'New Cassis' },
{ eventId: 'ic420-2023', category: 'BHO', rank: 2, winnerName: 'orgganics', entryName: 'Zkittlez Budder sauce' },
{ eventId: 'ic420-2023', category: 'BHO', rank: 3, winnerName: 'illo.seeds', entryName: 'Huka Resin' },

// MidMo Canna Cup 2023
{ eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 1, winnerName: 'Vibe', entryName: 'Mac' },
{ eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 2, winnerName: 'Vibe', entryName: 'Mac Stomper' },
{ eventId: 'mmcc-2023', category: 'Solventless Hash', rank: 3, winnerName: 'Head Change', entryName: 'Banangee Tangee' },

// HomeGrown Cup 2022 - Winter Edition
{ eventId: 'hgc-winter-2022', category: 'Best Ice-O-Lator', rank: 1, winnerName: 'ZmoothieZ Genetics', entryName: 'Papaya Power' },
{ eventId: 'hgc-winter-2022', category: 'Best Ice-O-Lator', rank: 2, winnerName: ['La Chanvriere', 'Grateful Seeds'], entryName: 'Candy Chrome' },
{ eventId: 'hgc-winter-2022', category: 'Best Ice-O-Lator', rank: 3, winnerName: 'KroonHemp Collab', entryName: 'Tha Melon' },
{ eventId: 'hgc-winter-2022', category: 'Best Rosin', rank: 1, winnerName: ['Ex.tractor', 'Bio Pablo'], entryName: 'Lemonade' },
{ eventId: 'hgc-winter-2022', category: 'Best Rosin', rank: 2, winnerName: 'ZmoothieZ Genetics', entryName: 'Papaya Power' },
{ eventId: 'hgc-winter-2022', category: 'Best Rosin', rank: 3, winnerName: 'Fat Beans Smokenhagen', entryName: 'Mandarine Jam' },

// NuWu Cup 2022
{ eventId: 'nwc-2022', category: 'Best Extract', rank: 1, winnerName: 'Tsunami', entryName: 'Garlic Butter Live Resin Badder' },
{ eventId: 'nwc-2022', category: 'Consumer’s Choice: Best Extract', rank: 1, winnerName: 'Virtue', entryName: 'Spritzer Live Rosin' },

// THC Championship 2022
{ eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 1, winnerName: 'DEN-REC', entryName: 'By the Beard of Zeus!' },
{ eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 2, winnerName: 'High Level Health', entryName: 'Cured Budder Super Platinum' },
{ eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 3, winnerName: 'DEN-REC', entryName: 'Mars Bars' },
{ eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 1, winnerName: 'High Level Health', entryName: 'Blue Unicorn Sauce' },
{ eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 2, winnerName: 'Kush Masters', entryName: 'Free Cookies Live Diamonds' },
{ eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 3, winnerName: 'Kush Masters', entryName: 'Strawberry Fields Diamonds' },
{ eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 1, winnerName: 'Dabble Extracts', entryName: 'Blueberry Donut' },
{ eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 2, winnerName: 'Dabble Extracts', entryName: 'Critical Snowball' },
{ eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 3, winnerName: 'Seed & Smith', entryName: 'Mac (Cold Cured)' },
{ eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 1, winnerName: 'Seed & Smith', entryName: 'Tango' },
{ eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 2, winnerName: 'Seed & Smith', entryName: 'MAC' },
{ eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 3, winnerName: 'Glow Extracts', entryName: 'Animal Live Resin' },
{ eventId: 'thc-champ-2022', category: 'Solventless', rank: 1, winnerName: 'Kush Masters', entryName: '120-70u Mimosa Live Rosin' },
{ eventId: 'thc-champ-2022', category: 'Solventless', rank: 2, winnerName: 'Sano Gardens', entryName: 'DosiDoh – Live Rosin' },
{ eventId: 'thc-champ-2022', category: 'Solventless', rank: 3, winnerName: 'Kush Masters', entryName: '120-70u Wedding Pie Live Rosin' },

// High 95 Cup 2022
{ eventId: 'h95-2022', category: 'Hash', rank: 1, winnerName: 'Upward Organics', entryName: 'Papaya Cake' },
{ eventId: 'h95-2022', category: 'Hash', rank: 2, winnerName: 'Weaving Genetics', entryName: 'Molotov Skunktail' },
{ eventId: 'h95-2022', category: 'Hash', rank: 3, winnerName: 'Ripple Wellness', entryName: 'Fatso' },
{ eventId: 'h95-2022', category: 'Rosin', rank: 1, winnerName: 'Sugar Grove', entryName: 'East Coast Sour Diesel' },
{ eventId: 'h95-2022', category: 'Rosin', rank: 2, winnerName: 'Tokah Farms', entryName: 'SniffitsAlien Genetics' },
{ eventId: 'h95-2022', category: 'Rosin', rank: 3, winnerName: 'Alien Genetics', entryName: 'Fruity Pebbles OG' },
{ eventId: 'h95-2022', category: 'Solvent', rank: 1, winnerName: 'Nth Degree', entryName: 'Martian Monster' },
{ eventId: 'h95-2022', category: 'Solvent', rank: 1, winnerName: 'Ripple Wellness', entryName: 'Dozi-zo’z & The Shire' },
{ eventId: 'h95-2022', category: 'Solvent', rank: 2, winnerName: 'Crockett Farms', entryName: 'Sour Banana Sherbert' },
{ eventId: 'h95-2022', category: 'Solvent', rank: 2, winnerName: 'Tikimadman', entryName: 'Trop Cherry' },
{ eventId: 'h95-2022', category: 'Solvent', rank: 3, winnerName: 'Jedi Ganja Warrior', entryName: 'Watermelon Thunder' },

  // Expogrow Cup 2022
  { eventId: 'expogrow-2022', category: 'Best BHO', rank: 1, winnerName: 'Postitronics', entryName: 'CR47 Malaga' },
  { eventId: 'expogrow-2022', category: 'Best BHO', rank: 2, winnerName: 'Kannabia Dream', entryName: 'Serbet Granada' },
  { eventId: 'expogrow-2022', category: 'Best BHO', rank: 3, winnerName: 'Exclusive Seeds', entryName: 'Dr. Lemon OG' },
  { eventId: 'expogrow-2022', category: 'Best Hash', rank: 1, winnerName: 'Zurefarms', entryName: 'Bananaz' },
  { eventId: 'expogrow-2022', category: 'Best Hash', rank: 2, winnerName: 'Hidden Group Genetics', entryName: 'Dunk Contest' },
  { eventId: 'expogrow-2022', category: 'Best Hash', rank: 3, winnerName: 'The Gratefull Seeds', entryName: '7 Head' },

  // High Times Cannabis Cup Alaska 2022
  { eventId: 'htcc-ak-2022', category: 'Concentrates & Extracts', rank: 1, winnerName: 'Refine Alaska', entryName: 'Royal Gorilla Loud Resin' },
  { eventId: 'htcc-ak-2022', category: 'Concentrates & Extracts', rank: 2, winnerName: 'AKO Farms', entryName: 'Yerbert x Rainbow Belts Sugar Wax' },
  { eventId: 'htcc-ak-2022', category: 'Concentrates & Extracts', rank: 3, winnerName: 'G2', entryName: 'Honey Banana Badder' },

  // Copa del Rey 2023
  { eventId: 'cdr-2023', category: 'Rosin', rank: 1, winnerName: 'Hisens Crew', entryName: 'Forbidden Blue Print' },
  { eventId: 'cdr-2023', category: 'Rosin', rank: 2, winnerName: 'Dakota', entryName: 'Runtz Utopia' },
  { eventId: 'cdr-2023', category: 'Rosin', rank: 3, winnerName: 'Mailo', entryName: 'Live Straw Berries' },
  { eventId: 'cdr-2023', category: 'Best Hash', rank: 1, winnerName: 'Dakota', entryName: 'Runtz Utopia' },
  { eventId: 'cdr-2023', category: 'Extraction', rank: 1, winnerName: 'Mailo', entryName: 'Atomical Tangerine' },
  { eventId: 'cdr-2023', category: 'Extraction', rank: 2, winnerName: 'Caucanabis', entryName: 'Honey Cheese' },
  { eventId: 'cdr-2023', category: 'Extraction', rank: 3, winnerName: 'Jhony Grass', entryName: 'Desconocida Kush' },
  { eventId: 'cdr-2023', category: 'Best Extract Brand', rank: 1, winnerName: 'Colombis Naturals', entryName: 'Grape Gas' },

  // Alaska Leaf Bowl 2023
  { eventId: 'alb-2023', category: 'Best Rosin', rank: 1, winnerName: 'Polychrome Grass', entryName: 'Wilson Zero Cold Cure Live Rosin' },
  { eventId: 'alb-2023', category: 'Best Full Melt', rank: 1, winnerName: 'Polychrome Grass', entryName: 'Wilson Zero Full Melt Water Hash' },
  { eventId: 'alb-2023', category: 'Best Traditional Hash', rank: 1, winnerName: ['High Society', 'Let The Nookie Dudus', 'Bodhi'], entryName: 'Dry Sift Traditional Hash' },
  { eventId: 'alb-2023', category: 'Best Diamonds/Sauce', rank: 1, winnerName: 'High Society', entryName: 'Sunset Sherbert Diamonds' },
  { eventId: 'alb-2023', category: 'Best Crumble/Sugar', rank: 1, winnerName: 'Flowered Extracts', entryName: 'Mimosa Burger Sugar' },
  { eventId: 'alb-2023', category: 'Best CO2', rank: 1, winnerName: 'Secret Garden', entryName: 'Sour Diesel Terps CO2' },
  { eventId: 'alb-2023', category: 'Best Budder/Badder', rank: 1, winnerName: 'NORTHWEST Concentrates', entryName: 'Raspberry Dream Flakkity Delicatter' },

  // Oregon Leaf Bowl 2023
  { eventId: 'olb-2023', category: 'Budder / Badder', rank: 1, winnerName: 'Echo Electuary', entryName: 'Z Live Budder' },
  { eventId: 'olb-2023', category: 'Budder / Badder', rank: 2, winnerName: 'NW Kind', entryName: 'Lemon Apricot Jam Live Resin' },
  { eventId: 'olb-2023', category: 'Crumble / Sugar', rank: 1, winnerName: 'Capital Cannabis', entryName: 'Guava Pie Live Resin Sugar Sauce' },
  { eventId: 'olb-2023', category: 'Crumble / Sugar', rank: 2, winnerName: ['Self Made Farms', 'Sunshine'], entryName: 'Wonderdawg' },
  { eventId: 'olb-2023', category: 'Diamonds & Sauce', rank: 1, winnerName: ['Willamette Valley Alchemy', 'Retreats Edibles'], entryName: 'Donny Burger Live Resin Terp Slush' },
  { eventId: 'olb-2023', category: 'Diamonds & Sauce', rank: 2, winnerName: ['Legacy Cannabis Dabs', 'Herban Renewal', 'Self Made'], entryName: 'Orange Spritz Cookies' },
  { eventId: 'olb-2023', category: 'Pull ‘n’ Snap / Shatter', rank: 1, winnerName: ['Echo Electuary', 'Eugreen Farms'], entryName: 'Donny Burger Pull n Snap' },
  { eventId: 'olb-2023', category: 'Pull ‘n’ Snap / Shatter', rank: 2, winnerName: 'Sunshine', entryName: 'Topical Runtz Shatter' },
  { eventId: 'olb-2023', category: 'Solventless - Rosin', rank: 1, winnerName: 'Verdant Leaf', entryName: 'Citrus Funk Hash Rosin' },
  { eventId: 'olb-2023', category: 'Solventless - Rosin', rank: 2, winnerName: 'Echo Electuary', entryName: 'Sour Z Live Hash Rosin' },
  { eventId: 'olb-2023', category: 'Solventless - Full Melt', rank: 1, winnerName: ['Fuji Melt', 'Treasure Valley Cannabis'], entryName: 'Poon Tang Pie #5' },
  { eventId: 'olb-2023', category: 'Solventless - Full Melt', rank: 2, winnerName: ['Covert Extraction', 'Epoch Farms'], entryName: 'GMO' },
  { eventId: 'olb-2023', category: 'Solventless - Traditional Hash', rank: 1, winnerName: 'Bonsai Farms', entryName: 'Strawberry Cooler Traditional Hash' },
  { eventId: 'olb-2023', category: 'Solventless - Traditional Hash', rank: 2, winnerName: 'Bonsai Farms', entryName: 'El Trop-O Traditional Hash' },

  // High Times Cannabis Cup Massachusetts 2022
  { eventId: 'htcc-ma-2022', category: 'Concentrates', rank: 1, winnerName: ['Treeworks', 'Smash Hits'], entryName: 'California Raisins Live Rosin' },
  { eventId: 'htcc-ma-2022', category: 'Concentrates', rank: 2, winnerName: 'Happy Valley', entryName: 'White Wedding Live Hash Rosin' },
  { eventId: 'htcc-ma-2022', category: 'Concentrates', rank: 3, winnerName: 'Garden Remedies', entryName: 'Apple Kugel Live Rosin' },

  // Sevilla Cup 2022
  { eventId: 'sevilla-cup-2022', category: 'Dry Sift', rank: 1, winnerName: 'Madrid Cannabis Resin', entryName: 'G.M.O. x J.F.G.' },
  { eventId: 'sevilla-cup-2022', category: 'Dry Sift', rank: 2, winnerName: 'Calite Farms', entryName: 'Cookie Dough' },
  { eventId: 'sevilla-cup-2022', category: 'Dry Sift', rank: 3, winnerName: 'Psycofarm', entryName: 'Papaya Splash' },
  { eventId: 'sevilla-cup-2022', category: 'Water Hash (Ice-O-Lator)', rank: 1, winnerName: 'T.G. Fum Dens', entryName: 'Papaya Punch' },
  { eventId: 'sevilla-cup-2022', category: 'Water Hash (Ice-O-Lator)', rank: 2, winnerName: 'Bask Triangle Farm', entryName: 'Pie-Pie' },
  { eventId: 'sevilla-cup-2022', category: 'Water Hash (Ice-O-Lator)', rank: 3, winnerName: 'Casa del Fuego', entryName: 'G.M.O.' },
  { eventId: 'sevilla-cup-2022', category: 'Rosin', rank: 1, winnerName: 'Weed Island', entryName: 'V-Spec' },
  { eventId: 'sevilla-cup-2022', category: 'Rosin', rank: 2, winnerName: 'Casa del Fuego', entryName: 'Onionz' },
  { eventId: 'sevilla-cup-2022', category: 'Rosin', rank: 3, winnerName: 'Casa del Fuego', entryName: 'Runtz' },
  
  // Jalisco Cannabis Cup 2022
  { eventId: 'jcc-2022', category: 'Solventless Extracts (Bubble Hash)', rank: 1, winnerName: 'Joseph', entryName: 'Cookies Cream' },
  { eventId: 'jcc-2022', category: 'Solventless Extracts (Bubble Hash)', rank: 2, winnerName: 'Joseph', entryName: 'Chocolate 2.0' },
  { eventId: 'jcc-2022', category: 'Solventless Extracts (Bubble Hash)', rank: 3, winnerName: 'Alquimia Xtracts MX', entryName: 'Passion Fruit' },
  { eventId: 'jcc-2022', category: 'Solventless Extracts (Rosin)', rank: 1, winnerName: ['Beectlan RX', 'Fernando Konosoi'], entryName: 'Papaya' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (BHO)', rank: 1, winnerName: 'Wax Pockas Mexican Pride', entryName: 'Acid & Cookies' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (BHO)', rank: 2, winnerName: 'Beectlan Rx', entryName: 'White Shark' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (BHO)', rank: 3, winnerName: 'Alquimia MX Xtracts', entryName: 'Lemon Skunk' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (Diamonds)', rank: 1, winnerName: 'Up in cloud 9', entryName: 'pushpopz' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (Diamonds)', rank: 2, winnerName: 'Up in cloud 9', entryName: 'south side og' },
  { eventId: 'jcc-2022', category: 'Solvent Extracts (Diamonds)', rank: 3, winnerName: 'Alquimia MX Xtracts', entryName: 'Forbidden fruit' },

  // Connoisseur Cup 2022
  { eventId: 'ccup-2022', category: 'Overall Grand Champion Extract', rank: 1, winnerName: '@Jabba_The_Hash', entryName: 'Garlic Juice' },
  { eventId: 'ccup-2022', category: 'Grand Champion Rec Rosin', rank: 1, winnerName: 'Harmony Extracts', entryName: 'Original Glue' },
  { eventId: 'ccup-2022', category: 'Grand Champion Rec Rosin', rank: 2, winnerName: 'Apothecary Extracts Colorado', entryName: 'Runtz' },
  { eventId: 'ccup-2022', category: 'Grand Champion Rec Rosin', rank: 2, winnerName: 'Sovereign Labs CO', entryName: 'Ice Cream Cake' },
  { eventId: 'ccup-2022', category: 'Grand Champion Rec Rosin', rank: 3, winnerName: 'Cherry Colorado', entryName: 'Dank Dough' },
  
  // Cloud in the City Cup 2022
  { eventId: 'citc-2022', category: 'Best VIP Hash', rank: 1, winnerName: ['Hash Broz', 'Gold Green'], entryName: 'Acai Cake, Black Farm Genetics' },
  { eventId: 'citc-2022', category: 'Best VIP Hash', rank: 2, winnerName: 'Growers Choice', entryName: 'Sour Zkittlez' },
  { eventId: 'citc-2022', category: 'Best VIP Hash', rank: 3, winnerName: 'Medusa Dabs', entryName: 'Hash Ball' },
  { eventId: 'citc-2022', category: 'Best Non Solvent', rank: 1, winnerName: 'Fat Beans', entryName: 'Strain H18' },
  { eventId: 'citc-2022', category: 'Best Non Solvent', rank: 2, winnerName: 'Fat Beans', entryName: 'Strain RM4' },
  { eventId: 'citc-2022', category: 'Best Non Solvent', rank: 3, winnerName: 'Laboratorio Chimico Extractor', entryName: 'LOTTO 34122' },
  { eventId: 'citc-2022', category: 'Best Solvent', rank: 1, winnerName: 'Medusa Dabs', entryName: 'Strain Mix' },

  // Massachusetts Cultivators Cup 2022
  { eventId: 'mcc-2022', category: 'Solvent Concentrates', rank: 1, winnerName: 'Berkshire Roots', entryName: 'Vortex Live Sugar' },
  { eventId: 'mcc-2022', category: 'Solvent Concentrates', rank: 2, winnerName: 'Green Gold', entryName: 'Sour Joker Crumble' },
  { eventId: 'mcc-2022', category: 'Solvent Concentrates', rank: 3, winnerName: 'Commenwealth Alternative Care', entryName: 'NF1 Badder' },
  { eventId: 'mcc-2022', category: 'Solventless Concentrates', rank: 1, winnerName: 'Happy Valley', entryName: 'End Game Cookies' },
  { eventId: 'mcc-2022', category: 'Solventless Concentrates', rank: 2, winnerName: 'Bountiful', entryName: 'Colorado Chem' },
  { eventId: 'mcc-2022', category: 'Solventless Concentrates', rank: 3, winnerName: 'Nature’s Heritage Cannabis', entryName: 'Double Krush' },
  
  // Canadian Cannabis Championship 2022
  { eventId: 'ccc-2022', category: 'Hash', rank: 1, winnerName: 'Final Bell', entryName: 'Beurre Blanc (bubble hash)' },
  { eventId: 'ccc-2022', category: 'Hash', rank: 2, winnerName: 'Lady Jane Labs', entryName: 'Banana Punch #9 x G.M.O.' },
  { eventId: 'ccc-2022', category: 'Hash', rank: 3, winnerName: 'Great Gardener Farms', entryName: 'Barbara Bud Live Rosin' },

  // Oklahoma Cannabis Awards 2022
  { eventId: 'ok-awards-2022', category: 'BHO', rank: 1, winnerName: '77 Extracts', entryName: 'Purp Gelato' },
  { eventId: 'ok-awards-2022', category: 'BHO', rank: 2, winnerName: 'Pharmicated', entryName: 'Jealousy' },
  { eventId: 'ok-awards-2022', category: 'Rosin', rank: 1, winnerName: ['The Bud Hunters', 'Leaf Logic'], entryName: 'Berries N Cream' },
  { eventId: 'ok-awards-2022', category: 'Rosin', rank: 2, winnerName: 'Hash Wizards', entryName: 'Rosin' },
  { eventId: 'ok-awards-2022', category: 'Rosin', rank: 3, winnerName: 'Bear Essentials', entryName: 'Double Butter' },

  // The Organic Cup (Various US)
  { eventId: 'organic-cup-mi-2022', category: 'Best Full Melt', rank: 1, winnerName: 'Organitron', entryName: 'Frost Donkey' },
  { eventId: 'organic-cup-mi-2022', category: 'Best Full Melt', rank: 2, winnerName: 'Lake Life Farms', entryName: 'Double Baked' },
  { eventId: 'organic-cup-mi-2022', category: 'Best Rosin', rank: 1, winnerName: ['Smokey’s Solventless', 'JMP Glass'], entryName: 'Tropic Driver' },
  { eventId: 'organic-cup-mi-2022', category: 'Best Rosin', rank: 2, winnerName: 'Full Spectrum Seeds', entryName: 'Back Porch Cherry' },
  { eventId: 'organic-cup-mi-2022', category: 'Best Rosin', rank: 3, winnerName: ['Organitron', 'The Gro Father'], entryName: 'Sheeshers' },
  { eventId: 'organic-cup-mi-2022', category: 'Solventless Carts', rank: 1, winnerName: 'Kalamazoo Vines', entryName: 'Durban Poison' },
  { eventId: 'organic-cup-mi-2022', category: 'Solventless Carts', rank: 2, winnerName: 'Kalamazoo Vines', entryName: 'Trop Cookies' },
  { eventId: 'organic-cup-nyc-2022', category: 'Best Rosin', rank: 1, winnerName: 'Hash Farm Wicked Sowa', entryName: 'Sweet Socrates (Papaya X Jersey Juice)' },
  { eventId: 'organic-cup-nyc-2022', category: 'Best Rosin', rank: 2, winnerName: 'Hightalian Rosin', entryName: 'Banana Bucket (Banana Kus X Orange Crusher X Grease Bucket)' },
  { eventId: 'organic-cup-nyc-2022', category: 'Best Rosin', rank: 3, winnerName: 'Immortal Hashery', entryName: 'Zkittlez Trop' },
  { eventId: 'organic-cup-mi-2020', category: 'Best THC Rosin', rank: 1, winnerName: 'Smokey’s Solventless', entryName: 'Death Star' },
  { eventId: 'organic-cup-mi-2018', category: 'Best Concentrate Rosin', rank: 1, winnerName: 'Wojo Wax', entryName: null },
  { eventId: 'organic-cup-mi-2018', category: 'Best Concentrate Separation', rank: 1, winnerName: ['Organitron', 'Hardwoods Hemp Co', 'The Gro Father', 'Moonlight Melts'], entryName: 'Oregon Watermelon CBD' },

  // Highlife Cup 2022
  { eventId: 'hlc-2022', category: 'Hash import', rank: 1, winnerName: 'Zero Zero Arnhem', entryName: 'Purple daddy Dry Sift' },
  { eventId: 'hlc-2022', category: 'Hash import', rank: 2, winnerName: 'Relax Amsterdam', entryName: 'Icecream Cake Double dry sift' },
  { eventId: 'hlc-2022', category: 'Hash import', rank: 3, winnerName: 'Solo Amsterdam', entryName: 'Girl Scout Cookies hasj' },
  { eventId: 'hlc-2022', category: 'Nederhash', rank: 1, winnerName: 'Mississippi Maastricht', entryName: 'Banana Triple Sift' },
  { eventId: 'hlc-2022', category: 'Nederhash', rank: 2, winnerName: 'Cremers Den Haag', entryName: 'Triple' },
  { eventId: 'hlc-2022', category: 'Nederhash', rank: 3, winnerName: 'Zero Zero Arnhem', entryName: 'Zero Hand made' },
  { eventId: 'hlc-2022', category: 'Extracts', rank: 1, winnerName: 'Magic Den Haag', entryName: 'Shaher Magic' },
  { eventId: 'hlc-2022', category: 'Extracts', rank: 2, winnerName: 'Cremers Den Haag', entryName: 'Strawberry Apple Jack Isolator' },
  { eventId: 'hlc-2022', category: 'Extracts', rank: 3, winnerName: 'Greenhouse Secrets Farmers Den Haag', entryName: 'French Kiss Temple Ball' },

  // High Times Cannabis Cup SoCal 2022
  { eventId: 'htcc-socal-pc-2022', category: 'Best Solvent Concentrates', rank: 1, winnerName: 'Bear Labs', entryName: 'Kiwi Thin Mintz Diamonds' },
  { eventId: 'htcc-socal-pc-2022', category: 'Best Solvent Concentrates', rank: 2, winnerName: 'Jetty Extracts', entryName: 'Super Lemon Haze Live Resin' },
  { eventId: 'htcc-socal-pc-2022', category: 'Best Solvent Concentrates', rank: 3, winnerName: 'URSA', entryName: 'Sunset Wave Live Resin' },

  // California Zalympix 2022
  { eventId: 'cali-z-2022', category: 'Best Overall', rank: 1, winnerName: ['DEO Farms', 'Wizard Trees'], entryName: 'Zoap' },
  { eventId: 'cali-z-2022', category: 'Best Overall', rank: 2, winnerName: ['Tenco', 'Zushi'], entryName: 'Blue Zushi' },
  { eventId: 'cali-z-2022', category: 'Best Overall', rank: 3, winnerName: 'Blueprint', entryName: 'Triple Lindy' },
  { eventId: 'cali-z-2022', category: 'Best Terps', rank: 1, winnerName: ['Tenco', 'Zushi'], entryName: 'Blue Zushi' },
  { eventId: 'cali-z-2022', category: 'Best Terps', rank: 2, winnerName: ['DEO Farms', 'Wizard Trees'], entryName: 'Zoap' },
  { eventId: 'cali-z-2022', category: 'Best Terps', rank: 3, winnerName: 'Alien Labs', entryName: 'Biskante' },

    // The Karma Cup 2022
  { eventId: 'karma-cup-2022', category: 'High Terpene Extract', rank: 1, winnerName: 'Caviar Extracts', entryName: 'Tropicana' },
  { eventId: 'karma-cup-2022', category: 'High Terpene Extract', rank: 2, winnerName: 'Honey Badger Extracts', entryName: 'Loud Mouth' },
  { eventId: 'karma-cup-2022', category: 'High Terpene Extract', rank: 3, winnerName: 'London Donovan', entryName: 'Mac 2' },
  { eventId: 'karma-cup-2022', category: 'Solvent Extract', rank: 1, winnerName: 'FatCat Extract', entryName: 'Northern Lights' },
  { eventId: 'karma-cup-2022', category: 'Solvent Extract', rank: 2, winnerName: 'Dave’s Master Extracts', entryName: 'Tropicana Punch' },
  { eventId: 'karma-cup-2022', category: 'Solvent Extract', rank: 3, winnerName: 'FatCat Extract', entryName: 'Rockstar' },
  { eventId: 'karma-cup-2022', category: 'Solventless', rank: 1, winnerName: 'Ohcannabis', entryName: 'Wedding Slurr' },
  { eventId: 'karma-cup-2022', category: 'Solventless', rank: 2, winnerName: 'Flavor Farm', entryName: 'Black Garlic' },
  { eventId: 'karma-cup-2022', category: 'Solventless', rank: 3, winnerName: 'Severed Heads', entryName: 'Mint Slushie' },

  // High Times Cannabis Cup Colorado 2022
  { eventId: 'htcc-co-2022', category: 'Best Solvent Concentrates', rank: 1, winnerName: 'High Level Health', entryName: 'Blue Skunk Live Budder' },
  { eventId: 'htcc-co-2022', category: 'Best Solvent Concentrates', rank: 2, winnerName: 'Kush Master', entryName: 'Papaya Power Live Diamonds (Solvent)' },
  { eventId: 'htcc-co-2022', category: 'Best Solvent Concentrates', rank: 3, winnerName: 'Spectra', entryName: 'Rainbow Cookies Live Resin' },
  { eventId: 'htcc-co-2022', category: 'Best Non-Solvent Concentrates', rank: 1, winnerName: 'Akta', entryName: 'Tropicanna Banana Live Rosin' },
  { eventId: 'htcc-co-2022', category: 'Best Non-Solvent Concentrates', rank: 2, winnerName: 'Dutch Botanicals', entryName: 'Grumpz Living Soil Live Rosin' },
  { eventId: 'htcc-co-2022', category: 'Best Non-Solvent Concentrates', rank: 3, winnerName: 'Indica', entryName: 'Lost Cause Rosin' },

  // Garden Route Cannabis Cup 2022
  { eventId: 'grcc-2022', category: 'Best Concentrates', rank: 1, winnerName: 'Canna Central Pty Ltd', entryName: null },

  // Nevada Cannabis Awards 2022
  { eventId: 'nva-2022', category: 'Live Resin', rank: 1, winnerName: 'Tsunami', entryName: 'Phatt Fruity' },
  { eventId: 'nva-2022', category: 'Live Resin', rank: 2, winnerName: 'Mammoth Labs', entryName: 'Lion’s Mane' },
  { eventId: 'nva-2022', category: 'Live Resin', rank: 3, winnerName: 'City Trees', entryName: 'Apricot' },
  { eventId: 'nva-2022', category: 'Diamonds', rank: 1, winnerName: 'Tsunami', entryName: 'Phatt Fruity' },
  { eventId: 'nva-2022', category: 'Diamonds', rank: 2, winnerName: 'Binske', entryName: 'Carson City Kush' },
  { eventId: 'nva-2022', category: 'Resin', rank: 1, winnerName: 'Medizin', entryName: 'Mango Kush' },
  { eventId: 'nva-2022', category: 'Resin', rank: 2, winnerName: 'Jerome Baker', entryName: 'Lisa’s Lemons' },
  { eventId: 'nva-2022', category: 'Shatter', rank: 1, winnerName: 'Medizin', entryName: 'Hawaiian Butterscotch' },
  { eventId: 'nva-2022', category: 'Shatter', rank: 2, winnerName: 'City Trees', entryName: 'Dosi-Woah' },
  { eventId: 'nva-2022', category: 'Shatter', rank: 3, winnerName: 'Panna Extracts', entryName: 'Lemon OG Haze' },
  { eventId: 'nva-2022', category: 'Sugar', rank: 1, winnerName: 'City Trees', entryName: 'Dosi-Woah' },
  { eventId: 'nva-2022', category: 'Sugar', rank: 2, winnerName: 'NLVO Gold', entryName: 'Tangie Melon' },
  { eventId: 'nva-2022', category: 'Sugar', rank: 3, winnerName: 'Matrix NV', entryName: 'Blue Dream' },

  // High Times Hemp Cup 2022
  { eventId: 'ht-hemp-cup-2022', category: 'Concentrates', rank: 1, winnerName: 'Metta Hemp', entryName: 'HHC Wet Sugar' },
  { eventId: 'ht-hemp-cup-2022', category: 'Concentrates', rank: 2, winnerName: 'Alliance Hemp Co.', entryName: 'Gas CBD Terpsolate' },
  { eventId: 'ht-hemp-cup-2022', category: 'Concentrates', rank: 3, winnerName: 'Piur Select', entryName: 'Tennessee Tangie Flower Sift Rosin' },

  // Errl Cup Spring 2022
  { eventId: 'errl-spring-2022', category: 'Concentrate - Indica', rank: 1, winnerName: 'Aeriz', entryName: 'Ice Cream Cake' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Indica', rank: 2, winnerName: 'Lit SOM', entryName: 'Grape Blackberry Skittlez Shatter' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Indica', rank: 3, winnerName: 'Oasis', entryName: 'AK – 06 LR Sauce' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Hybrid', rank: 1, winnerName: 'Aeriz', entryName: 'Gorilla Cookies' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Hybrid', rank: 2, winnerName: 'Hi-Klas', entryName: 'White Fire OG' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Hybrid', rank: 3, winnerName: 'Glorious Extracts', entryName: 'MSG Live Resin' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Sativa', rank: 1, winnerName: 'Hi-Klas', entryName: 'Lemon Lime' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Sativa', rank: 2, winnerName: 'Aeriz', entryName: 'Jenny Kush' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - Sativa', rank: 3, winnerName: 'Lit SOM', entryName: 'Blue Dream LR Sugar' },
  { eventId: 'errl-spring-2022', category: 'Concentrate - CBD', rank: 1, winnerName: 'DRIP', entryName: 'Hoe Down 1:1 Batter' },
  { eventId: 'errl-spring-2022', category: 'Sauce', rank: 1, winnerName: 'Aeriz', entryName: 'Mac 1' },
  { eventId: 'errl-spring-2022', category: 'Sauce', rank: 2, winnerName: 'DRIP', entryName: 'Lemon Tree x Schedule 1 LR' },
  { eventId: 'errl-spring-2022', category: 'Sauce', rank: 3, winnerName: 'Mohave Cannabis Co', entryName: 'Super Glue' },
  { eventId: 'errl-spring-2022', category: 'Non-Solvent', rank: 1, winnerName: 'Farm Fresh', entryName: 'OG 18' },
  { eventId: 'errl-spring-2022', category: 'Non-Solvent', rank: 2, winnerName: 'Aeriz', entryName: 'Sundae Driver Lice Hash Rosin' },
  { eventId: 'errl-spring-2022', category: 'Non-Solvent', rank: 3, winnerName: 'Abundant Organics', entryName: 'Tie Dye' },
  
  // O’Cannabiz Industry Awards Gala 2022
  { eventId: 'ocannabiz-2022', category: 'People’s Choice', rank: 1, winnerName: 'Dymond Concentrates 2.0', entryName: 'Dos Si Dos' },

  // East Coast Cannabis Cup 2022
  { eventId: 'eccc-za-2022', category: 'Extracts Cup', rank: 1, winnerName: 'Happy Creek Farm', entryName: 'Apple Fritter Vape' },
  { eventId: 'eccc-za-2022', category: 'Extracts Cup', rank: 2, winnerName: 'Happy Creek Farm', entryName: 'Moonrocks' },
  { eventId: 'eccc-za-2022', category: 'Extracts Cup', rank: 3, winnerName: 'Happy Creek Farm', entryName: 'Cherry Pie Dab' },
  
  // HomeGrown Cup Summer Edition 2022
  { eventId: 'hgc-summer-2022', category: 'Best Drysift', rank: 1, winnerName: 'La Chanvriere', entryName: 'Fresca Melon' },
  { eventId: 'hgc-summer-2022', category: 'Best Drysift', rank: 2, winnerName: 'Icetoker 75', entryName: 'mandarin Jam' },
  { eventId: 'hgc-summer-2022', category: 'Best Drysift', rank: 3, winnerName: 'Beberlator', entryName: 'French Kisz x Melon Sicle' },
  { eventId: 'hgc-summer-2022', category: 'Best Ice-O-Lator', rank: 1, winnerName: 'Cool Bred', entryName: 'Cool Macedonia' },
  { eventId: 'hgc-summer-2022', category: 'Best Ice-O-Lator', rank: 2, winnerName: 'Thebimosway', entryName: 'Yuzo' },
  { eventId: 'hgc-summer-2022', category: 'Best Ice-O-Lator', rank: 3, winnerName: 'Icetoker 75', entryName: 'Mandarin Jam' },
  { eventId: 'hgc-summer-2022', category: 'Best BHO', rank: 1, winnerName: 'Jah French Kush', entryName: 'Strawberry Cheese' },
  { eventId: 'hgc-summer-2022', category: 'Best BHO', rank: 2, winnerName: 'Lume Extracts', entryName: 'Puro Loco x Cherry Cosmos' },
  { eventId: 'hgc-summer-2022', category: 'Best BHO', rank: 3, winnerName: 'Servietsko Grow', entryName: 'Galactic Runtz' },
  { eventId: 'hgc-summer-2022', category: 'Best Rosin', rank: 1, winnerName: 'Cool Breed', entryName: 'Cool Macedonia' },
  { eventId: 'hgc-summer-2022', category: 'Best Rosin', rank: 2, winnerName: 'Thebimosway', entryName: 'GN' },
  { eventId: 'hgc-summer-2022', category: 'Best Rosin', rank: 3, winnerName: 'Raiders of the Lost Terps', entryName: 'Gorilla Zkittlez' },

  // Arizona Cannabis Awards Music Festival 2022
  { eventId: 'aca-phx-2022', category: 'Rosin', rank: 1, winnerName: 'OG Zonka Bars', entryName: '#1 Schedule' },
  { eventId: 'aca-phx-2022', category: 'Rosin', rank: 2, winnerName: 'Solventless Refinery', entryName: 'Lemon Runtz' },
  { eventId: 'aca-phx-2022', category: 'Rosin', rank: 3, winnerName: 'Good Things Coming', entryName: 'Rosin' },

  // Rooster Cup THC Classic 2022
  { eventId: 'rtcc-2022', category: 'Cured Concentrates', rank: 1, winnerName: 'Infusiasm', entryName: '#HASH Shatter: Pull and Snap Cherry Diesel #1' },
  { eventId: 'rtcc-2022', category: 'Cured Concentrates', rank: 2, winnerName: ['Outlaw Cannabis', 'Concentrate Supply Co. (CSC)'], entryName: 'Purple Sunset #4 Wax' },
  { eventId: 'rtcc-2022', category: 'Cured Concentrates', rank: 3, winnerName: 'Loud Labs', entryName: 'Lemonage-a-trois Budder' },
  { eventId: 'rtcc-2022', category: 'Live Resin', rank: 1, winnerName: 'Kush Masters LLC', entryName: 'Forever Fruit Live Diamonds' },
  { eventId: 'rtcc-2022', category: 'Live Resin', rank: 2, winnerName: 'Billo Premium Cannabis', entryName: 'Durban Diesel Diamonds and Sauce' },
  { eventId: 'rtcc-2022', category: 'Live Resin', rank: 3, winnerName: 'Gold Rush Extracts', entryName: 'Sundae Driver Live Resin' },
  { eventId: 'rtcc-2022', category: 'Rosin', rank: 1, winnerName: 'SUMMIT', entryName: 'Strawberry Banana Live Rosin' },
  { eventId: 'rtcc-2022', category: 'Rosin', rank: 2, winnerName: 'Kush Masters LLC', entryName: 'Wedding Pie Live Rosin' },
  { eventId: 'rtcc-2022', category: 'Rosin', rank: 3, winnerName: 'Sunshine Extracts', entryName: 'Heirloom Kush Rosin Batter' },
  { eventId: 'rtcc-2022', category: 'Hash', rank: 1, winnerName: 'Olio', entryName: 'GuavaZ #5' },
  { eventId: 'rtcc-2022', category: 'Hash', rank: 2, winnerName: 'Äkta', entryName: 'Blackberry Octane 90-micron Live Heads' },
  { eventId: 'rtcc-2022', category: 'Hash', rank: 3, winnerName: 'The Greenery Hash Factory', entryName: 'Moroccan Hash' },
  
  // THC Championship 2022
  { eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 1, winnerName: 'DEN-REC', entryName: 'By the Beard of Zeus!' },
  { eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 2, winnerName: 'High Level Health', entryName: 'Cured Budder Super Platinum' },
  { eventId: 'thc-champ-2022', category: 'REC Cured Concentrate', rank: 3, winnerName: 'DEN-REC', entryName: 'Mars Bars' },
  { eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 1, winnerName: 'High Level Health', entryName: 'Blue Unicorn Sauce' },
  { eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 2, winnerName: 'Kush Masters', entryName: 'Free Cookies Live Diamonds' },
  { eventId: 'thc-champ-2022', category: 'REC Diamonds & Sauce', rank: 3, winnerName: 'Kush Masters', entryName: 'Strawberry Fields Diamonds' },
  { eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 1, winnerName: 'Dabble Extracts', entryName: 'Blueberry Donut' },
  { eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 2, winnerName: 'Dabble Extracts', entryName: 'Critical Snowball' },
  { eventId: 'thc-champ-2022', category: 'MED Cured Concentrate', rank: 3, winnerName: 'Seed & Smith', entryName: 'Mac (Cold Cured)' },
  { eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 1, winnerName: 'Seed & Smith', entryName: 'Tango' },
  { eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 2, winnerName: 'Seed & Smith', entryName: 'MAC' },
  { eventId: 'thc-champ-2022', category: 'MED Live Resin', rank: 3, winnerName: 'Glow Extracts', entryName: 'Animal Live Resin' },
  { eventId: 'thc-champ-2022', category: 'Solventless', rank: 1, winnerName: 'Kush Masters', entryName: '120-70u Mimosa Live Rosin' },
  { eventId: 'thc-champ-2022', category: 'Solventless', rank: 2, winnerName: 'Sano Gardens', entryName: 'DosiDoh – Live Rosin' },
  { eventId: 'thc-champ-2022', category: 'Solventless', rank: 3, winnerName: 'Kush Masters', entryName: '120-70u Wedding Pie Live Rosin' },

    // Spannabis Champions Cup 2022
  { eventId: 'scc-bcn-2022', category: 'Rosin', rank: 1, winnerName: 'Cannabis Zurefarm CSC', entryName: 'Banana Sherbet' },
  { eventId: 'scc-bcn-2022', category: 'Rosin', rank: 2, winnerName: 'GWA Social Club', entryName: 'Zmoothie' },
  { eventId: 'scc-bcn-2022', category: 'Rosin', rank: 3, winnerName: 'Weflowers', entryName: 'Limez' },
  { eventId: 'scc-bcn-2022', category: 'Hash', rank: 1, winnerName: 'Cannabis Zurefarm CSC', entryName: 'Banana Sherbet' },
  { eventId: 'scc-bcn-2022', category: 'Hash', rank: 2, winnerName: 'R-Kiem Seeds', entryName: 'G.O.S.' },
  { eventId: 'scc-bcn-2022', category: 'Hash', rank: 3, winnerName: 'Solventless Affair', entryName: 'Sunset Sherbert 90U' },
  { eventId: 'scc-bcn-2022', category: 'Solvent Extraction', rank: 1, winnerName: 'The Backyard', entryName: 'Rainbow Mintz' },
  { eventId: 'scc-bcn-2022', category: 'Solvent Extraction', rank: 2, winnerName: 'The Backyard', entryName: 'Piñata' },
  { eventId: 'scc-bcn-2022', category: 'Solvent Extraction', rank: 3, winnerName: 'Perfect Tree', entryName: 'Cherrytini' },

  // Sun Cup 2021
  { eventId: 'suncup-2021', category: 'Best Live Resin Dab', rank: 1, winnerName: 'Orange State Cannabis', entryName: 'Orange State Kush' },
  { eventId: 'suncup-2021', category: 'Best Live Resin Dab', rank: 2, winnerName: 'Canna Organix', entryName: 'Sunset Sherbert' },
  { eventId: 'suncup-2021', category: 'Best Live Resin Dab', rank: 3, winnerName: 'Sun Kissed Cannabis', entryName: 'Frankenstein' },
  { eventId: 'suncup-2021', category: 'Best Dab', rank: 1, winnerName: 'Three Rivers Cannabis', entryName: 'Trippin Glue' },

  // FullMoon Sesh Cape Town 2025
{ eventId: 'fms-ct-2025', category: 'Hash Rosin', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'Cotton Candy Grapes 12' },
{ eventId: 'fms-ct-2025', category: 'Hash Rosin', rank: 2, winnerName: 'The Real Cannabis Chris', entryName: 'Guava Pie 2' },
{ eventId: 'fms-ct-2025', category: 'Hash Rosin', rank: 3, winnerName: 'Hash Lab', entryName: 'Slurry Cane' },
{ eventId: 'fms-ct-2025', category: 'Ice Hash', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'GUAVA EMPANADA DE PIÑA 22' },
{ eventId: 'fms-ct-2025', category: 'Ice Hash', rank: 2, winnerName: 'Black Flag Genetics', entryName: 'BANANA WIFI' },
{ eventId: 'fms-ct-2025', category: 'Ice Hash', rank: 3, winnerName: 'Fullmelt Filtration', entryName: 'BLUE CHEESE 120U PIATELLA' },
{ eventId: 'fms-ct-2025', category: 'Dry Hash', rank: 1, winnerName: 'Dave\'s Dabs', entryName: 'Banana Cake' },
{ eventId: 'fms-ct-2025', category: 'Dry Hash', rank: 2, winnerName: 'Pandemic Genetics', entryName: 'Satoshi' },

// FullMoon Sesh Barcelona Special Edition 2025
{ eventId: 'fms-bcn-se-2025', category: 'Ice Hash', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'GUAPA EMPANADA DE PIÑA' },
{ eventId: 'fms-bcn-se-2025', category: 'Ice Hash', rank: 2, winnerName: 'The Baked Taters', entryName: 'DEATH BY BOOF' },
{ eventId: 'fms-bcn-se-2025', category: 'Ice Hash', rank: 3, winnerName: 'ITSABOUTTERPS', entryName: 'RAINBOW CALIPPO' },
{ eventId: 'fms-bcn-se-2025', category: 'Hash Rosin', rank: 1, winnerName: 'JTOWN FUNK GENETICS', entryName: 'AMARETTO BLACK' },
{ eventId: 'fms-bcn-se-2025', category: 'Hash Rosin', rank: 2, winnerName: 'The Real Cannabis Chris', entryName: 'GUAPA PIE' },
{ eventId: 'fms-bcn-se-2025', category: 'Hash Rosin', rank: 3, winnerName: ['Samurai Klan', 'Space Farm'], entryName: 'CZ' },

// FullMoon Sesh Bangkok 2025
{ eventId: 'fms-bkk-2025', category: 'Dry Hash', rank: 1, winnerName: ['Sweed Dreams Thai', 'Chat-GPTHC'], entryName: 'SUPER BOOF' },
{ eventId: 'fms-bkk-2025', category: 'Dry Hash', rank: 2, winnerName: ['Sweed Dreams Thai', 'Chat-GPTHC'], entryName: 'MELLOWZ' },
{ eventId: 'fms-bkk-2025', category: 'Dry Hash', rank: 3, winnerName: 'Growthfarm', entryName: 'DIRTY GIRLS (GMO × RUNTZ)' },
{ eventId: 'fms-bkk-2025', category: 'Ice Hash', rank: 1, winnerName: ['Chi Samui', 'Made with Magic', 'The Cure'], entryName: 'PINK STARFRUIT' },
{ eventId: 'fms-bkk-2025', category: 'Ice Hash', rank: 2, winnerName: 'WOWJACKFARM', entryName: 'MARMELADOZ' },
{ eventId: 'fms-bkk-2025', category: 'Ice Hash', rank: 3, winnerName: 'Black Market', entryName: 'JELLY DONUTZ' },
{ eventId: 'fms-bkk-2025', category: 'Hash Rosin', rank: 1, winnerName: 'The Real Cannabis Chris', entryName: 'GUAPA PIE 2' },
{ eventId: 'fms-bkk-2025', category: 'Hash Rosin', rank: 2, winnerName: 'Black Market', entryName: 'Zkittlez' },
{ eventId: 'fms-bkk-2025', category: 'Hash Rosin', rank: 3, winnerName: 'Mary Moonlight', entryName: 'BARBARA SHERBERT' },

// FullMoon Sesh Buenos Aires 2025
{ eventId: 'fms-ba-2025', category: 'Dry Hash', rank: 1, winnerName: 'Manu Sinsolvente', entryName: 'The Washer' },
{ eventId: 'fms-ba-2025', category: 'Ice Hash', rank: 1, winnerName: 'Colombia Exoticz', entryName: 'Diamond Runts' },
{ eventId: 'fms-ba-2025', category: 'Hash Rosin', rank: 1, winnerName: 'Colombia Exoticz', entryName: 'Papaya Piñas' },
{ eventId: 'fms-ba-2025', category: 'Hash Rosin', rank: 2, winnerName: 'Alexander de Hisens', entryName: 'Xolo' },
{ eventId: 'fms-ba-2025', category: 'Hash Rosin', rank: 3, winnerName: 'Guille Naesa', entryName: 'Apples × Bananas' },

// FullMoon Sesh Prague 2024
{ eventId: 'fms-prague-2024', category: 'Dry Hash', rank: 1, winnerName: 'WHITE FARMZ', entryName: 'YOSEMITE' },
{ eventId: 'fms-prague-2024', category: 'Dry Hash', rank: 2, winnerName: 'FAMILY FARMZ', entryName: 'CALIFORNIA BLACK ROSE × JET A' },
{ eventId: 'fms-prague-2024', category: 'Dry Hash', rank: 3, winnerName: 'CANNA PAN', entryName: 'ACAIBERRRY × K.MINTS × RUNTZ' },
{ eventId: 'fms-prague-2024', category: 'Ice Hash', rank: 1, winnerName: 'CIUBY', entryName: 'Z UNCLE' },
{ eventId: 'fms-prague-2024', category: 'Ice Hash', rank: 2, winnerName: 'SUPERSAYAN FARM', entryName: 'BIG APPLE' },
{ eventId: 'fms-prague-2024', category: 'Ice Hash', rank: 3, winnerName: 'LA KALADA', entryName: 'ORANGE Z × DOLATO' },
{ eventId: 'fms-prague-2024', category: 'Rosin', rank: 1, winnerName: 'LA KALADA', entryName: 'BLUE PAPAYA' },
{ eventId: 'fms-prague-2024', category: 'Rosin', rank: 2, winnerName: 'SNICKLEFRITZ ROSIN', entryName: 'Z-HEAD×STARDUST 36' },
{ eventId: 'fms-prague-2024', category: 'Rosin', rank: 3, winnerName: 'SMALL BATCH MELTS', entryName: 'GRAPE SODA' },

// FullMoon Sesh Los Angeles 2024
{ eventId: 'fms-la-2024', category: 'Hash Rosin', rank: 1, winnerName: 'Trichome Tortoise', entryName: 'Ze Boof' },
{ eventId: 'fms-la-2024', category: 'Hash Rosin', rank: 2, winnerName: 'Marc Feel Good', entryName: 'Tropaya' },
{ eventId: 'fms-la-2024', category: 'Hash Rosin', rank: 3, winnerName: 'Exotic M.O.B', entryName: 'Show G' },
{ eventId: 'fms-la-2024', category: 'Ice Hash', rank: 1, winnerName: 'Trichome Tortoise', entryName: 'Ze Boof' },
{ eventId: 'fms-la-2024', category: 'Ice Hash', rank: 2, winnerName: 'The Real Cannabis Chris', entryName: 'GP2' },
{ eventId: 'fms-la-2024', category: 'Ice Hash', rank: 3, winnerName: 'The Real Cannabis Chris', entryName: 'GP22' },

// FullMoon Sesh Madrid 2024
{ eventId: 'fms-madrid-2024', category: 'Solventless', rank: 1, winnerName: 'La Sagrada Farm', entryName: 'Rainbow Belt 5 × Zkittlez' },
{ eventId: 'fms-madrid-2024', category: 'Solventless', rank: 2, winnerName: 'Swabian Extracts', entryName: 'Blueberry Tarts' },
{ eventId: 'fms-madrid-2024', category: 'Solventless', rank: 3, winnerName: 'MM Extracts', entryName: 'GMO × Z-Head' },
{ eventId: 'fms-madrid-2024', category: 'Ice Hash', rank: 1, winnerName: 'The Grateful Seeds', entryName: 'Strawmelon' },
{ eventId: 'fms-madrid-2024', category: 'Ice Hash', rank: 2, winnerName: 'Santa Catalina', entryName: 'Brandy Wine' },
{ eventId: 'fms-madrid-2024', category: 'Ice Hash', rank: 3, winnerName: 'Supersayan Farm', entryName: 'Straw. Banana' },
{ eventId: 'fms-madrid-2024', category: 'Solvent', rank: 1, winnerName: 'Janara Labs', entryName: 'Chem Mania' },
{ eventId: 'fms-madrid-2024', category: 'Solvent', rank: 2, winnerName: 'Mad Bear Extracts', entryName: 'Pink Lychee' },
{ eventId: 'fms-madrid-2024', category: 'Solvent', rank: 3, winnerName: 'Biggie Extracts', entryName: 'Mac Beach' },

];
