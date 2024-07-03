import { c as create_ssr_component, e as escape, d as createEventDispatcher, v as validate_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, l as each } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Octo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reverse = false } = $$props;
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  return `${reverse ? `<img src="${escape(base, true) + "/octo.png"}" alt="octo" class="h-[1em] inline align-[-0.1em]"> Octo` : `Octo <img src="${escape(base, true) + "/octo.png"}" alt="octo" class="h-[1em] inline align-[-0.1em]">`}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h1.svelte-2cm2hv.svelte-2cm2hv{font-size:min(max(50px, 6vw), 160px)}h2.svelte-2cm2hv.svelte-2cm2hv{font-size:min(max(50px, 6vw), 3rem)}.collapsed.svelte-2cm2hv.svelte-2cm2hv{height:8rem}.collapsed.svelte-2cm2hv h1.svelte-2cm2hv{padding-top:200%}.parallax.svelte-2cm2hv>use.svelte-2cm2hv{animation:svelte-2cm2hv-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}.parallax.svelte-2cm2hv>use.svelte-2cm2hv:nth-child(1){animation-delay:-2s;animation-duration:7s}.parallax.svelte-2cm2hv>use.svelte-2cm2hv:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax.svelte-2cm2hv>use.svelte-2cm2hv:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax.svelte-2cm2hv>use.svelte-2cm2hv:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes svelte-2cm2hv-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$3);
  return ` <div class="${[
    "w-full h-screen mb-0 flex flex-col items-center justify-center bg-gradient-to-b from-amber-500 to-amber-100 transition-all ease-in-out duration-1000 overflow-hidden relative svelte-2cm2hv",
    ""
  ].join(" ").trim()}"><div class="mx-4 md:mx-16 flex flex-col justify-center pb-32"><h1 class="leading-tight transition-all duration-1000 font-light svelte-2cm2hv"><span class="font-bold">${validate_component(Octo, "Octo").$$render($$result, { reverse: true }, {}, {})}:</span> An Open-Source Generalist Robot Policy</h1></div> <div class="h-32 w-full absolute bottom-0" data-svelte-h="svelte-rtr8ti"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="parallax svelte-2cm2hv"><use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(107, 124, 250, 0.7" class="svelte-2cm2hv"></use><use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(50, 82, 227, 0.5)" class="svelte-2cm2hv"></use><use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(107, 124, 250, 0.3)" class="svelte-2cm2hv"></use><use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(30, 74, 200, 0.8)" class="svelte-2cm2hv"></use></g></svg></div></div> ${``}`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const VideoCarousel_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".splide__pagination__page{background:rgb(51, 51, 51)}.splide__pagination__page.is-active{background:black}",
  map: null
};
const VideoCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { renderVideos = false } = $$props;
  const videoNames = [
    "out_ours_ur5_tiger",
    "out_cmu",
    "out_iliad",
    "out_ours_ur5_cloth",
    "out_fmb",
    "out_bridge",
    "out_rpt",
    "out_aloha",
    "out_google"
  ];
  const videoData = videoNames.map((name) => ({
    src: `videos/${name}.mp4`,
    image_src: `videos/${name}.jpg`,
    text: name.replaceAll("-", " ")
  }));
  let renderVideo = Array(videoData.length).fill(false);
  if ($$props.renderVideos === void 0 && $$bindings.renderVideos && renderVideos !== void 0)
    $$bindings.renderVideos(renderVideos);
  $$result.css.add(css$2);
  return `<div class="w-full flex justify-center" id="container">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        perPage: 3,
        perMove: 1,
        start: 0,
        autoplay: true,
        rewind: true,
        interval: 1e4,
        breakpoints: { 768: { perPage: 1 } }
      }
    },
    {},
    {
      default: () => {
        return `${each(videoData, (video, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${renderVideos && renderVideo[i] ? `<div class="px-2"><div class="rounded-lg overflow-hidden flex justify-center"><video class="w-full" disableremoteplayback muted webkit-playsinline playsinline loop ${"autoplay"} src="${escape(base, true) + "/" + escape(video.src, true)}" poster="${escape(base, true) + "/" + escape(video.image_src, true)}"></video> <span class="absolute bottom-0.5 right-3 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-15u5kmk">2x
							</span></div> </div>` : `<div class="px-2"><div class="rounded-lg overflow-hidden flex justify-center w-full"><img class="w-full" ${"autoplay"} src="${escape(base, true) + "/" + escape(video.image_src, true)}"></div> </div>`} `;
            }
          })}`;
        })}`;
      }
    }
  )} </div>`;
});
const CollapsibleCard_svelte_svelte_type_style_lang = "";
const Accordion_svelte_svelte_type_style_lang = "";
const AccordionItem_svelte_svelte_type_style_lang = "";
const Collapsible_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-15qhy11:hover .plus.svelte-15qhy11{text-decoration:underline}.plus.svelte-15qhy11.svelte-15qhy11{font-family:'Roboto Mono', monospace}",
  map: null
};
const Collapsible = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``}`;
  } while (!$$settled);
  return $$rendered;
});
const SideBySide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function lazy(isOpen, path) {
    return isOpen ? `${base}/videos/${path}.mp4` : "";
  }
  return `<div class="mt-8 md:ml-4 ml-1 text-left">${validate_component(Collapsible, "Collapsible").$$render($$result, {}, {}, {
    body: ({ isOpen }) => {
      return `<div slot="body" class="mt-2 flex flex-wrap justify-center items-center"><div class="flex flex-col max-w-[500px] mx-2 py-2"><div class="flex justify-center"><div class="flex flex-col"><div class="text-center pb-1 text-sm">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rpt_octo"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-ur1zmp"><a href="https://eai-vc.github.io/">VC-1</a></div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rpt_vc1"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-1ofs5j6">From Scratch</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rpt_scratch"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div></div></div> <div class="flex flex-col max-w-[500px] mx-2 py-2"><div class="flex justify-center"><div class="flex flex-col"><div class="text-center pb-1 text-sm">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_google_octo"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-du82fw">RT-1-X</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_google_rt1"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-q54n20">RT-2-X</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_google_rt2"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div></div></div> <div class="flex flex-col max-w-[500px] mx-2 py-2"><div class="flex justify-center"><div class="flex flex-col"><div class="text-center pb-1 text-sm">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_bridge"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-u6on9t">RT-1-X</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rt1_bridge"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div></div></div> <div class="flex flex-col max-w-[500px] mx-2 py-2"><div class="flex justify-center"><div class="flex flex-col"><div class="text-center pb-1 text-sm">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_ours_ur5_tiger"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-u6on9t">RT-1-X</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rt1_ur5_tiger"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div></div></div> <div class="flex flex-col max-w-[500px] mx-2 py-2"><div class="flex justify-center"><div class="flex flex-col"><div class="text-center pb-1 text-sm">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_ours_ur5_cloth"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div> <div class="flex flex-col pl-1"><div class="text-center pb-1 text-sm" data-svelte-h="svelte-u6on9t">RT-1-X</div> <div class="rounded-lg overflow-hidden relative"><video disableremoteplayback muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(isOpen, "out_rt1_ur5_cloth"), 0)}></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1ott00">2x</span></div></div></div></div></div>`;
    },
    header: () => {
      return `<h3 slot="header" class="text-2xl text-left" data-svelte-h="svelte-y2kkzw">Expand Side-by-Side Comparison Videos</h3>`;
    }
  })}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "th.svelte-ii6qa2.svelte-ii6qa2{font-weight:normal}tr.svelte-ii6qa2>td.svelte-ii6qa2:first-child{text-align:left}td.svelte-ii6qa2.svelte-ii6qa2{line-height:1rem}th.svelte-ii6qa2.svelte-ii6qa2{padding:0 0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderVideos = false;
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <div class="max-w-4xl w-full px-2 pt-4 flex flex-col items-center mx-auto" data-svelte-h="svelte-15a6sx8"> <div class="flex flex-col items-center text-xl"><span class="font-bold">Octo Model Team</span> <div class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-blue-500 underline-offset-2"><span class="px-2">Dibya Ghosh*<sup>,1</sup></span> <span class="px-2">Homer Walke*<sup>,1</sup></span> <span class="px-2">Karl Pertsch*<sup>,1,2</sup></span> <span class="px-2">Kevin Black*<sup>,1</sup></span> <span class="px-2">Oier Mees*<sup>,1</sup></span></div> <div class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-amber-500 underline-offset-2"><span class="px-2">Sudeep Dasari<sup>3</sup></span> <span class="px-2">Joey Hejna<sup>2</sup></span> <span class="px-2">Tobias Kreiman<sup>1</sup></span> <span class="px-2">Charles Xu<sup>1</sup></span> <span class="px-2">Jianlan Luo<sup>1</sup></span> <span class="px-2">You Liang Tan<sup>1</sup></span></div> <div class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-green-500 underline-offset-2"><span class="px-2">Lawrence Yunliang Chen<sup>1</sup></span> <span class="px-2">Pannag Sanketi<sup>4</sup></span> <span class="px-2">Quan Vuong<sup>4</sup></span> <span class="px-2">Ted Xiao<sup>4</sup></span> <span class="px-2">Dorsa Sadigh<sup>2</sup></span> <span class="px-2">Chelsea Finn<sup>2</sup></span> <span class="px-2">Sergey Levine<sup>1</sup></span></div> <div class="flex justify-center mt-4 mx-2 text-center">*denotes equal contribution, listed in alphabetical order</div> <div class="flex justify-center flex-wrap mt-4"><span class="px-4">1. UC Berkeley</span> <span class="px-4">2. Stanford University</span> <span class="px-4">3. Carnegie Mellon University</span> <span class="px-4">4. Google DeepMind</span></div></div>  <div class="flex w-full justify-between text-center pt-4 text-lg pb-4 mx-auto px-4"><div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="https://arxiv.org/pdf/2405.12213" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/documents.svg"}" alt="documents" class="w-16">
				Report</a></div> <div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="https://github.com/octo-models/octo" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/github-mark.svg"}" alt="code" class="w-16">
				Code</a></div> <div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="https://colab.research.google.com/drive/1z0vELj_lX9OWeoMG_WvXnQs43aPOEAhz?usp=sharing" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/colab2.svg"}" alt="colab" class="w-20">
				Colab</a></div> <div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="https://huggingface.co/rail-berkeley" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/weights.svg"}" alt="weights" class="w-16">
				Weights</a></div></div></div>  <div class="w-full bg-slate-100 px-2 md:px-16 py-8">${validate_component(VideoCarousel, "VideoCarousel").$$render($$result, { renderVideos }, {}, {})}</div>  <div class="max-w-6xl w-full px-2 pt-4 mx-auto"> <p class="mt-8 text-l">We introduce ${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}, our ongoing effort for building open-source, widely applicable generalist
		policies for robotic manipulation. The Octo model is a transformer-based diffusion policy,
		pretrained on 800k robot episodes from the
		<a href="https://robotics-transformer-x.github.io/" data-svelte-h="svelte-14855xq">Open X-Embodiment dataset</a>. It supports
		flexible task and observation definitions and can be quickly finetuned to new observation and
		action spaces. We are introducing two initial versions of Octo, Octo-Small (27M parameters) and
		Octo-Base (93M parameters).</p> <img src="${escape(base, true) + "/teaser.jpg"}" alt="teaser" class="w-full mt-16 px-2 md:px-16">  <h2 class="text-4xl mt-16" data-svelte-h="svelte-7bnceo">The Model</h2> <p class="mt-8" data-svelte-h="svelte-14jxxfh">The design of the Octo model emphasizes flexibility and scale: the model is designed to support
		a variety of commonly used robots, sensor configurations, and actions, while providing a generic
		and scalable recipe that can be trained on large amounts of data. Octo supports both natural
		language instructions and goal images, observation histories, and multi-modal action
		distributions via diffusion decoding. Furthermore, we designed Octo specifically to support
		efficient finetuning to new robot setups, including robots with different actions and different
		combinations of cameras and proprioceptive information. This design was selected specifically to
		make Octo a flexible and broadly applicable generalist robotic policy that can be utilized for a
		variety of downstream robotics applications and research projects.

		<img src="${escape(base, true) + "/architecture.jpg"}" alt="model" class="w-full mt-16 px-2 md:px-16"></p>  <h2 class="text-4xl mt-16" data-svelte-h="svelte-j9rfip">The Data</h2> <p class="mt-8" data-svelte-h="svelte-9qqk1n">We train Octo on a mixture of 25 datasets from the Open X-Embodiment Dataset, a diverse
		collection of robot learning datasets. Our training mixture includes data from a variety of
		robot embodiments, scenes, and tasks. These datasets are heterogeneous not just in terms of the
		robot type, but also in the sensors (e.g., including or not including wrist cameras) and labels
		(e.g., including or not including language instructions).
		<img src="${escape(base, true) + "/sampling_weights.jpg"}" alt="model" class="w-3/4 px-2 md:w-1/2 mt-10 mx-auto"></p>  <h2 class="text-4xl mt-16" data-svelte-h="svelte-vfli5r">The Results</h2> <p class="mt-8" data-svelte-h="svelte-1snp58p">We evaluate Octo on 9 real robot setups across 4 institutions. Our evaluations capture diverse
		object interactions (e.g., &quot;WidowX BridgeV2&quot;), long task horizons (e.g., &quot;Stanford Coffee&quot;) and
		precise manipulation (e.g., &quot;Berkeley Peg Insert&quot;). We evaluate Octo&#39;s capabilities to control
		robots in environments from the pretraining data out-of-the-box and to efficiently finetune to
		new tasks and environments with small target domain datasets. We also test finetuning with new
		observations (force-torque inputs for &quot;Berkeley Peg Insert&quot;) and action spaces (joint position
		control in &quot;Berkeley Pick-Up&quot;).
		<img src="${escape(base, true) + "/exp_setups.jpg"}" alt="model" class="w-full mt-16 px-2 md:px-8 mx-auto"></p> <div class="flex flex-wrap gap-y-4 justify-center mt-16"><table class="mr-2 md:mr-4 border-collapse text-center text-xs"><thead data-svelte-h="svelte-b5so5l"><tr><th colspan="4" class="text-lg svelte-ii6qa2">Zero-shot</th></tr> <tr class="border-b border-t-2 border-black"><th class="svelte-ii6qa2"></th> <th class="svelte-ii6qa2">WidowX</th> <th class="svelte-ii6qa2">UR5</th> <th class="svelte-ii6qa2">RT-1 Robot</th></tr></thead> <tbody><tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-1tss8wq"><td class="svelte-ii6qa2">RT-1-X</td> <td class="svelte-ii6qa2">0.20</td> <td class="svelte-ii6qa2">0.35</td> <td class="svelte-ii6qa2">0.60</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-13hmizx"><td class="svelte-ii6qa2">RT-2-X</td> <td class="font-bold svelte-ii6qa2">0.50</td> <td class="svelte-ii6qa2">—</td> <td class="font-bold svelte-ii6qa2">0.85</td></tr> <tr class="border-b-2 border-black font-bold svelte-ii6qa2"><td class="svelte-ii6qa2">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1jskovd">0.50</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-g0d817">0.70</td> <td class="font-normal svelte-ii6qa2" data-svelte-h="svelte-15jphg4">0.80</td></tr></tbody></table> <table class="ml-2 md:ml-4 border-collapse text-center md:text-xs text-[0.5rem]"><thead data-svelte-h="svelte-12sp3gu"><tr><th colspan="8" class="text-lg svelte-ii6qa2">Finetuning</th></tr> <tr class="border-b border-t-2 border-black"><th class="svelte-ii6qa2"></th> <th class="svelte-ii6qa2">CMU Baking</th> <th class="svelte-ii6qa2">Stanford Coffee</th> <th class="svelte-ii6qa2">Berkeley Peg Insert<sup>*</sup></th> <th class="svelte-ii6qa2">Berkeley Pick-Up<sup>†</sup></th> <th class="svelte-ii6qa2">Berkeley Bimanual<sup>†</sup></th> <th class="svelte-ii6qa2">Berkeley Coke</th> <th class="svelte-ii6qa2">Average</th></tr></thead> <tbody><tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-9i74ow"><td class="svelte-ii6qa2">From Scratch</td> <td class="svelte-ii6qa2">0.25</td> <td class="svelte-ii6qa2">0.45</td> <td class="svelte-ii6qa2">0.10</td> <td class="svelte-ii6qa2">0.00</td> <td class="svelte-ii6qa2">0.20</td> <td class="svelte-ii6qa2">0.20</td> <td class="svelte-ii6qa2">0.20</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-1y9h0n7"><td class="svelte-ii6qa2"><a href="https://eai-vc.github.io/">VC-1</a></td> <td class="svelte-ii6qa2">0.30</td> <td class="svelte-ii6qa2">0.00</td> <td class="svelte-ii6qa2">0.05</td> <td class="svelte-ii6qa2">0.00</td> <td class="svelte-ii6qa2">0.50</td> <td class="svelte-ii6qa2">0.10</td> <td class="svelte-ii6qa2">0.15</td></tr> <tr class="border-b-2 border-black font-bold svelte-ii6qa2"><td class="svelte-ii6qa2">${validate_component(Octo, "Octo").$$render($$result, {}, {}, {})}</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1jskovd">0.50</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-uuwxug">0.75</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-g0d817">0.70</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-trvq3u">0.60</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1p0sb18">0.80</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1pgmcwh">1.00</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-dg0hmd">0.72</td></tr></tbody></table></div> <div class="mt-2 flex justify-center text-[0.5rem] md:text-sm" data-svelte-h="svelte-1o1eylg"><div class="px-4"><sup>*</sup>New observation input (force-torque proprioception)</div> <div class="px-4"><sup>†</sup>New action space (joint position control)</div></div> <p class="mt-8" data-svelte-h="svelte-1te8rbi">Out-of-the-box, Octo can control multiple robots in environments from the pretraining data. When
		using natural language to specify tasks, it outperforms <a href="https://robotics-transformer-x.github.io/">RT-1-X</a>: the current best, openly available generalist robotic policy. It performs similarly to
		<a href="https://robotics-transformer-x.github.io/">RT-2-X</a>, a 55-billion parameter model.
		Additionally, while RT-1-X and RT-2-X only support language conditioning, Octo also supports
		goal image conditioning. On the WidowX tasks, we found that Octo achieved even better
		performance with goal image conditioning — 25% higher on average — likely because
		goal images provide more information about how to achieve the task.</p> <p class="mt-4" data-svelte-h="svelte-1piupnw">We also find that finetuning Octo leads to better policies than starting from scratch or with
		the pretrained <a href="https://eai-vc.github.io">VC-1</a> weights. On average across the six evaluation 
		setups, Octo outperforms the next best baseline by 52%. Each task uses ~100 target
		demonstrations. Importantly, we use
		<a href="https://github.com/octo-models/octo/blob/main/scripts/configs/finetune_config.py">the same finetuning recipe</a> for all evaluation tasks, making this a good default configuration for Octo finetuning. The results 
		also underline Octo’s ability to accommodate new observations (force-torque inputs for “Berkeley Insertion”),
		action spaces (joint position control for “Berkeley Pick-Up”) and new robot embodiments (“Berkeley Bi-Manual” 
		and “Berkeley Coke”). This makes Octo applicable to a wide range of single and dual arm robotic manipulation 
		problems that go beyond a single camera input and end-effector position control.</p> ${validate_component(SideBySide, "SideBySide").$$render($$result, {}, {}, {})}  <h2 class="text-4xl mt-16" data-svelte-h="svelte-1onhk75">Citation</h2> <p class="mt-8" data-svelte-h="svelte-1bcmm9r">Please use the following BibTeX entry to cite this work:</p> <pre class="mt-4 overflow-x-scroll bg-slate-100 p-8">${escape(`@inproceedings{octo_2023,
    title={Octo: An Open-Source Generalist Robot Policy},
    author = {{Octo Model Team} and Dibya Ghosh and Homer Walke and Karl Pertsch and Kevin Black and Oier Mees and Sudeep Dasari and Joey Hejna and Charles Xu and Jianlan Luo and Tobias Kreiman and {You Liang} Tan and Lawrence Yunliang Chen and Pannag Sanketi and Quan Vuong and Ted Xiao and Dorsa Sadigh and Chelsea Finn and Sergey Levine},
    booktitle = {Proceedings of Robotics: Science and Systems},
    address  = {Delft, Netherlands},
    year = {2024},
}`)}</pre> </div>`;
});
export {
  Page as default
};
