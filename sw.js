importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"7da0b998585a839e411f0b5aebfa221b","url":"feedback.html"},{"revision":"c35d5493ca26958a30a25e633711b08e","url":"index.html"},{"revision":"70f9fb6f05aa02642716f3c086d45490","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"4556c996baff0e820ac4010f2c47a113","url":"posttest.html"},{"revision":"539fde67672bd2533cb5871b8ab19912","url":"posttest.json"},{"revision":"e8dd34f3e8ae8d1a1da0753e7033e672","url":"pretest.html"},{"revision":"7d365860c91c5b728d83997101393ff7","url":"pretest.json"},{"revision":"48a444cb7838f9f2e49179a1deb8df3d","url":"procedure.html"},{"revision":"13068ee65ca8b4bd4b5ee8f16af0399e","url":"references.html"},{"revision":"7b5317df8b3bce3c60b8deff56afee72","url":"simulation.html"},{"revision":"f1366fe24d0bddcd8c540131424d119a","url":"simulation/css/exp1-ids.css"},{"revision":"d456e53d8beca7871ed85f89ad344190","url":"simulation/css/exp2-ids.css"},{"revision":"36976a00b29108de97b1e277b878c021","url":"simulation/css/exp3-ids.css"},{"revision":"ac727bc119452336a5dd92c58446a7e9","url":"simulation/css/exp4-ids.css"},{"revision":"75de35f9541318e916b9f441b5410531","url":"simulation/css/experiments-classes.css"},{"revision":"9bae6e2b29aa1a9f998eb7b8984d060a","url":"simulation/css/header.css"},{"revision":"22582c12489ca010d27c8e85c8375dd9","url":"simulation/css/main-content.css"},{"revision":"d8e1a3b8fcaef2bef70a56225d3dca52","url":"simulation/css/starter.css"},{"revision":"aa3674ba942cd4c7a240366ace75ec30","url":"simulation/html/exp-list.html"},{"revision":"71a467bd446e79cd4f9b0101557c59ac","url":"simulation/html/experiments-files/exp1.html"},{"revision":"563432600db33c575868bdb001c592f0","url":"simulation/html/experiments-files/exp2.html"},{"revision":"226ad722d6fe724dc2a7f37ca4b6d878","url":"simulation/html/experiments-files/exp3.html"},{"revision":"4cb392efc6f827c51f8ee933f396c91f","url":"simulation/html/experiments-files/exp4.html"},{"revision":"5642c5200dae1a9d8bbc92027cb7930c","url":"simulation/html/starter-files/starter1.html"},{"revision":"b4baae226519a81f8dbf704c031947d0","url":"simulation/html/starter-files/starter2.html"},{"revision":"b8fc3a1f7f6d8bc9cbc789d2e27c51b1","url":"simulation/html/starter-files/starter3.html"},{"revision":"0f21d0e4177f4585ea007bf760760f57","url":"simulation/html/starter-files/starter4.html"},{"revision":"13abce1ecfaf63f7f233dd703559240e","url":"simulation/images/2h-pencil.png"},{"revision":"2da4af32d5f9d0b65c573062389b2e45","url":"simulation/images/3h-pencil.png"},{"revision":"1d54d63751f58957985de4fe7ef81f8d","url":"simulation/images/assembly.png"},{"revision":"0c17eae22cc570a5c7928c8f06c41125","url":"simulation/images/compass.png"},{"revision":"501cf31894d616938ae0678a1f3b0cfb","url":"simulation/images/dei.jpg"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"simulation/images/drawing board.png"},{"revision":"3fb485d360a6c47f83534e7d0b74ffdc","url":"simulation/images/exp-step3.png"},{"revision":"41bf5423ee75db1d769b5909f8f63426","url":"simulation/images/exp1Images/finalPng-step3.png"},{"revision":"18f4dc1a8275957d665747b053af9a6b","url":"simulation/images/exp1Images/png2-step3.png"},{"revision":"d5e54ceec32bd5c57048fe7fa1437fd8","url":"simulation/images/exp1Images/png3-step3.png"},{"revision":"6b9bdbd10af74f5d7fe24e0de33dcddb","url":"simulation/images/exp1Images/png4-step3.png"},{"revision":"ac1a2cf987edf5cacbac8cc96fa6c3e7","url":"simulation/images/exp2Images/finalPng-step3.png"},{"revision":"a9a3014b44731abdea82d87fb9189a49","url":"simulation/images/exp2Images/png11-step3.png"},{"revision":"e2c7da079d4048c703eb1d9fa6c10b64","url":"simulation/images/exp2Images/png2-step3.png"},{"revision":"f55e4bcc36e6d76772c26dbbe02ca2f7","url":"simulation/images/exp2Images/png3-step3.png"},{"revision":"a9a3014b44731abdea82d87fb9189a49","url":"simulation/images/exp2Images/png33-step3.png"},{"revision":"3631b26c32e0e0edd2c85fe6512be395","url":"simulation/images/exp2Images/png4-step3.png"},{"revision":"cbddf5baec9ce11ee4749243b71332cf","url":"simulation/images/exp2Images/png5-step3.png"},{"revision":"8c2a69cf230d7006aa00f04cffff4baa","url":"simulation/images/exp2Images/png6-step3.png"},{"revision":"9a1f49d0b346275e47216ba145d88082","url":"simulation/images/exp2Images/png66-step3.png"},{"revision":"70e07bfec76b12592e90c5213575ba97","url":"simulation/images/exp2Images/png7-step3.png"},{"revision":"cef22282f08ea81c9f78b21b9ba31837","url":"simulation/images/exp2Images/png8-step3.png"},{"revision":"e04e413298d817abaded7f281d49f6da","url":"simulation/images/exp3Images/45.png"},{"revision":"4be6a05f764d046d57796538a98a365f","url":"simulation/images/exp3Images/55.png"},{"revision":"4069ae79b71f78a1c23c6fe128c2b84f","url":"simulation/images/exp3Images/finalPng.png"},{"revision":"bb4eac4196a6f6b915b2d2e75854b8c0","url":"simulation/images/exp3Images/png2-step3.png"},{"revision":"e79b1ad322464515c3e196cd148ea121","url":"simulation/images/exp3Images/png3-step3.png"},{"revision":"6036eb6b1fed6a7a9c1e9beb8b22f71f","url":"simulation/images/exp3Images/png4-step3.png"},{"revision":"8d9e44017bd014b1da2d1d17fa7c1382","url":"simulation/images/exp3Images/png44-step3.png"},{"revision":"08fc013ae2380c806461c50cb5f22df9","url":"simulation/images/exp3Images/png5-step3.png"},{"revision":"c208e0eb506d2a61fca87ef8f2e689b0","url":"simulation/images/exp3Images/png6-step3.png"},{"revision":"8ccc0ea694946d754b3d91cf05e4220b","url":"simulation/images/exp3Images/png7-step3.png"},{"revision":"6bef2f2b4cce037f05f3531b0049d017","url":"simulation/images/exp3Images/png8-step3.png"},{"revision":"18f4dc1a8275957d665747b053af9a6b","url":"simulation/images/exp3Images/sample-png.png"},{"revision":"4abe2d1451e438b3ef70e1f04198d98b","url":"simulation/images/exp4Images/finalPng.png"},{"revision":"685c595c94a105c96ee106ea9a34bf0a","url":"simulation/images/exp4Images/png10-step3.png"},{"revision":"e02b39f13f8dea8593637a072144d7e5","url":"simulation/images/exp4Images/png11-step3.png"},{"revision":"673694baf552710fb079e9c8ab046f6d","url":"simulation/images/exp4Images/png2-step3.png"},{"revision":"3b71024975737131a520bfbfa0e692b7","url":"simulation/images/exp4Images/png3-step3.png"},{"revision":"d7ed400b315251891823dec822115867","url":"simulation/images/exp4Images/png4-step3.png"},{"revision":"8d4edf296b81c8a2ae2ccaf32c1a26b9","url":"simulation/images/exp4Images/png5-step3.png"},{"revision":"e231699ee0c552872544c6380c0e0c5d","url":"simulation/images/exp4Images/png6-step3.png"},{"revision":"b42092027a1b6c15c5401a00217ba31f","url":"simulation/images/exp4Images/png7-step3.png"},{"revision":"82add9d50abea3805a1fc15d1613d197","url":"simulation/images/exp4Images/png8-step3.png"},{"revision":"4889d36b72085778bbe167a6662ad4de","url":"simulation/images/exp4Images/png9-step3.png"},{"revision":"4373072dffe9ca0d441d3e8e81f5db73","url":"simulation/images/h-pencil.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"simulation/images/header.jpg"},{"revision":"96c8615dafdbaf35298156c639e3f93b","url":"simulation/images/header.png"},{"revision":"1f7df708f5ce00d05cec4e5e67631fb3","url":"simulation/images/instruments.png"},{"revision":"66f254ebb66ea8b708ab1236eda6ac83","url":"simulation/images/protector.png"},{"revision":"f02e024e1ac0b8aded2ac728c7ba067b","url":"simulation/images/starterImages/3d-clips.png"},{"revision":"ae839a247ddc5508067efbb51bb5c62a","url":"simulation/images/starterImages/downClips.png"},{"revision":"1e1e80bd95a2417652ffae6b7bb8d2df","url":"simulation/images/starterImages/drafter.png"},{"revision":"30369a410171a43ac81ac6a7683f2c2a","url":"simulation/images/starterImages/DRAFTER1.png"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"simulation/images/starterImages/drawing board.png"},{"revision":"97774410bc0067cdad78d360b21aa200","url":"simulation/images/starterImages/sheet.png"},{"revision":"4315055ecf484e5fad77a35791dd0334","url":"simulation/images/starterImages/small sheet.png"},{"revision":"631aa2eb78872725797dcc67243a447b","url":"simulation/images/starterImages/starter-png.png"},{"revision":"edde4462d0e33f8769e08276e5d528fb","url":"simulation/images/starterImages/upClips.png"},{"revision":"48b63a3dc7f03b6e2348313db3165e5a","url":"simulation/images/transbox.png"},{"revision":"b077dbe57c0348dd2a2e37711d6193d1","url":"simulation/index.html"},{"revision":"f23b4dd5c1bf35d1103ac2cbac1033b8","url":"simulation/js/exp1.js"},{"revision":"d6f05eac0d84d2cc0d2a3e9075ecc899","url":"simulation/js/exp2.js"},{"revision":"228c9e09fcf48d8fb4e4eeca2b0551c7","url":"simulation/js/exp3.js"},{"revision":"f45188aa883ba3e2f7cceb84d349bd86","url":"simulation/js/exp4.js"},{"revision":"9cafa7a6ff88322d88e6fe5a09874e49","url":"simulation/js/main.js"},{"revision":"e709e99e9224061846d6a788dc21a29b","url":"simulation/js/starter.js"},{"revision":"58cfd47c389d39966fb1fd4a525220fb","url":"theory.html"},{"revision":"7b18271ff60d9a03437907622529784c","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );