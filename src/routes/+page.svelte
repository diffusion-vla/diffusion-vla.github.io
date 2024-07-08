<script>
	import Header from './Header.svelte';
	import VideoCarousel from './VideoCarousel.svelte';
	import { base } from '$app/paths';
	import DiffusionVLA from './dvla.svelte';
	import SideBySide from './SideBySide.svelte';
	import GeneralizationVideo from './GeneralizationVideo.svelte';

	let renderVideos = false;
	function handleShow() {
		setTimeout(() => {
			renderVideos = true;
		}, 1500);
	}
	function lazy(isOpen, path) {
		return isOpen ? `${base}/videos/${path}.mp4` : '';
	}
</script>

<Header on:hideTitle={handleShow} />

<!-- content column -->
<div class="max-w-4xl w-full px-2 pt-4 flex flex-col items-center mx-auto">
	<!-- authors -->
	<div class="flex flex-col items-center text-xl">
		<!-- <span class="font-bold">DiffusionVLA Model Team</span> -->
		<div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-blue-500 underline-offset-2"
		>
			<span class="px-2"> Junjie Wen*<sup>,1,2</sup> </span>
			<span class="px-2"> Yichen Zhu*<sup>,1</sup> </span>
			<span class="px-2"> Yanjie Ze<sup>3</sup> </span>
			<span class="px-2"> Minjie Zhu<sup>1,2</sup> </span>
			<span class="px-2"> Zhiyuan Xu<sup>1</sup> </span>
		</div>
		<div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-amber-500 underline-offset-2"
		>
			<span class="px-2">Jinming Li<sup>1,4</sup></span>
			<span class="px-2">Ning Liu<sup>1</sup></span>
			<span class="px-2">Yaxin Peng<sup>4</sup></span>
			<span class="px-2">Feifei Feng<sup>1</sup></span>
			<span class="px-2">Jian Tang<sup>1</sup></span>
			<!-- <span class="px-2">You Liang Tan<sup>1</sup></span> -->
		</div>
		<!-- <div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-green-500 underline-offset-2"
		>
			<span class="px-2">Lawrence Yunliang Chen<sup>1</sup></span>
			<span class="px-2">Pannag Sanketi<sup>4</sup></span>
			<span class="px-2">Quan Vuong<sup>4</sup></span>
			<span class="px-2">Ted Xiao<sup>4</sup></span>
			<span class="px-2">Dorsa Sadigh<sup>2</sup></span>
			<span class="px-2">Chelsea Finn<sup>2</sup></span>
			<span class="px-2">Sergey Levine<sup>1</sup></span>
		</div> -->
		<div class="flex justify-center mt-4 mx-2 text-center">
			*denotes equal contribution, listed in alphabetical order.
		</div>
		<div class="flex justify-center mt-4 mx-2 text-center">
			This work was done during Junjie Wen's internship in Midea Group.
		</div>
		<div class="flex justify-center flex-wrap mt-4">
			<span class="px-4">1. Midea Group</span>
			<span class="px-4">2. East China Normal University</span>
			<span class="px-4">3. Standford University</span>
			<span class="px-4">4. Shanghai University</span>
		</div>
	</div>

	<!-- links -->
	<div class="flex w-full justify-between text-center pt-4 text-lg pb-4 mx-auto px-4">
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a href="" class="hover:underline text-black p-4 flex flex-col items-center">
				<img src="{base}/documents.svg" alt="documents" class="w-16" />
				Paper
			</a>
		</div>
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a
				href=""
				class="hover:underline text-black p-4 flex flex-col items-center"
			>
				<img src="{base}/github-mark.svg" alt="code" class="w-16" />
				Code
			</a>
		</div>
		<!-- <div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a
				href="https://colab.research.google.com/drive/1z0vELj_lX9OWeoMG_WvXnQs43aPOEAhz?usp=sharing"
				class="hover:underline text-black p-4 flex flex-col items-center"
			>
				<img src="{base}/colab2.svg" alt="colab" class="w-20" />
				Colab
			</a>
		</div>
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a
				href="https://huggingface.co/rail-berkeley"
				class="hover:underline text-black p-4 flex flex-col items-center"
			>
				<img src="{base}/weights.svg" alt="weights" class="w-16" />
				Weights
			</a>
		</div> -->
	</div>
</div>

<!-- full-width video carousel -->
<div class="w-full bg-slate-100 px-2 md:px-16 py-8">
	<VideoCarousel {renderVideos} />
</div>

<!-- content column again -->
<div class="max-w-6xl w-full px-2 pt-4 mx-auto">
	<!-- intro and teaser -->
	<p class="mt-8 text-l text-center text-justify">
		In real-world scenarios, data collection could be costly and labor intensive, making training a multitasking robot model 
		particularly challenging when the in-domain data is limited. Given recent advances in Multimodal Models and their power 
		to extrapolate on out-of-domain, this paper introduces efficient vision-language-action models (<DiffusionVLA/>) 
		for robotics manipulation. It is a general framework to learn visuomotor policy via end-to-end training by composing a 
		pre-trained vision-language model with policy networks. Our framework highlights three crucial components: (1) Initializing 
		policy backbone with a pre-trained multimodal model, (2) employing the LoRA fine-tuning method, in contrast to full-weight 
		fine-tuning, to combine the pre-trained knowledge from web-scale data and in-domain robot data effectively, (3) integrating 
		a policy decoder during fine-tuning to learn precise robot actions. We conducted a comprehensive evaluation of our method 
		in both simulation and real robots. We demonstrate that, without computationally heavy co-training on vision-language data, 
		by simply leveraging the pretrained multimodal models with a very small number of trainable parameters, MuRo obtains a 
		number of merits that previous approaches can not compete, including its strong generalization in terms of language instruction, 
		novel objects, unseen positions, object appearance, background, and environmental change. We also demonstrate that, as the 
		model size increases, <DiffusionVLA/>not only achieves enhanced performance but also gains the capacity to accommodate more data. 
		For instance, in our real-world experiments, MuRo outperforms the Diffusion Policy with an average improvement of 43%. 
		As we continue to scale up the model, this performance gap widens further, reaching 62%. We believe that MuRo offers an 
		interesting perspective on utilizing pre-trained multimodal models for policy learning.
	</p>
	<div class="flex justify-center items-center mt-2">
		<video
			muted
			webkit-playsinline
			playsinline
			loop
			autoplay
			src={lazy(true, 'framework')}
			class="w-80% h-auto"
		/>
	</div>
	

	<!-- the model -->
	<h2 class="text-4xl mt-16 underline">Model Architecture</h2>
	<img src="{base}/framework.png" alt="teaser" class="w-full mt-16 px-2 md:px-16" />

	<p class="mt-8 text-center text-justify">
		The design of the DiffusionVLA model emphasizes flexibility and scale: the model is designed to support
		a variety of commonly used robots, sensor configurations, and actions, while providing a generic
		and scalable recipe that can be trained on large amounts of data. DiffusionVLA supports both natural
		language instructions and goal images, observation histories, and multi-modal action
		distributions via diffusion decoding. Furthermore, we designed DiffusionVLA specifically to support
		efficient finetuning to new robot setups, including robots with different actions and different
		combinations of cameras and proprioceptive information. This design was selected specifically to
		make DiffusionVLA a flexible and broadly applicable generalist robotic policy that can be utilized for a
		variety of downstream robotics applications and research projects.

		<!-- <img src="{base}/framework.png" alt="model" class="w-full mt-16 px-2 md:px-16" /> -->
	</p>

	<!-- the data -->
	<h2 class="text-4xl mt-16 underline">Task Suite</h2>

	<p class="mt-8">
		We design five tasks in single arm setup and three tasks in bimanual tasks.
		<img src="{base}/task_suite.png" alt="model" class="w-full mt-5 px-2 md:px-16" />
	</p>

	<!-- the results -->
	<h2 class="text-4xl mt-16 underline">Experiments Results</h2>
	<!-- <p class="mt-8">
		We evaluate DiffusionVLA on 9 real robot setups across 4 institutions. Our evaluations capture diverse
		object interactions (e.g., "WidowX BridgeV2"), long task horizons (e.g., "Stanford Coffee") and
		precise manipulation (e.g., "Berkeley Peg Insert"). We evaluate DiffusionVLA's capabilities to control
		robots in environments from the pretraining data out-of-the-box and to efficiently finetune to
		new tasks and environments with small target domain datasets. We also test finetuning with new
		observations (force-torque inputs for "Berkeley Peg Insert") and action spaces (joint position
		control in "Berkeley Pick-Up").
		<img src="{base}/exp_setups.jpg" alt="model" class="w-full mt-16 px-2 md:px-8 mx-auto" />
	</p> -->

	<div class="flex flex-wrap gap-y-4 justify-center mt-16">
		<table class="mr-2 md:mr-4 border-collapse text-center text-L">
			<caption>Comparing MuRo with Diffusion Policy, IBC, and VINN in <strong>simulation</strong>. We report the average success rate on multiple tasks. We use MuRo-L as our method.</caption>
			<thead>
			  <tr class="border-t border-t-2 border-black">
				<th></th>
				<th>Franka Kitchen</th>
				<th colspan="4" style="border-left: 1px solid black;">MetaWorld (50 tasks)</th>
				<th></th>
			  </tr>
			  <tr class="border-b border-black">
				<th>Model / Tasks</th>
				<th>10 Tasks</th>
				<th style="border-left: 1px solid black;">Easy (28)</th>
				<th>Medium (11)</th>
				<th>Hard (6)</th>
				<th >Very Hard (5)</th>
				<th style="border-left: 1px solid black;">Avg.</th>
			  </tr>
			</thead>
			<tbody>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td>Diffusion Policy</td>
				<td>53.2</td>
				<td style="border-left: 1px solid black;">23.1</td>
				<td>10.7</td>
				<td>1.9</td>
				<td>6.1</td>
				<td style="border-left: 1px solid black;">19.0</td>
			  </tr>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td>IBC</td>
				<td>32.1</td>
				<td style="border-left: 1px solid black;">0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td style="border-left: 1px solid black;">6.4</td>
			  </tr>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td>VINN</td>
				<td>19.6</td>
				<td style="border-left: 1px solid black;">0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td style="border-left: 1px solid black;">3.9</td>
			  </tr>
			  <tr class="border-b-2 border-black font-bold">
				<td><DiffusionVLA />-L</td>
				<td style="background-color: AliceBlue;"><strong>77.6</strong></td>
				<td style="background-color: AliceBlue; border-left: 1px solid black;"><strong>39.7</strong></td>
				<td style="background-color: AliceBlue;"><strong>21.5</strong></td>
				<td style="background-color: AliceBlue;"><strong>11.4</strong></td>
				<td style="background-color: AliceBlue;"><strong>15.8</strong></td>
				<td style="background-color: AliceBlue; border-left: 1px solid black;"><strong>34.7</strong></td>
			  </tr>
			</tbody>
		  </table>
		  <table class="mr-2 md:mr-4 border-collapse text-center text-L">
			<caption>
			  <strong>Quantitative results in real-world experiments.</strong> We report the average success rate across multiple tasks and the count of trainable parameters for all models.
			</caption>
			<thead>
			  <tr class="border-t border-t-2 border-black">
				<th></th>
				<th>Trainable </th>
				<th colspan="5" style="border-left: 1px solid black;">RealWorld(5 tasks)</th>
				<th></th>
			  </tr>
			  <tr class="border-b border-t-1 border-black">
				<th>Model / Tasks</th>
				<th>Parameters</th>
				<th style="border-left: 1px solid black;">place tennis</th>
				<th>flip mug</th>
				<th>stack cubes</th>
				<th>close drawer</th>
				<th>open box</th>
				<th style="border-left: 1px solid black;">Avg.</th>
			  </tr>
			</thead>
			<tbody>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td>Diffusion Policy</td>
				<td>111M</td>
				<td style="border-left: 1px solid black;">10</td>
				<td>25</td>
				<td>0</td>
				<td>70</td>
				<td>50</td>
				<td style="border-left: 1px solid black;">31</td>
			  </tr>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td><DiffusionVLA/>-S</td>
				<td>101M</td>
				<td style="border-left: 1px solid black;">10</td>
				<td>0</td>
				<td>5</td>
				<td>60</td>
				<td>35</td>
				<td style="border-left: 1px solid black;">22</td>
			  </tr>
			  <tr class="md:border-b-8 md:border-b-transparent">
				<td><DiffusionVLA/>-B</td>
				<td>138M</td>
				<td style="border-left: 1px solid black;">70</td>
				<td>75</td>
				<td>70</td>
				<td>80</td>
				<td>75</td>
				<td style="border-left: 1px solid black;">74</td>
			  </tr>
			  <tr class="border-b-2 border-black font-bold">
				<td><strong><DiffusionVLA/>-L</strong></td>
				<td>143M</td>
				<td style="border-left: 1px solid black; background-color: AliceBlue;"><strong>90</strong></td>
				<td style="background-color: AliceBlue;"><strong>100</strong></td>
				<td style="background-color: AliceBlue;"><strong>100</strong></td>
				<td style="background-color: AliceBlue;"><strong>90</strong></td>
				<td style="background-color: AliceBlue;"><strong>85</strong></td>
				<td style="background-color: AliceBlue; border-left: 1px solid black;"><strong>93</strong></td>
			  </tr>
			</tbody>
		  </table>
		  
	</div>
	<!-- <div class="mt-2 flex justify-center text-[0.5rem] md:text-sm">
		<div class="px-4"><sup>*</sup>New observation input (force-torque proprioception)</div>
		<div class="px-4"><sup>†</sup>New action space (joint position control)</div>
	</div> -->

	<!-- <p class="mt-8">
		Out-of-the-box, DiffusionVLA can control multiple robots in environments from the pretraining data. When
		using natural language to specify tasks, it outperforms <a
			href="https://robotics-transformer-x.github.io/">RT-1-X</a
		>: the current best, openly available generalist robotic policy. It performs similarly to
		<a href="https://robotics-transformer-x.github.io/">RT-2-X</a>, a 55-billion parameter model.
		Additionally, while RT-1-X and RT-2-X only support language conditioning, DiffusionVLA also supports
		goal image conditioning. On the WidowX tasks, we found that DiffusionVLA achieved even better
		performance with goal image conditioning &mdash; 25% higher on average &mdash; likely because
		goal images provide more information about how to achieve the task.
	</p> -->
	<!-- <p class="mt-4">
		We also find that finetuning DiffusionVLA leads to better policies than starting from scratch or with
		the pretrained <a href="https://eai-vc.github.io">VC-1</a> weights. On average across the six evaluation 
		setups, DiffusionVLA outperforms the next best baseline by 52%. Each task uses &#126;100 target
		demonstrations. Importantly, we use
		<a href="https://github.com/octo-models/octo/blob/main/scripts/configs/finetune_config.py"
			>the same finetuning recipe</a
		> for all evaluation tasks, making this a good default configuration for DiffusionVLA finetuning. The results 
		also underline DiffusionVLA’s ability to accommodate new observations (force-torque inputs for “Berkeley Insertion”),
		action spaces (joint position control for “Berkeley Pick-Up”) and new robot embodiments (“Berkeley Bi-Manual” 
		and “Berkeley Coke”). This makes DiffusionVLA applicable to a wide range of single and dual arm robotic manipulation 
		problems that go beyond a single camera input and end-effector position control.
	</p> -->

	<!-- <SideBySide /> -->
	<GeneralizationVideo />
	<!-- citation -->
	<h2 class="text-4xl mt-16 underline">Citation</h2>
	<p class="mt-8">Please use the following BibTeX entry to cite this work:</p>
	<pre class="mt-4 overflow-x-scroll bg-slate-100 p-8">
{`@inproceedings{DVLA-2024,
    title={DiffusionVLA: Aligning Vision-Language Models with Diffusion Policy for Visuomotor Learning},
    author = {Junjie Wen},
    booktitle = {arxiv},
	year = {2024},
}`}</pre>
</div>

<style>
	th {
		font-weight: normal;
	}

	tr > td:first-child {
		text-align: left;
	}

	td {
		line-height: 1rem;
	}

	th {
		padding: 0 0.5em;
	}
</style>
