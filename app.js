(function () {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const peso = n => '₱' + n.toLocaleString('en-PH');

  const PRODUCTS = {"treats": {"name": "Oven-Baked Training Treats", "tag": "Treats", "pet": "dog", "price": 249, "unit": "250g bag", "bestFor": "Puppies and adult dogs in training", "long": "Small, soft rounds that are easy to break up and quick to eat, so you can reward good behaviour without slowing a training session down. Keep a handful in your pocket for walks, recall practice and new tricks.", "points": ["250g bag", "Bite-size, and easy to break smaller for little mouths", "Best used as a reward, not a full meal"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p1b\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#E8A06E\"/><stop offset=\".6\" stop-color=\"#D9824E\"/><stop offset=\"1\" stop-color=\"#B8622F\"/></linearGradient>\n<linearGradient id=\"p1t\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#D9A266\"/><stop offset=\"1\" stop-color=\"#A9703A\"/></linearGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"90\" rx=\"32\" ry=\"4\" fill=\"#1B3C45\" opacity=\".16\"/>\n<rect x=\"22\" y=\"26\" width=\"56\" height=\"62\" rx=\"7\" fill=\"url(#p1b)\"/>\n<rect x=\"20\" y=\"17\" width=\"60\" height=\"14\" rx=\"3\" fill=\"url(#p1t)\"/>\n<g stroke=\"#F5F5DC\" stroke-opacity=\".45\" stroke-width=\"1.2\" stroke-linecap=\"round\">\n<path d=\"M28 20v8M35 20v8M42 20v8M49 20v8M56 20v8M63 20v8M70 20v8\"/>\n</g>\n<rect x=\"31\" y=\"42\" width=\"38\" height=\"38\" rx=\"7\" fill=\"#F5F5DC\"/>\n<rect x=\"31\" y=\"42\" width=\"38\" height=\"38\" rx=\"7\" fill=\"none\" stroke=\"#25505B\" stroke-opacity=\".18\"/>\n<g fill=\"#D9824E\">\n<rect x=\"40\" y=\"54\" width=\"20\" height=\"7\" rx=\"3.5\"/>\n<circle cx=\"40\" cy=\"54.5\" r=\"4\"/><circle cx=\"40\" cy=\"60.5\" r=\"4\"/>\n<circle cx=\"60\" cy=\"54.5\" r=\"4\"/><circle cx=\"60\" cy=\"60.5\" r=\"4\"/>\n</g>\n<rect x=\"38\" y=\"68\" width=\"24\" height=\"3\" rx=\"1.5\" fill=\"#25505B\" opacity=\".65\"/>\n<rect x=\"43\" y=\"73\" width=\"14\" height=\"2.5\" rx=\"1.25\" fill=\"#25505B\" opacity=\".35\"/>\n<rect x=\"25\" y=\"29\" width=\"4\" height=\"55\" rx=\"2\" fill=\"#fff\" opacity=\".22\"/>\n\n                            </svg>"}, "rope": {"name": "Braided Rope Tugger", "tag": "Toys", "pet": "dog", "price": 199, "unit": "each", "bestFor": "Playful, energetic dogs", "long": "A thick braided rope with a knot at each end, made for tug-of-war and chewing. It gives your dog a good grip for games with you, and something to work off energy on when you are busy.", "points": ["Knotted ends for a secure grip", "Good for tug games and solo chewing", "Supervise play and replace it once it starts to fray"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<radialGradient id=\"p2k\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#F1A877\"/><stop offset=\"1\" stop-color=\"#C4682F\"/></radialGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"90\" rx=\"34\" ry=\"4\" fill=\"#1B3C45\" opacity=\".14\"/>\n<g stroke-linecap=\"round\" fill=\"none\">\n<path id=\"p2r\" d=\"M24 74C36 70 40 54 50 50S68 36 76 27\" stroke=\"#3E7F8F\" stroke-width=\"15\"/>\n<path d=\"M24 74C36 70 40 54 50 50S68 36 76 27\" stroke=\"#8CC3CF\" stroke-width=\"15\" stroke-dasharray=\"3.5 5.5\" stroke-linecap=\"butt\"/>\n<path d=\"M24 74C36 70 40 54 50 50S68 36 76 27\" stroke=\"#25505B\" stroke-width=\"15\" stroke-dasharray=\"1.2 7.8\" stroke-dashoffset=\"2\" stroke-linecap=\"butt\" opacity=\".55\"/>\n<path d=\"M22 69C34 65 38 49 48 45S66 31 74 22\" stroke=\"#fff\" stroke-width=\"2.4\" opacity=\".28\"/>\n</g>\n<g stroke=\"#C98A4B\" stroke-width=\"2\" stroke-linecap=\"round\">\n<path d=\"M14 82l-5 7M18 85l-3 8M10 78l-6 5\"/>\n<path d=\"M84 20l5-7M80 17l3-8M88 24l6-5\"/>\n</g>\n<circle cx=\"19\" cy=\"79\" r=\"10\" fill=\"url(#p2k)\"/>\n<circle cx=\"81\" cy=\"22\" r=\"10\" fill=\"url(#p2k)\"/>\n<g fill=\"none\" stroke=\"#8C4A1E\" stroke-opacity=\".5\" stroke-width=\"1.4\" stroke-linecap=\"round\">\n<path d=\"M13 76c4 1 8 4 10 8M14 81c3 0 6 2 8 4\"/>\n<path d=\"M75 19c4 1 8 4 10 8M76 24c3 0 6 2 8 4\"/>\n</g>\n\n                            </svg>"}, "ball": {"name": "Squeaky Tennis Ball Set", "tag": "Toys", "pet": "dog", "price": 179, "unit": "pack of 3", "bestFor": "Dogs who love to fetch", "long": "Three bouncy balls with a squeaker inside, made for fetch and chase. Keep one in your bag and one at home so there is always a game ready.", "points": ["Pack of 3", "Squeaker inside for extra excitement", "Choose a ball too big to swallow for your dog, and supervise play"], "svg": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\">\n<defs><radialGradient id=\"n1g\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#EEF39A\"/><stop offset=\"1\" stop-color=\"#B4C73A\"/></radialGradient></defs>\n<ellipse cx=\"50\" cy=\"90\" rx=\"34\" ry=\"4\" fill=\"#1B3C45\" opacity=\".14\"/>\n<circle cx=\"40\" cy=\"58\" r=\"24\" fill=\"url(#n1g)\"/>\n<path d=\"M23 44Q36 58 25 74M57 44Q44 58 55 74\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.6\" stroke-linecap=\"round\" opacity=\".9\"/>\n<circle cx=\"72\" cy=\"72\" r=\"16\" fill=\"url(#n1g)\"/>\n<path d=\"M61 62Q70 72 62 83M83 62Q74 72 82 83\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.2\" stroke-linecap=\"round\" opacity=\".9\"/>\n<path d=\"M28 44c4-6 10-9 16-9\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".5\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>"}, "collar": {"name": "Adjustable Comfort Collar", "tag": "Collars & leashes", "pet": "dog", "price": 329, "unit": "set", "bestFor": "Growing puppies through to adult dogs", "long": "A padded, adjustable collar paired with a matching leash. The strap adjusts as your puppy grows, and the soft padding keeps longer walks comfortable for both of you.", "points": ["Collar and leash sold together as one set", "Adjustable strap to fit as your dog grows", "Check the fit: you should be able to slide two fingers under the collar"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p3c\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3C7080\"/><stop offset=\"1\" stop-color=\"#1B3C45\"/></linearGradient>\n<linearGradient id=\"p3b\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F0CB7E\"/><stop offset=\"1\" stop-color=\"#B9873A\"/></linearGradient>\n<radialGradient id=\"p3t\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#F1A877\"/><stop offset=\"1\" stop-color=\"#C4682F\"/></radialGradient>\n</defs>\n<ellipse cx=\"46\" cy=\"93\" rx=\"30\" ry=\"3.5\" fill=\"#1B3C45\" opacity=\".14\"/>\n<path d=\"M78 46C96 50 95 80 80 85\" fill=\"none\" stroke=\"#6FA8B5\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n<ellipse cx=\"72\" cy=\"87\" rx=\"10\" ry=\"5.5\" fill=\"none\" stroke=\"#6FA8B5\" stroke-width=\"4\" transform=\"rotate(-12 72 87)\"/>\n<ellipse cx=\"46\" cy=\"44\" rx=\"31\" ry=\"25\" fill=\"none\" stroke=\"url(#p3c)\" stroke-width=\"10\"/>\n<ellipse cx=\"46\" cy=\"44\" rx=\"31\" ry=\"25\" fill=\"none\" stroke=\"#F5F5DC\" stroke-opacity=\".6\" stroke-width=\"1.2\" stroke-dasharray=\"2.2 3\" transform=\"translate(0 0) scale(1)\"/>\n<ellipse cx=\"46\" cy=\"42.5\" rx=\"31\" ry=\"23.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".16\" stroke-width=\"2\"/>\n<rect x=\"38\" y=\"12\" width=\"16\" height=\"13\" rx=\"3\" fill=\"none\" stroke=\"url(#p3b)\" stroke-width=\"3\"/>\n<path d=\"M46 14v9\" stroke=\"url(#p3b)\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>\n<circle cx=\"78\" cy=\"46\" r=\"3.6\" fill=\"url(#p3b)\"/>\n<circle cx=\"46\" cy=\"72\" r=\"2.6\" fill=\"none\" stroke=\"url(#p3b)\" stroke-width=\"1.8\"/>\n<circle cx=\"46\" cy=\"82\" r=\"9\" fill=\"url(#p3t)\"/>\n<g fill=\"#F5F5DC\">\n<ellipse cx=\"46\" cy=\"84.5\" rx=\"3.4\" ry=\"2.8\"/>\n<circle cx=\"41.8\" cy=\"80.8\" r=\"1.3\"/><circle cx=\"46\" cy=\"79.3\" r=\"1.3\"/><circle cx=\"50.2\" cy=\"80.8\" r=\"1.3\"/>\n</g>\n\n                            </svg>"}, "bed": {"name": "Plush Donut Bed, Medium", "tag": "Beds", "pet": "dog", "price": 1150, "unit": "each", "bestFor": "Medium dogs that love to curl up", "long": "A round bed with a high, plush rim and a cushioned centre. Dogs that like to curl up or rest their chin on something soft tend to settle into a donut shape quickly.", "points": ["Medium size", "Raised rim to rest head and neck on", "Soft, cushioned centre for long naps"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p4r\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#DCE8EA\"/><stop offset=\"1\" stop-color=\"#A3BCC2\"/></linearGradient>\n<linearGradient id=\"p4i\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#B7CBD0\"/><stop offset=\"1\" stop-color=\"#EEF4F5\"/></linearGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"86\" rx=\"40\" ry=\"5\" fill=\"#1B3C45\" opacity=\".16\"/>\n<ellipse cx=\"50\" cy=\"66\" rx=\"42\" ry=\"24\" fill=\"#7E979E\"/>\n<ellipse cx=\"50\" cy=\"58\" rx=\"42\" ry=\"24\" fill=\"url(#p4r)\"/>\n<ellipse cx=\"50\" cy=\"58\" rx=\"25\" ry=\"12.5\" fill=\"url(#p4i)\"/>\n<ellipse cx=\"50\" cy=\"56.5\" rx=\"25\" ry=\"11.5\" fill=\"none\" stroke=\"#7E979E\" stroke-opacity=\".5\" stroke-width=\"1.5\"/>\n<g fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\">\n<path d=\"M14 52c4-10 14-18 28-21\" stroke-opacity=\".6\" stroke-width=\"3\"/>\n<path d=\"M20 70c8 8 20 11 32 10\" stroke=\"#5F7E86\" stroke-opacity=\".35\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"/>\n<path d=\"M62 74c10-1 20-5 26-12\" stroke=\"#5F7E86\" stroke-opacity=\".35\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"/>\n</g>\n<g fill=\"#D9824E\" opacity=\".9\">\n<ellipse cx=\"50\" cy=\"75\" rx=\"3.2\" ry=\"2.6\"/>\n<circle cx=\"45.8\" cy=\"71.6\" r=\"1.3\"/><circle cx=\"50\" cy=\"70.3\" r=\"1.3\"/><circle cx=\"54.2\" cy=\"71.6\" r=\"1.3\"/>\n</g>\n\n                            </svg>"}, "dental": {"name": "Enzymatic Dental Chews", "tag": "Dental care", "pet": "dog", "price": 279, "unit": "pack of 12", "bestFor": "Adult dogs. Ask your vet about puppies and seniors.", "long": "Ridged chews made to support everyday tooth care. Offering one a day gives your dog something satisfying to chew and makes dental care part of the routine.", "points": ["Pack of 12", "Ridged texture", "Not a replacement for brushing or regular vet check-ups"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p5a\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F8DDBE\"/><stop offset=\"1\" stop-color=\"#E3A872\"/></linearGradient>\n<linearGradient id=\"p5b\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#E8996A\"/><stop offset=\"1\" stop-color=\"#BA6633\"/></linearGradient>\n<linearGradient id=\"p5c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#8BBCC8\"/><stop offset=\"1\" stop-color=\"#4E8796\"/></linearGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"88\" rx=\"34\" ry=\"4\" fill=\"#1B3C45\" opacity=\".14\"/>\n<g transform=\"rotate(-24 50 52)\">\n<rect x=\"20\" y=\"30\" width=\"60\" height=\"15\" rx=\"7.5\" fill=\"url(#p5c)\"/>\n<g stroke=\"#1B3C45\" stroke-opacity=\".22\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M32 32l-3 11M40 32l-3 11M48 32l-3 11M56 32l-3 11M64 32l-3 11M72 32l-3 11\"/></g>\n<rect x=\"24\" y=\"32\" width=\"52\" height=\"3\" rx=\"1.5\" fill=\"#fff\" opacity=\".3\"/>\n</g>\n<g transform=\"rotate(8 50 54)\">\n<rect x=\"20\" y=\"47\" width=\"60\" height=\"15\" rx=\"7.5\" fill=\"url(#p5b)\"/>\n<g stroke=\"#5A2C10\" stroke-opacity=\".25\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M32 49l-3 11M40 49l-3 11M48 49l-3 11M56 49l-3 11M64 49l-3 11M72 49l-3 11\"/></g>\n<rect x=\"24\" y=\"49\" width=\"52\" height=\"3\" rx=\"1.5\" fill=\"#fff\" opacity=\".28\"/>\n</g>\n<g transform=\"rotate(-6 50 72)\">\n<rect x=\"18\" y=\"65\" width=\"64\" height=\"16\" rx=\"8\" fill=\"url(#p5a)\"/>\n<g stroke=\"#8C5A32\" stroke-opacity=\".25\" stroke-width=\"1.6\" stroke-linecap=\"round\"><path d=\"M30 67l-3 12M38 67l-3 12M46 67l-3 12M54 67l-3 12M62 67l-3 12M70 67l-3 12\"/></g>\n<rect x=\"22\" y=\"67\" width=\"56\" height=\"3\" rx=\"1.5\" fill=\"#fff\" opacity=\".45\"/>\n</g>\n<g fill=\"#fff\"><path d=\"M82 14l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z\" opacity=\".95\"/><path d=\"M16 28l1.4 4 4 1.4-4 1.4-1.4 4-1.4-4-4-1.4 4-1.4Z\" fill=\"#6FA8B5\"/></g>\n\n                            </svg>"}, "wand": {"name": "Feather Wand for Cats", "tag": "Toys", "pet": "cat", "price": 159, "unit": "each", "bestFor": "Kittens and active adult cats", "long": "A flexible wand with a bundle of feathers that flutter and dart like prey. Ideal for short, high-energy play sessions that let your cat stalk, chase and pounce.", "points": ["Mixed-colour feathers", "Flexible wand for darting, unpredictable movement", "Put it away after play, as the string can be a hazard when unsupervised"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p6s\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#A9703A\"/><stop offset=\"1\" stop-color=\"#D9A266\"/></linearGradient>\n<linearGradient id=\"p6a\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#8BBCC8\"/><stop offset=\"1\" stop-color=\"#4E8796\"/></linearGradient>\n<linearGradient id=\"p6b\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#F8DDBE\"/><stop offset=\"1\" stop-color=\"#E0A06A\"/></linearGradient>\n<linearGradient id=\"p6c\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#E8996A\"/><stop offset=\"1\" stop-color=\"#BA6633\"/></linearGradient>\n<radialGradient id=\"p6g\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#F0CB7E\"/><stop offset=\"1\" stop-color=\"#B9873A\"/></radialGradient>\n</defs>\n<ellipse cx=\"42\" cy=\"92\" rx=\"26\" ry=\"3.5\" fill=\"#1B3C45\" opacity=\".13\"/>\n<path d=\"M18 86L58 42\" stroke=\"url(#p6s)\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<path d=\"M18 86L31 72\" stroke=\"#25505B\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<path d=\"M22 82l6-6.5\" stroke=\"#6FA8B5\" stroke-width=\"1.4\" stroke-linecap=\"round\" opacity=\".7\"/>\n<path d=\"M58 42C62 36 66 40 70 36\" fill=\"none\" stroke=\"#6b6154\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n<g stroke-linejoin=\"round\">\n<g transform=\"translate(70 37) rotate(-8)\"><path d=\"M0 0C-7-7-6-19 0-30 6-19 7-7 0 0Z\" fill=\"url(#p6a)\"/><path d=\"M0 0V-28\" stroke=\"#1B3C45\" stroke-opacity=\".4\" stroke-width=\"1\"/></g>\n<g transform=\"translate(70 37) rotate(62)\"><path d=\"M0 0C-7-7-6-19 0-30 6-19 7-7 0 0Z\" fill=\"url(#p6c)\"/><path d=\"M0 0V-28\" stroke=\"#5A2C10\" stroke-opacity=\".4\" stroke-width=\"1\"/></g>\n<g transform=\"translate(70 37) rotate(30)\"><path d=\"M0 0C-8-8-7-22 0-34 7-22 8-8 0 0Z\" fill=\"url(#p6b)\"/><path d=\"M0 0V-32\" stroke=\"#8C5A32\" stroke-opacity=\".45\" stroke-width=\"1\"/><path d=\"M0-8l-4-4M0-14l-4.5-4M0-20l-3.5-4M0-8l4-4M0-14l4.5-4M0-20l3.5-4\" stroke=\"#8C5A32\" stroke-opacity=\".25\" stroke-width=\".8\" stroke-linecap=\"round\"/></g>\n</g>\n<circle cx=\"70\" cy=\"37\" r=\"3.6\" fill=\"url(#p6g)\"/>\n\n                            </svg>"}, "mouse": {"name": "Plush Mouse Toys", "tag": "Toys", "pet": "cat", "price": 129, "unit": "pack of 3", "bestFor": "Kittens and adult cats who love to hunt", "long": "Three soft mice, sized for batting across the floor, pouncing on and carrying around the house. Easy to scatter around for a bit of independent play.", "points": ["Pack of 3", "Soft and light, easy to carry", "Replace any toy that starts to come apart"], "svg": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\">\n<defs><linearGradient id=\"n2g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#9CC9D4\"/><stop offset=\"1\" stop-color=\"#4E8796\"/></linearGradient></defs>\n<ellipse cx=\"50\" cy=\"88\" rx=\"34\" ry=\"4\" fill=\"#1B3C45\" opacity=\".14\"/>\n<path d=\"M76 72c14 2 18-14 10-22\" fill=\"none\" stroke=\"#D9824E\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<ellipse cx=\"48\" cy=\"68\" rx=\"30\" ry=\"19\" fill=\"url(#n2g)\"/>\n<circle cx=\"32\" cy=\"52\" r=\"9\" fill=\"#9CC9D4\"/><circle cx=\"32\" cy=\"52\" r=\"5\" fill=\"#F1C7A0\"/>\n<circle cx=\"48\" cy=\"49\" r=\"9\" fill=\"#9CC9D4\"/><circle cx=\"48\" cy=\"49\" r=\"5\" fill=\"#F1C7A0\"/>\n<circle cx=\"26\" cy=\"67\" r=\"2.4\" fill=\"#1B3C45\"/>\n<circle cx=\"17\" cy=\"72\" r=\"3.4\" fill=\"#D9824E\"/>\n<g stroke=\"#1B3C45\" stroke-opacity=\".45\" stroke-width=\"1.2\" stroke-linecap=\"round\"><path d=\"M20 70l-11-3M20 74l-11 3\"/></g>\n<path d=\"M40 56c8-4 18-4 26 1\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".4\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>\n</svg>"}, "scratcher": {"name": "Sisal Scratching Post", "tag": "Cat furniture", "pet": "cat", "price": 899, "unit": "each", "bestFor": "Kittens through to adult cats", "long": "A sisal-wrapped post on a wide, stable base with a toy hanging from the top. It gives your cat a proper place to stretch and scratch, and helps keep your sofa safe.", "points": ["Sisal rope wrap", "Wide base so it stays steady", "Hanging toy for play"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p8s\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#DDA868\"/><stop offset=\".55\" stop-color=\"#C98A4B\"/><stop offset=\"1\" stop-color=\"#9B6730\"/></linearGradient>\n<linearGradient id=\"p8p\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#B3C9CE\"/><stop offset=\"1\" stop-color=\"#7E979E\"/></linearGradient>\n<radialGradient id=\"p8k\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#F8DDBE\"/><stop offset=\"1\" stop-color=\"#D9824E\"/></radialGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"92\" rx=\"36\" ry=\"4\" fill=\"#1B3C45\" opacity=\".16\"/>\n<rect x=\"16\" y=\"76\" width=\"68\" height=\"14\" rx=\"6\" fill=\"url(#p8p)\"/>\n<rect x=\"20\" y=\"78\" width=\"60\" height=\"3\" rx=\"1.5\" fill=\"#fff\" opacity=\".35\"/>\n<rect x=\"42\" y=\"26\" width=\"16\" height=\"52\" fill=\"url(#p8s)\"/>\n<g stroke=\"#5A3A1A\" stroke-opacity=\".38\" stroke-width=\"1.3\">\n<path d=\"M42 31h16M42 35h16M42 39h16M42 43h16M42 47h16M42 51h16M42 55h16M42 59h16M42 63h16M42 67h16M42 71h16\"/>\n</g>\n<rect x=\"44\" y=\"26\" width=\"3\" height=\"52\" fill=\"#fff\" opacity=\".22\"/>\n<rect x=\"30\" y=\"18\" width=\"40\" height=\"10\" rx=\"5\" fill=\"url(#p8p)\"/>\n<rect x=\"34\" y=\"20\" width=\"32\" height=\"2.5\" rx=\"1.25\" fill=\"#fff\" opacity=\".35\"/>\n<path d=\"M63 28v20\" stroke=\"#6b6154\" stroke-width=\"1.3\" stroke-linecap=\"round\"/>\n<circle cx=\"63\" cy=\"54\" r=\"7\" fill=\"url(#p8k)\"/>\n<path d=\"M58.5 51c2-2 5-3 8-2\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".6\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>\n\n                            </svg>"}, "catbed": {"name": "Cozy Round Cat Bed", "tag": "Beds", "pet": "cat", "price": 749, "unit": "each", "bestFor": "Cats of every age who like to nestle", "long": "A snug round bed with a soft rim and a cushioned centre, sized for a cat to curl up in. Put it by a window or somewhere quiet and let your cat claim it.", "points": ["Soft rim for cuddling into", "Cushioned centre", "Wipe-clean care: check the label for washing instructions"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"n3r\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F8DDBE\"/><stop offset=\"1\" stop-color=\"#E3A872\"/></linearGradient>\n<linearGradient id=\"n3i\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#E0A06A\"/><stop offset=\"1\" stop-color=\"#FBEBD6\"/></linearGradient>\n</defs>\n<ellipse cx=\"50\" cy=\"86\" rx=\"40\" ry=\"5\" fill=\"#1B3C45\" opacity=\".16\"/>\n<ellipse cx=\"50\" cy=\"66\" rx=\"42\" ry=\"24\" fill=\"#B9783E\"/>\n<ellipse cx=\"50\" cy=\"58\" rx=\"42\" ry=\"24\" fill=\"url(#n3r)\"/>\n<ellipse cx=\"50\" cy=\"58\" rx=\"25\" ry=\"12.5\" fill=\"url(#n3i)\"/>\n<ellipse cx=\"50\" cy=\"56.5\" rx=\"25\" ry=\"11.5\" fill=\"none\" stroke=\"#B9783E\" stroke-opacity=\".5\" stroke-width=\"1.5\"/>\n<g fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\">\n<path d=\"M14 52c4-10 14-18 28-21\" stroke-opacity=\".6\" stroke-width=\"3\"/>\n<path d=\"M20 70c8 8 20 11 32 10\" stroke=\"#8C5A32\" stroke-opacity=\".35\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"/>\n<path d=\"M62 74c10-1 20-5 26-12\" stroke=\"#8C5A32\" stroke-opacity=\".35\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\"/>\n</g>\n<g fill=\"#25505B\" opacity=\".9\">\n<ellipse cx=\"50\" cy=\"75\" rx=\"3.2\" ry=\"2.6\"/>\n<circle cx=\"45.8\" cy=\"71.6\" r=\"1.3\"/><circle cx=\"50\" cy=\"70.3\" r=\"1.3\"/><circle cx=\"54.2\" cy=\"71.6\" r=\"1.3\"/>\n</g>\n\n                            </svg>"}, "catcollar": {"name": "Breakaway Bell Collar", "tag": "Collars & leashes", "pet": "cat", "price": 189, "unit": "each", "bestFor": "Kittens through to adult cats", "long": "A lightweight collar with a small bell, so you can hear where your cat is. The breakaway clasp is designed to release if the collar gets caught.", "points": ["Safety breakaway clasp", "Small bell", "Check the fit: you should be able to slide two fingers under the collar"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"n4c\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#E8996A\"/><stop offset=\"1\" stop-color=\"#B8622F\"/></linearGradient>\n<linearGradient id=\"n4b\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F0CB7E\"/><stop offset=\"1\" stop-color=\"#B9873A\"/></linearGradient>\n<radialGradient id=\"n4t\" cx=\".35\" cy=\".3\" r=\".9\"><stop offset=\"0\" stop-color=\"#F6DB8E\"/><stop offset=\"1\" stop-color=\"#B9873A\"/></radialGradient>\n</defs>\n<ellipse cx=\"46\" cy=\"93\" rx=\"30\" ry=\"3.5\" fill=\"#1B3C45\" opacity=\".14\"/>\n<ellipse cx=\"46\" cy=\"44\" rx=\"31\" ry=\"25\" fill=\"none\" stroke=\"url(#n4c)\" stroke-width=\"10\"/>\n<ellipse cx=\"46\" cy=\"44\" rx=\"31\" ry=\"25\" fill=\"none\" stroke=\"#F5F5DC\" stroke-opacity=\".6\" stroke-width=\"1.2\" stroke-dasharray=\"2.2 3\" transform=\"translate(0 0) scale(1)\"/>\n<ellipse cx=\"46\" cy=\"42.5\" rx=\"31\" ry=\"23.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".16\" stroke-width=\"2\"/>\n<rect x=\"38\" y=\"12\" width=\"16\" height=\"13\" rx=\"3\" fill=\"none\" stroke=\"url(#n4b)\" stroke-width=\"3\"/>\n<path d=\"M46 14v9\" stroke=\"url(#n4b)\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>\n<circle cx=\"78\" cy=\"46\" r=\"3.6\" fill=\"url(#n4b)\"/>\n<circle cx=\"46\" cy=\"72\" r=\"2.6\" fill=\"none\" stroke=\"url(#n4b)\" stroke-width=\"1.8\"/>\n<circle cx=\"46\" cy=\"82\" r=\"9\" fill=\"url(#n4t)\"/>\n<g fill=\"#F5F5DC\">\n<ellipse cx=\"46\" cy=\"84.5\" rx=\"3.4\" ry=\"2.8\"/>\n<circle cx=\"41.8\" cy=\"80.8\" r=\"1.3\"/><circle cx=\"46\" cy=\"79.3\" r=\"1.3\"/><circle cx=\"50.2\" cy=\"80.8\" r=\"1.3\"/>\n</g>\n\n                            </svg>"}, "joint": {"name": "Joint Support Supplement", "tag": "Senior care", "pet": "all", "price": 599, "unit": "bottle", "bestFor": "Senior dogs and cats", "long": "A daily supplement for pets who are slowing down. Made for older dogs and cats who need extra support with movement and everyday comfort. Speak with your vet before starting any supplement.", "points": ["For both dogs and cats", "One bottle", "Ask your vet how much is right for your pet"], "svg": "<svg aria-hidden=\"true\"\n                                viewBox=\"0 0 100 100\"\n                               \n                               \n                            >\n<defs>\n<linearGradient id=\"p7b\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#FFFFFF\"/><stop offset=\".6\" stop-color=\"#F1EBD6\"/><stop offset=\"1\" stop-color=\"#D9D0B3\"/></linearGradient>\n<linearGradient id=\"p7c\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#2F6372\"/><stop offset=\"1\" stop-color=\"#1B3C45\"/></linearGradient>\n<linearGradient id=\"p7l\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#2F6372\"/><stop offset=\"1\" stop-color=\"#1F4753\"/></linearGradient>\n</defs>\n<ellipse cx=\"46\" cy=\"90\" rx=\"30\" ry=\"4\" fill=\"#1B3C45\" opacity=\".16\"/>\n<rect x=\"24\" y=\"30\" width=\"44\" height=\"58\" rx=\"9\" fill=\"url(#p7b)\"/>\n<rect x=\"26\" y=\"14\" width=\"40\" height=\"18\" rx=\"4\" fill=\"url(#p7c)\"/>\n<g stroke=\"#fff\" stroke-opacity=\".22\" stroke-width=\"1.3\" stroke-linecap=\"round\"><path d=\"M32 18v10M38 18v10M44 18v10M50 18v10M56 18v10M62 18v10\"/></g>\n<rect x=\"24\" y=\"44\" width=\"44\" height=\"32\" fill=\"url(#p7l)\"/>\n<g fill=\"#F1C7A0\">\n<rect x=\"36\" y=\"53\" width=\"20\" height=\"6\" rx=\"3\"/>\n<circle cx=\"36\" cy=\"53.5\" r=\"3.6\"/><circle cx=\"36\" cy=\"58.5\" r=\"3.6\"/>\n<circle cx=\"56\" cy=\"53.5\" r=\"3.6\"/><circle cx=\"56\" cy=\"58.5\" r=\"3.6\"/>\n</g>\n<rect x=\"33\" y=\"66\" width=\"26\" height=\"2.8\" rx=\"1.4\" fill=\"#F5F5DC\" opacity=\".85\"/>\n<rect x=\"38\" y=\"71\" width=\"16\" height=\"2.2\" rx=\"1.1\" fill=\"#F5F5DC\" opacity=\".5\"/>\n<rect x=\"28\" y=\"33\" width=\"4\" height=\"52\" rx=\"2\" fill=\"#fff\" opacity=\".55\"/>\n<g transform=\"rotate(-18 82 84)\"><rect x=\"72\" y=\"80\" width=\"20\" height=\"8\" rx=\"4\" fill=\"#F1C7A0\"/><rect x=\"82\" y=\"80\" width=\"10\" height=\"8\" rx=\"4\" fill=\"#D9824E\"/></g>\n<circle cx=\"80\" cy=\"70\" r=\"4.6\" fill=\"#F5F5DC\" stroke=\"#25505B\" stroke-opacity=\".25\"/>\n\n                            </svg>"}};
  const FOR = { dog: 'For dogs', cat: 'For cats', all: 'For dogs and cats' };

  /* ---------- Helpers ---------- */
  function svgFor(id, suffix) {
    const markup = PRODUCTS[id].svg
      .replace(/(\sid=")([^"]+)"/g, '$1$2' + suffix + '"')
      .replace(/url\(#([^)]+)\)/g, 'url(#$1' + suffix + ')');
    const t = document.createElement('template');
    t.innerHTML = markup.trim();
    return t.content.firstElementChild;
  }

  const toastEl = $('#toast');
  let toastTimer;
  function toast(text) {
    toastEl.textContent = text;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function backdropClose(dlg) {
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  }

  /* ---------- Menu + header ---------- */
  const toggle = $('#menuToggle');
  const menu = $('#primaryNav');
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', menu.classList.toggle('open'));
  });

  const header = $('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Cart ---------- */
  const cartBtn = $('#cartBtn');
  const cartDialog = $('#cartDialog');
  const cartList = $('#cartList');
  const cartFoot = $('#cartFoot');
  const cartTotal = $('#cartTotal');
  const cartNote = $('#cartNote');

  let cart = {};
  try {
    const saved = JSON.parse(localStorage.getItem('ww-cart') || '{}');
    Object.keys(saved).forEach(k => { if (PRODUCTS[k] && saved[k] > 0) cart[k] = saved[k]; });
  } catch (err) { cart = {}; }

  function saveCart() {
    try { localStorage.setItem('ww-cart', JSON.stringify(cart)); } catch (err) { /* storage unavailable */ }
  }

  const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

  function renderCart() {
    const count = cartCount();
    cartBtn.textContent = 'Cart (' + count + ')';
    cartBtn.setAttribute('aria-label', 'Cart, ' + count + (count === 1 ? ' item' : ' items'));

    cartList.textContent = '';
    const keys = Object.keys(cart);
    cartFoot.hidden = keys.length === 0;
    cartNote.textContent = '';

    if (!keys.length) {
      const empty = document.createElement('div');
      empty.className = 'cart-empty';
      empty.innerHTML = '<p>Your cart is empty.</p><p>Add a treat, a toy or a cosy bed to get started.</p>';
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn btn-ghost';
      b.textContent = 'Keep shopping';
      b.addEventListener('click', () => cartDialog.close());
      empty.appendChild(b);
      cartList.appendChild(empty);
      cartTotal.textContent = peso(0);
      return;
    }

    let total = 0;
    keys.forEach(id => {
      const p = PRODUCTS[id], q = cart[id];
      total += p.price * q;

      const row = document.createElement('div');
      row.className = 'cart-row';
      row.dataset.id = id;

      const thumb = document.createElement('div');
      thumb.className = 'cart-thumb';
      thumb.appendChild(svgFor(id, '-c'));

      const info = document.createElement('div');
      info.className = 'cart-info';
      info.innerHTML =
        '<h3></h3><p class="cart-unit"></p>' +
        '<div class="qty qty-sm" role="group"><button type="button" data-act="minus">\u2212</button><output></output><button type="button" data-act="plus">+</button></div>';
      info.querySelector('h3').textContent = p.name;
      info.querySelector('.cart-unit').textContent = peso(p.price) + ' / ' + p.unit;
      info.querySelector('.qty').setAttribute('aria-label', 'Quantity of ' + p.name);
      const [minus, plus] = info.querySelectorAll('.qty button');
      minus.setAttribute('aria-label', 'Decrease quantity of ' + p.name);
      plus.setAttribute('aria-label', 'Increase quantity of ' + p.name);
      info.querySelector('output').textContent = q;

      const side = document.createElement('div');
      side.className = 'cart-side';
      const line = document.createElement('strong');
      line.textContent = peso(p.price * q);
      const rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'cart-remove';
      rm.dataset.act = 'remove';
      rm.textContent = 'Remove';
      rm.setAttribute('aria-label', 'Remove ' + p.name + ' from cart');
      side.append(line, rm);

      row.append(thumb, info, side);
      cartList.appendChild(row);
    });
    cartTotal.textContent = peso(total);
  }

  function addToCart(id, qty) {
    cart[id] = Math.min(99, (cart[id] || 0) + qty);
    saveCart();
    renderCart();
    cartBtn.classList.remove('bump');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('bump');
    toast('Added ' + (qty > 1 ? qty + ' \u00d7 ' : '') + PRODUCTS[id].name + ' to your cart');
  }

  cartList.addEventListener('click', e => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const id = btn.closest('.cart-row').dataset.id;
    const act = btn.dataset.act;
    if (act === 'plus') cart[id] = Math.min(99, cart[id] + 1);
    if (act === 'minus') cart[id] = cart[id] - 1;
    if (act === 'remove' || cart[id] <= 0) delete cart[id];
    saveCart();
    renderCart();
    if (!cartList.querySelector('.cart-row')) cartList.querySelector('.btn').focus();
  });

  $('#checkoutBtn').addEventListener('click', () => {
    cartNote.textContent = 'Checkout is not connected yet, so no order has been placed.';
  });
  cartBtn.addEventListener('click', () => cartDialog.showModal());
  $('#cartClose').addEventListener('click', () => cartDialog.close());
  backdropClose(cartDialog);

  /* ---------- Product details ---------- */
  const prodDialog = $('#prodDialog');
  const pdQty = $('#pdQty');
  let pdId = null, qty = 1;

  function setQty(n) {
    qty = Math.max(1, Math.min(99, n));
    pdQty.textContent = qty;
  }

  function openProduct(id) {
    const p = PRODUCTS[id];
    pdId = id;
    setQty(1);

    const media = $('#pdMedia');
    media.dataset.pet = p.pet;
    media.textContent = '';
    media.appendChild(svgFor(id, '-m'));

    $('#pdTag').textContent = p.tag;
    $('#pd-title').textContent = p.name;
    $('#pdFor').textContent = FOR[p.pet] + '. Best for: ' + p.bestFor;
    $('#pdDesc').textContent = p.long;

    const ul = $('#pdPoints');
    ul.textContent = '';
    p.points.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });

    $('#pdPrice').innerHTML = peso(p.price) + ' <span></span>';
    $('#pdPrice span').textContent = '/ ' + p.unit;
    $('#pdAdd').textContent = 'Add to cart';

    prodDialog.showModal();
    prodDialog.scrollTop = 0;
  }

  document.addEventListener('click', e => {
    const open = e.target.closest('.prod-open');
    if (open) { openProduct(open.dataset.id); return; }
    const add = e.target.closest('.prod-card .add');
    if (add) addToCart(add.dataset.id, 1);
  });

  $('#pdMinus').addEventListener('click', () => setQty(qty - 1));
  $('#pdPlus').addEventListener('click', () => setQty(qty + 1));

  let addedTimer;
  $('#pdAdd').addEventListener('click', e => {
    addToCart(pdId, qty);
    const b = e.currentTarget;
    b.textContent = 'Added to cart';
    clearTimeout(addedTimer);
    addedTimer = setTimeout(() => { b.textContent = 'Add to cart'; }, 1500);
  });
  $('#pdClose').addEventListener('click', () => prodDialog.close());
  backdropClose(prodDialog);

  renderCart();

  /* ---------- Product listing: filter + sort ---------- */
  const grid = $('#prodGrid');
  if (grid) {
    const cards = Array.from(grid.querySelectorAll('.prod-card'));
    const chips = $$('.chip');
    const sortSel = $('#sortSel');
    const count = $('#resultCount');
    const emptyMsg = $('#emptyMsg');
    let by = 'all', val = 'all';

    const order = c => Number(c.dataset.order);
    const price = c => Number(c.dataset.price);

    function apply() {
      let shown = 0;
      cards.forEach(c => {
        const ok = val === 'all' ||
          (by === 'tag' ? c.dataset.tag === val : (c.dataset.pet === val || c.dataset.pet === 'all'));
        c.hidden = !ok;
        if (ok) shown++;
      });

      const mode = sortSel ? sortSel.value : 'featured';
      cards.slice().sort((a, b) =>
        mode === 'low' ? price(a) - price(b) :
        mode === 'high' ? price(b) - price(a) :
        order(a) - order(b)
      ).forEach(c => grid.appendChild(c));

      if (count) count.textContent = 'Showing ' + shown + (shown === 1 ? ' product' : ' products');
      if (emptyMsg) emptyMsg.hidden = shown !== 0;
    }

    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.setAttribute('aria-pressed', x === c));
      by = c.dataset.by; val = c.dataset.value;
      apply();
    }));
    if (sortSel) sortSel.addEventListener('change', apply);
    apply();
  }

  /* ---------- Newsletter ---------- */
  const form = $('#nlForm');
  if (form) {
    const email = $('#nl-email'), msg = $('#nl-msg'), ok = $('#nlSuccess');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = email.value.trim();
      if (!v || !email.checkValidity()) {
        msg.textContent = v
          ? 'That email looks incomplete. Use a format like name@email.com.'
          : 'Enter your email address to sign up.';
        email.setAttribute('aria-invalid', 'true');
        email.focus();
        return;
      }
      const pet = form.querySelector('input[name=pet]:checked').value;
      $('#nlSuccessText').textContent =
        'Watch ' + v + ' for ' + (pet === 'both' ? 'dog and cat' : pet.slice(0, -1)) +
        ' care tips and new arrivals.';
      form.hidden = true;
      ok.hidden = false;
      ok.focus();
    });
    email.addEventListener('input', () => {
      msg.textContent = '';
      email.removeAttribute('aria-invalid');
    });
  }

  /* ---------- Contact form ---------- */
  const cform = $('#contactForm');
  if (cform) {
    const fields = ['cf-name', 'cf-email', 'cf-message'].map(id => document.getElementById(id));
    const cok = $('#cfSuccess');
    const errs = {
      'cf-name': 'Enter your name so we know who to reply to.',
      'cf-email': 'Enter an email in the format name@email.com.',
      'cf-message': 'Write a short message so we can help.'
    };
    cform.addEventListener('submit', e => {
      e.preventDefault();
      let first = null;
      fields.forEach(f => {
        const bad = !f.value.trim() || !f.checkValidity();
        document.getElementById(f.id + '-err').textContent = bad ? errs[f.id] : '';
        if (bad) { f.setAttribute('aria-invalid', 'true'); first = first || f; }
        else f.removeAttribute('aria-invalid');
      });
      if (first) { first.focus(); return; }
      $('#cfSuccessText').textContent =
        'Thanks, ' + fields[0].value.trim() + '. We will reply to ' + fields[1].value.trim() + '.';
      cform.hidden = true;
      cok.hidden = false;
      cok.focus();
    });
    fields.forEach(f => f.addEventListener('input', () => {
      document.getElementById(f.id + '-err').textContent = '';
      f.removeAttribute('aria-invalid');
    }));
  }
})();
