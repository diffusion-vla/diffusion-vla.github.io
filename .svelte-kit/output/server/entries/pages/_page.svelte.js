import { c as create_ssr_component, d as createEventDispatcher, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, v as validate_component, l as each, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Dvla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` 

Diffusion-VLA`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h1.svelte-pjvrjc.svelte-pjvrjc{font-size:min(max(50px, 6vw), 40px);color:rgb(29, 30, 28)}h2.svelte-pjvrjc.svelte-pjvrjc{font-size:min(max(50px, 6vw), 3rem)}.collapsed.svelte-pjvrjc.svelte-pjvrjc{height:8rem}.collapsed.svelte-pjvrjc h1.svelte-pjvrjc{padding-top:200%}.text-container.svelte-pjvrjc.svelte-pjvrjc{position:relative;font-family:'Arial', sans-serif;font-size:150px;font-weight:bold;color:white;width:70%;white-space:nowrap;text-align:center}.text-container.svelte-pjvrjc .text.svelte-pjvrjc{position:absolute;top:0;left:0;z-index:1;color:transparent}.text-container.svelte-pjvrjc .text-3.svelte-pjvrjc{color:rgba(63, 93, 163, 0.6);transform:translate(-10px, -10px);-webkit-text-stroke:2px rgba(63, 93, 163, 0.9)}.text-container.svelte-pjvrjc .text-2.svelte-pjvrjc{color:rgba(145, 190, 92, 0.6);transform:translate(0px, 0px);-webkit-text-stroke:2px rgba(145, 190, 92, 0.9)}.text-container.svelte-pjvrjc .text-1.svelte-pjvrjc{color:rgba(165, 74, 76, 0.6);transform:translate(10px, 10px);-webkit-text-stroke:2px rgba(165, 74, 76, 0.9)}.lines.svelte-pjvrjc.svelte-pjvrjc{position:absolute;width:100%;height:100%;overflow:hidden}.lines.svelte-pjvrjc svg.svelte-pjvrjc{position:absolute;top:0;left:0;width:100%;height:100%}.parallax.svelte-pjvrjc>use.svelte-pjvrjc{animation:svelte-pjvrjc-move-forever 5s linear infinite}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(1){animation-delay:-2s;animation-duration:10s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(2){animation-delay:-4s;animation-duration:15s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(3){animation-delay:-3s;animation-duration:18}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(4){animation-delay:-1s;animation-duration:20s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(5){animation-delay:-5s;animation-duration:8s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(6){animation-delay:-7s;animation-duration:5s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(7){animation-delay:-1s;animation-duration:13s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(8){animation-delay:-8s;animation-duration:7s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(9){animation-delay:-9s;animation-duration:20s}.parallax.svelte-pjvrjc>use.svelte-pjvrjc:nth-child(10){animation-delay:-10s;animation-duration:14s}@keyframes svelte-pjvrjc-move-forever{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$2);
  return ` <div class="${[
    "w-full h-screen mb-0 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-yellow-200 transition-all ease-in-out duration-1000 overflow-hidden relative svelte-pjvrjc",
    ""
  ].join(" ").trim()}" data-svelte-h="svelte-12xipeb"><div class="flex flex-col items-center justify-center"><div class="text-container svelte-pjvrjc"><div class="text text-1 svelte-pjvrjc">Diffusion-VLA</div> <div class="text text-2 svelte-pjvrjc">Diffusion-VLA</div> <div class="text text-3 svelte-pjvrjc">Diffusion-VLA</div></div> <h1 class="leading-tight transition-all duration-1000 font-light mt-80 svelte-pjvrjc">Aligning Vision-Language Models with Diffusion Policy for Visuomotor Learning</h1> <div class="lines svelte-pjvrjc"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" shape-rendering="auto" class="svelte-pjvrjc"><defs><path id="line" d="M0 0 L0 100"></path></defs><g class="parallax svelte-pjvrjc"><use xlink:href="#line" x="2%" y="0" stroke="rgba(0, 233, 10, 0.5)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="10%" y="0" stroke="rgba(10, 255, 0, 0.8)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="20%" y="0" stroke="rgba(10, 245, 0, 0.4)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="30%" y="0" stroke="rgba(30, 255, 0, 0.7)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="40%" y="0" stroke="rgba(20, 243, 13, 0.9)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="50%" y="0" stroke="rgba(40, 255, 0, 0.3)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="60%" y="0" stroke="rgba(0, 255, 0, 0.4)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="70%" y="0" stroke="rgba(0, 255, 30, 0.6)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="80%" y="0" stroke="rgba(0, 255, 20, 0.2)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="90%" y="0" stroke="rgba(50, 220, 40, 0.7)" stroke-width="0.4" class="svelte-pjvrjc"></use><use xlink:href="#line" x="98%" y="0" stroke="rgba(0, 255, 20, 0.8)" stroke-width="0.4" class="svelte-pjvrjc"></use></g></svg></div></div></div> ${``} `;
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
const css$1 = {
  code: ".splide__pagination__page{background:rgb(51, 51, 51)}.splide__pagination__page.is-active{background:rgb(185, 85, 85)}",
  map: null
};
const VideoCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { renderVideos = false } = $$props;
  const videoNames = ["tennis", "mug", "drawer", "box", "transfer_bread", "stack_cube"];
  const videoData = videoNames.map((name) => ({
    src: `videos/origin_tasks/${name}.mp4`,
    image_src: `videos/origin_tasks/${name}.png`,
    text: name.replaceAll("-", " ")
  }));
  let renderVideo = Array(videoData.length).fill(false);
  if ($$props.renderVideos === void 0 && $$bindings.renderVideos && renderVideos !== void 0)
    $$bindings.renderVideos(renderVideos);
  $$result.css.add(css$1);
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
              return `${renderVideos && renderVideo[i] ? `<div class="px-2"><div class="rounded-lg overflow-hidden flex justify-center"><video class="w-full" disableremoteplayback muted webkit-playsinline playsinline loop ${"autoplay"} src="${escape(base, true) + "/" + escape(video.src, true)}" poster="${escape(base, true) + "/" + escape(video.image_src, true)}"></video> <span class="absolute bottom-0.5 right-3 bg-slate-100 bg-opacity-85 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1om5rfl">5x
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
const GeneralizationVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function lazy(isOpen, path, type) {
    return isOpen ? `${base}/videos/generalization/${type}/${path}.mp4` : "";
  }
  return `<div class="mt-8 md:ml-0 ml-1 text-left"> <h2 class="text-4xl mt-16 underline" style="color: #ff5733;" data-svelte-h="svelte-1vwsw7d">Generalization Experiments of our DVLA</h2> <h3 class="text-3xl mt-6" data-svelte-h="svelte-a03qgg">Instruction generalization</h3> <div class="mt-2 ml-2 flex flex-wrap justify-center items-center"><div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%" data-svelte-h="svelte-1cybbn9"><span><span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> <span style="font-weight: bold;">Instruction</span>: Upright the tipped-over <span style="color: green;">green</span> mug.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "simple_origin", "instruction"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1wjacwr">In-domain</span></div> <div class="flex-1 ml-2 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "simple", "instruction"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md" data-svelte-h="svelte-1qmkhko">Out-of-domain</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%" data-svelte-h="svelte-1btyruh"><span><span style="font-weight: bold;">Level</span>: Distinguish <span style="color: red;">Seen</span> objects.<br> <span style="font-weight: bold;">Instruction</span>: Pick the <span style="color: pink;">pink</span> cube.<br> <span style="font-weight: bold;">Notice</span>: Both objects are seen in different tasks. <br>
                                Our policy did not overfit to the seen trajectories but instead picked up the cube and then released it.</span></div> <div class="w-2/4 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "middle", "instruction"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-oo9b4x">3x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md" data-svelte-h="svelte-1qmkhko">Out-of-domain</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%" data-svelte-h="svelte-xdl1tm"><span><span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">unseen</span>  &amp; <span style="color: red;">New function</span> of seen objects.<br> <span style="font-weight: bold;">Instruction</span>: Pick the car and place into the box.<br> <span style="font-weight: bold;">Notice</span>: The toy car is total <span style="color: red;">unseen</span> object.<br>
                                  Our policy can recognize the unseen toy car and place it into the box with heman help.</span></div> <div class="w-2/4 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "hard", "instruction"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-oo9b4x">3x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md" data-svelte-h="svelte-1qmkhko">Out-of-domain</span></div></div></div></div></div> <h3 class="text-3xl mt-6" data-svelte-h="svelte-12n6lnz">Object&amp;Appearance generalization</h3> <div class="mt-2 flex flex-wrap justify-center items-center"><div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "mug_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-gqp48r">in-domain</span></div> <div class="flex-1 ml-1 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "object_mug_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-1lsge62">Out-of-domain</span></div> <div class="bg-green-500 ml-1 w-1 h-40 mx-auto"></div>  <div class="flex-1 ml-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "drawer2", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-13syjzb">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1626teb">in-domain</span></div> <div class="flex-1 ml-1 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "object_drawer_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-13syjzb">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-c5zovu">Out-of-domain</span></div></div></div></div>  <div class="flex flex-col flex-row max-w-100% mx-2 py-2" style="width: 100%" data-svelte-h="svelte-14id5d"><div class="flex justify-center" style="width: 100%"><div class="flex flex-row items-center" style="width: 100%"><div class="bg-green-50 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%"><span><span style="font-weight: bold;">Instruction</span>: Upright the tipped-over mug.</span></div> <div class="bg-green-50 ml-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%"><span><span style="font-weight: bold;">Instruction</span>: Close the drawer.</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-1 py-1"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "box", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1rx4y1f">in-domain</span></div> <div class="flex-1 ml-1 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "appearance_box_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-1lsge62">Out-of-domain</span></div> <div class="bg-green-500 ml-1 w-1 h-40 mx-auto"></div> <div class="flex-1 ml-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "mug_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-1rx4y1f">in-domain</span></div> <div class="flex-1 ml-1 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "appearance_mug_5", "object_appearance"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-z1bb96">Out-of-domain</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2" style="width: 100%" data-svelte-h="svelte-ujbyc"><div class="flex justify-center" style="width: 100%"><div class="flex flex-row items-center" style="width: 100%"><div class="bg-green-50 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%"><span><span style="font-weight: bold;">Instruction</span>: Open the lid of the box.</span></div> <div class="bg-green-50 ml-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%"><span><span style="font-weight: bold;">Instruction</span>: Upright the tipped-over mug.</span></div></div></div></div></div> <h3 class="text-3xl mt-6" data-svelte-h="svelte-wzu7u">Background generalization</h3> <div class="mt-2 flex flex-wrap justify-center items-center"><div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-yellow-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%" data-svelte-h="svelte-1s3qeeo"><span> <span style="font-weight: bold;">Instruction</span>: Place the tennis ball into the ball box.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "deep_blue", "background"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-11i5k8y">Deep blue desk mat</span></div> <div class="flex-1 ml-2 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "yellow", "background"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-ojtipe">Yellow desk mat</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-yellow-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%" data-svelte-h="svelte-he5ecw"><span> <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "gray", "background"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-4ztdr">Gray desk mat</span></div> <div class="flex-1 ml-2 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "wooden", "background"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-z6c0jy">Wooden desk board</span></div></div></div></div></div> <h3 class="text-3xl mt-6" data-svelte-h="svelte-k20lh3">Distractors in bimanual settings</h3> <div class="mt-2 flex flex-wrap justify-center items-center"><div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-pink-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%" data-svelte-h="svelte-17ny7xo"><span> <span style="font-weight: bold;">Instruction</span>: Transfer the bread and place it into plate.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop muted autoplay${add_attribute("src", lazy(true, "transfer_bread", "distractors"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-19qwgan">Origin</span></div> <div class="flex-1 ml-2 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "transfer_bread_distractor", "distractors"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-1dfmwyt">With distractors</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-pink-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%" data-svelte-h="svelte-1ow019q"><span> <span style="font-weight: bold;">Instruction</span>: Stack the cubes on top of the plate.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "stack_cube", "distractors"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-zxl4sf">Origin</span></div> <div class="flex-1 ml-2 rounded-lg overflow-hidden relative "><video controls webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "stack_cubes_distractor", "distractors"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-g4zkbr">5x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-1dfmwyt">With distractors</span></div></div></div></div></div> <h3 class="text-3xl mt-6" data-svelte-h="svelte-13cork3">View Generalization</h3> <div class="mt-2 flex flex-wrap justify-center items-center"><div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%" data-svelte-h="svelte-8mjxpw"><span> <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br></span></div> <div class="w-5% mr-0 rounded-lg overflow-hidden relative" data-svelte-h="svelte-169i6zd"><img src="${escape(base, true) + "/videos/generalization/view/left_orig.png"}" alt="teaser" class=""> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md">Origin</span></div> <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video webkit-playsinline playsinline loop muted autoplay${add_attribute("src", lazy(true, "left_-30_2", "view"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-entheh">LeftView-30°</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%" data-svelte-h="svelte-8mjxpw"><span> <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br></span></div> <div class="w-5% mr-0 rounded-lg overflow-hidden relative" data-svelte-h="svelte-169i6zd"><img src="${escape(base, true) + "/videos/generalization/view/left_orig.png"}" alt="teaser" class=""> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md">Origin</span></div> <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video webkit-playsinline playsinline loop muted autoplay${add_attribute("src", lazy(true, "left_+15_2", "view"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-16535zc">LeftView+15°</span></div></div></div></div> <div class="flex mt-4 flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%" data-svelte-h="svelte-8mjxpw"><span> <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video webkit-playsinline playsinline loop muted autoplay${add_attribute("src", lazy(true, "right_-15_2", "view"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-tqkipo">RightView-15°</span></div> <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div> <div class="w-5% ml-0 rounded-lg overflow-hidden relative" data-svelte-h="svelte-1joip27"><img src="${escape(base, true) + "/videos/generalization/view/right_orig.png"}" alt="teaser" class=""> <span class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md">Origin</span></div></div></div></div> <div class="flex flex-col flex-row max-w-100% mx-2 py-2"><div class="flex justify-center"><div class="flex flex-row items-center"><div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%" data-svelte-h="svelte-8mjxpw"><span> <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br></span></div> <div class="flex-1 rounded-lg overflow-hidden relative"><video webkit-playsinline playsinline loop muted autoplay${add_attribute("src", lazy(true, "right_+15_2", "view"), 0)} class="w-full"></video> <span class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md" data-svelte-h="svelte-3zvc4a">2x</span> <span class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400" data-svelte-h="svelte-lye0m2">RightView+15°</span></div> <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div> <div class="w-5% ml-0 rounded-lg overflow-hidden relative" data-svelte-h="svelte-1joip27"><img src="${escape(base, true) + "/videos/generalization/view/right_orig.png"}" alt="teaser" class=""> <span class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md">Origin</span></div></div></div></div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "th.svelte-ii6qa2.svelte-ii6qa2{font-weight:normal}tr.svelte-ii6qa2>td.svelte-ii6qa2:first-child{text-align:left}td.svelte-ii6qa2.svelte-ii6qa2{line-height:1rem}th.svelte-ii6qa2.svelte-ii6qa2{padding:0 0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderVideos = false;
  function lazy(isOpen, path) {
    return isOpen ? `${base}/videos/${path}.mp4` : "";
  }
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <div class="max-w-4xl w-full px-2 pt-4 flex flex-col items-center mx-auto" data-svelte-h="svelte-twzthr"> <div class="flex flex-col items-center text-xl"> <div class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-blue-500 underline-offset-2"><span class="px-2">Junjie Wen*<sup>,1,2</sup></span> <span class="px-2">Yichen Zhu*<sup>,1</sup></span> <span class="px-2">Yanjie Ze<sup>3</sup></span> <span class="px-2">Minjie Zhu<sup>1,2</sup></span> <span class="px-2">Zhiyuan Xu<sup>1</sup></span></div> <div class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-amber-500 underline-offset-2"><span class="px-2">Jinming Li<sup>1,4</sup></span> <span class="px-2">Ning Liu<sup>1</sup></span> <span class="px-2">Yaxin Peng<sup>4</sup></span> <span class="px-2">Feifei Feng<sup>1</sup></span> <span class="px-2">Jian Tang<sup>1</sup></span> </div>  <div class="flex justify-center mt-4 mx-2 text-center">*denotes equal contribution, listed in alphabetical order.</div> <div class="flex justify-center mt-4 mx-2 text-center">This work was done during Junjie Wen&#39;s internship in Midea Group.</div> <div class="flex justify-center flex-wrap mt-4"><span class="px-4">1. Midea Group</span> <span class="px-4">2. East China Normal University</span> <span class="px-4">3. Standford University</span> <span class="px-4">4. Shanghai University</span></div></div>  <div class="flex w-full justify-between text-center pt-4 text-lg pb-4 mx-auto px-4"><div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/documents.svg"}" alt="documents" class="w-16">
				Paper</a></div> <div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32"><a href="" class="hover:underline text-black p-4 flex flex-col items-center"><img src="${escape(base, true) + "/github-mark.svg"}" alt="code" class="w-16">
				Code</a></div> </div></div>  <div class="w-full bg-slate-100 px-2 md:px-16 py-8">${validate_component(VideoCarousel, "VideoCarousel").$$render($$result, { renderVideos }, {}, {})}</div>  <div class="max-w-6xl w-full px-2 pt-4 mx-auto"> <p class="mt-8 text-l text-center text-justify">In real-world scenarios, data collection could be costly and labor intensive, making training a multitasking robot model 
		particularly challenging when the in-domain data is limited. Given recent advances in Multimodal Models and their power 
		to extrapolate on out-of-domain, this paper introduces efficient vision-language-action models (${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}) 
		for robotics manipulation. It is a general framework to learn visuomotor policy via end-to-end training by composing a 
		pre-trained vision-language model with policy networks. Our framework highlights three crucial components: (1) Initializing 
		policy backbone with a pre-trained multimodal model, (2) employing the LoRA fine-tuning method, in contrast to full-weight 
		fine-tuning, to combine the pre-trained knowledge from web-scale data and in-domain robot data effectively, (3) integrating 
		a policy decoder during fine-tuning to learn precise robot actions. We conducted a comprehensive evaluation of our method 
		in both simulation and real robots. We demonstrate that, without computationally heavy co-training on vision-language data, 
		by simply leveraging the pretrained multimodal models with a very small number of trainable parameters, MuRo obtains a 
		number of merits that previous approaches can not compete, including its strong generalization in terms of language instruction, 
		novel objects, unseen positions, object appearance, background, and environmental change. We also demonstrate that, as the 
		model size increases, ${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}not only achieves enhanced performance but also gains the capacity to accommodate more data. 
		For instance, in our real-world experiments, MuRo outperforms the Diffusion Policy with an average improvement of 43%. 
		As we continue to scale up the model, this performance gap widens further, reaching 62%. We believe that MuRo offers an 
		interesting perspective on utilizing pre-trained multimodal models for policy learning.</p> <div class="flex justify-center items-center mt-2"><video muted webkit-playsinline playsinline loop autoplay${add_attribute("src", lazy(true, "framework"), 0)} class="w-80% h-auto"></video></div>  <h2 class="text-4xl mt-16 underline" data-svelte-h="svelte-lt9ami">Model Architecture</h2> <img src="${escape(base, true) + "/framework.png"}" alt="teaser" class="w-full mt-16 px-2 md:px-16"> <p class="mt-8 text-center text-justify" data-svelte-h="svelte-pewt1k">The design of the DiffusionVLA model emphasizes flexibility and scale: the model is designed to support
		a variety of commonly used robots, sensor configurations, and actions, while providing a generic
		and scalable recipe that can be trained on large amounts of data. DiffusionVLA supports both natural
		language instructions and goal images, observation histories, and multi-modal action
		distributions via diffusion decoding. Furthermore, we designed DiffusionVLA specifically to support
		efficient finetuning to new robot setups, including robots with different actions and different
		combinations of cameras and proprioceptive information. This design was selected specifically to
		make DiffusionVLA a flexible and broadly applicable generalist robotic policy that can be utilized for a
		variety of downstream robotics applications and research projects.

		</p>  <h2 class="text-4xl mt-16 underline" data-svelte-h="svelte-dkmxpl">Task Suite</h2> <p class="mt-8" data-svelte-h="svelte-fxuiix">We design five tasks in single arm setup and three tasks in bimanual tasks.
		<img src="${escape(base, true) + "/task_suite.png"}" alt="model" class="w-full mt-5 px-2 md:px-16"></p>  <h2 class="text-4xl mt-16 underline" data-svelte-h="svelte-x619x8">Experiments Results</h2>  <div class="flex flex-wrap gap-y-4 justify-center mt-16"><table class="mr-2 md:mr-4 border-collapse text-center text-L"><caption data-svelte-h="svelte-i6qq5h">Comparing MuRo with Diffusion Policy, IBC, and VINN in <strong>simulation</strong>. We report the average success rate on multiple tasks. We use MuRo-L as our method.</caption> <thead data-svelte-h="svelte-1xqfxya"><tr class="border-t border-t-2 border-black"><th class="svelte-ii6qa2"></th> <th class="svelte-ii6qa2">Franka Kitchen</th> <th colspan="4" style="border-left: 1px solid black;" class="svelte-ii6qa2">MetaWorld (50 tasks)</th> <th class="svelte-ii6qa2"></th></tr> <tr class="border-b border-black"><th class="svelte-ii6qa2">Model / Tasks</th> <th class="svelte-ii6qa2">10 Tasks</th> <th style="border-left: 1px solid black;" class="svelte-ii6qa2">Easy (28)</th> <th class="svelte-ii6qa2">Medium (11)</th> <th class="svelte-ii6qa2">Hard (6)</th> <th class="svelte-ii6qa2">Very Hard (5)</th> <th style="border-left: 1px solid black;" class="svelte-ii6qa2">Avg.</th></tr></thead> <tbody><tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-1e5vwkt"><td class="svelte-ii6qa2">Diffusion Policy</td> <td class="svelte-ii6qa2">53.2</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">23.1</td> <td class="svelte-ii6qa2">10.7</td> <td class="svelte-ii6qa2">1.9</td> <td class="svelte-ii6qa2">6.1</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">19.0</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-82tnl5"><td class="svelte-ii6qa2">IBC</td> <td class="svelte-ii6qa2">32.1</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">6.4</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-91falk"><td class="svelte-ii6qa2">VINN</td> <td class="svelte-ii6qa2">19.6</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">0</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">3.9</td></tr> <tr class="border-b-2 border-black font-bold svelte-ii6qa2"><td class="svelte-ii6qa2">${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}-L</td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-1ayhtte"><strong>77.6</strong></td> <td style="background-color: AliceBlue; border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-2erm9v"><strong>39.7</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-ac2pwc"><strong>21.5</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-24dmps"><strong>11.4</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-nswfuo"><strong>15.8</strong></td> <td style="background-color: AliceBlue; border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-yiv3fi"><strong>34.7</strong></td></tr></tbody></table> <table class="mr-2 md:mr-4 border-collapse text-center text-L"><caption data-svelte-h="svelte-1mvom9a"><strong>Quantitative results in real-world experiments.</strong> We report the average success rate across multiple tasks and the count of trainable parameters for all models.</caption> <thead data-svelte-h="svelte-k2idey"><tr class="border-t border-t-2 border-black"><th class="svelte-ii6qa2"></th> <th class="svelte-ii6qa2">Trainable</th> <th colspan="5" style="border-left: 1px solid black;" class="svelte-ii6qa2">RealWorld(5 tasks)</th> <th class="svelte-ii6qa2"></th></tr> <tr class="border-b border-t-1 border-black"><th class="svelte-ii6qa2">Model / Tasks</th> <th class="svelte-ii6qa2">Parameters</th> <th style="border-left: 1px solid black;" class="svelte-ii6qa2">place tennis</th> <th class="svelte-ii6qa2">flip mug</th> <th class="svelte-ii6qa2">stack cubes</th> <th class="svelte-ii6qa2">close drawer</th> <th class="svelte-ii6qa2">open box</th> <th style="border-left: 1px solid black;" class="svelte-ii6qa2">Avg.</th></tr></thead> <tbody><tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2" data-svelte-h="svelte-1rt2ye9"><td class="svelte-ii6qa2">Diffusion Policy</td> <td class="svelte-ii6qa2">111M</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">10</td> <td class="svelte-ii6qa2">25</td> <td class="svelte-ii6qa2">0</td> <td class="svelte-ii6qa2">70</td> <td class="svelte-ii6qa2">50</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2">31</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2"><td class="svelte-ii6qa2">${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}-S</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1bbo6up">101M</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-wr13jp">10</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-17b31xa">0</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-17cwr8n">5</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1rvv4fs">60</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1tm0hhi">35</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-1fzwn60">22</td></tr> <tr class="md:border-b-8 md:border-b-transparent svelte-ii6qa2"><td class="svelte-ii6qa2">${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}-B</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-6ldc0p">138M</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-4nuqhf">70</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1toclmy">75</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1rvcq7p">70</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1rx1cfq">80</td> <td class="svelte-ii6qa2" data-svelte-h="svelte-1toclmy">75</td> <td style="border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-1nrol9z">74</td></tr> <tr class="border-b-2 border-black font-bold svelte-ii6qa2"><td class="svelte-ii6qa2"><strong>${validate_component(Dvla, "DiffusionVLA").$$render($$result, {}, {}, {})}-L</strong></td> <td class="svelte-ii6qa2" data-svelte-h="svelte-4a1q8f">143M</td> <td style="border-left: 1px solid black; background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-1i60c1"><strong>90</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-3vtuar"><strong>100</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-3vtuar"><strong>100</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-1padtnn"><strong>90</strong></td> <td style="background-color: AliceBlue;" class="svelte-ii6qa2" data-svelte-h="svelte-lq99dp"><strong>85</strong></td> <td style="background-color: AliceBlue; border-left: 1px solid black;" class="svelte-ii6qa2" data-svelte-h="svelte-n9j4aa"><strong>93</strong></td></tr></tbody></table></div>     ${validate_component(GeneralizationVideo, "GeneralizationVideo").$$render($$result, {}, {}, {})}  <h2 class="text-4xl mt-16 underline" data-svelte-h="svelte-1mif6al">Citation</h2> <p class="mt-8" data-svelte-h="svelte-1bcmm9r">Please use the following BibTeX entry to cite this work:</p> <pre class="mt-4 overflow-x-scroll bg-slate-100 p-8">${escape(`@inproceedings{DVLA-2024,
    title={DiffusionVLA: Aligning Vision-Language Models with Diffusion Policy for Visuomotor Learning},
    author = {Junjie Wen},
    booktitle = {arxiv},
	year = {2024},
}`)}</pre> </div>`;
});
export {
  Page as default
};
