<script>
	import Header from './Header.svelte';
	import VideoCarousel from './VideoCarousel.svelte';
	import { base } from '$app/paths';
	import Octo from './Octo.svelte';
	import SideBySide from './SideBySide.svelte';

	let renderVideos = false;
	function handleShow() {
		setTimeout(() => {
			renderVideos = true;
		}, 1500);
	}
</script>

<Header on:hideTitle={handleShow} />

<!-- content column -->
<div class="max-w-4xl w-full px-2 pt-4 flex flex-col items-center mx-auto">
	<!-- authors -->
	<div class="flex flex-col items-center text-xl">
		<span class="font-bold">Octo Model Team</span>
		<div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-blue-500 underline-offset-2"
		>
			<span class="px-2"> Dibya Ghosh*<sup>,1</sup> </span>
			<span class="px-2"> Homer Walke*<sup>,1</sup> </span>
			<span class="px-2"> Karl Pertsch*<sup>,1,2</sup> </span>
			<span class="px-2"> Kevin Black*<sup>,1</sup> </span>
			<span class="px-2"> Oier Mees*<sup>,1</sup> </span>
		</div>
		<div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-amber-500 underline-offset-2"
		>
			<span class="px-2">Sudeep Dasari<sup>3</sup></span>
			<span class="px-2">Joey Hejna<sup>2</sup></span>
			<span class="px-2">Tobias Kreiman<sup>1</sup></span>
			<span class="px-2">Charles Xu<sup>1</sup></span>
			<span class="px-2">Jianlan Luo<sup>1</sup></span>
			<span class="px-2">You Liang Tan<sup>1</sup></span>
		</div>
		<div
			class="flex justify-center flex-wrap mt-2 underline decoration-dotted decoration-green-500 underline-offset-2"
		>
			<span class="px-2">Lawrence Yunliang Chen<sup>1</sup></span>
			<span class="px-2">Pannag Sanketi<sup>4</sup></span>
			<span class="px-2">Quan Vuong<sup>4</sup></span>
			<span class="px-2">Ted Xiao<sup>4</sup></span>
			<span class="px-2">Dorsa Sadigh<sup>2</sup></span>
			<span class="px-2">Chelsea Finn<sup>2</sup></span>
			<span class="px-2">Sergey Levine<sup>1</sup></span>
		</div>
		<div class="flex justify-center mt-4 mx-2 text-center">
			*denotes equal contribution, listed in alphabetical order
		</div>
		<div class="flex justify-center flex-wrap mt-4">
			<span class="px-4">1. UC Berkeley</span>
			<span class="px-4">2. Stanford University</span>
			<span class="px-4">3. Carnegie Mellon University</span>
			<span class="px-4">4. Google DeepMind</span>
		</div>
	</div>

	<!-- links -->
	<div class="flex w-full justify-between text-center pt-4 text-lg pb-4 mx-auto px-4">
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a href="https://arxiv.org/pdf/2405.12213" class="hover:underline text-black p-4 flex flex-col items-center">
				<img src="{base}/documents.svg" alt="documents" class="w-16" />
				Report
			</a>
		</div>
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
			<a
				href="https://github.com/octo-models/octo"
				class="hover:underline text-black p-4 flex flex-col items-center"
			>
				<img src="{base}/github-mark.svg" alt="code" class="w-16" />
				Code
			</a>
		</div>
		<div class="flex flex-col justify-end hover:bg-sky-200 rounded-md w-32">
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
		</div>
	</div>
</div>

<!-- full-width video carousel -->
<div class="w-full bg-slate-100 px-2 md:px-16 py-8">
	<VideoCarousel {renderVideos} />
</div>

<!-- content column again -->
<div class="max-w-6xl w-full px-2 pt-4 mx-auto">
	<!-- intro and teaser -->
	<p class="mt-8 text-l">
		We introduce <Octo />, our ongoing effort for building open-source, widely applicable generalist
		policies for robotic manipulation. The Octo model is a transformer-based diffusion policy,
		pretrained on 800k robot episodes from the
		<a href="https://robotics-transformer-x.github.io/">Open X-Embodiment dataset</a>. It supports
		flexible task and observation definitions and can be quickly finetuned to new observation and
		action spaces. We are introducing two initial versions of Octo, Octo-Small (27M parameters) and
		Octo-Base (93M parameters).
	</p>
	<img src="{base}/teaser.jpg" alt="teaser" class="w-full mt-16 px-2 md:px-16" />

	<!-- the model -->
	<h2 class="text-4xl mt-16">The Model</h2>
	<p class="mt-8">
		The design of the Octo model emphasizes flexibility and scale: the model is designed to support
		a variety of commonly used robots, sensor configurations, and actions, while providing a generic
		and scalable recipe that can be trained on large amounts of data. Octo supports both natural
		language instructions and goal images, observation histories, and multi-modal action
		distributions via diffusion decoding. Furthermore, we designed Octo specifically to support
		efficient finetuning to new robot setups, including robots with different actions and different
		combinations of cameras and proprioceptive information. This design was selected specifically to
		make Octo a flexible and broadly applicable generalist robotic policy that can be utilized for a
		variety of downstream robotics applications and research projects.

		<img src="{base}/architecture.jpg" alt="model" class="w-full mt-16 px-2 md:px-16" />
	</p>

	<!-- the data -->
	<h2 class="text-4xl mt-16">The Data</h2>
	<p class="mt-8">
		We train Octo on a mixture of 25 datasets from the Open X-Embodiment Dataset, a diverse
		collection of robot learning datasets. Our training mixture includes data from a variety of
		robot embodiments, scenes, and tasks. These datasets are heterogeneous not just in terms of the
		robot type, but also in the sensors (e.g., including or not including wrist cameras) and labels
		(e.g., including or not including language instructions).
		<img src="{base}/sampling_weights.jpg" alt="model" class="w-3/4 px-2 md:w-1/2 mt-10 mx-auto" />
	</p>

	<!-- the results -->
	<h2 class="text-4xl mt-16">The Results</h2>
	<p class="mt-8">
		We evaluate Octo on 9 real robot setups across 4 institutions. Our evaluations capture diverse
		object interactions (e.g., "WidowX BridgeV2"), long task horizons (e.g., "Stanford Coffee") and
		precise manipulation (e.g., "Berkeley Peg Insert"). We evaluate Octo's capabilities to control
		robots in environments from the pretraining data out-of-the-box and to efficiently finetune to
		new tasks and environments with small target domain datasets. We also test finetuning with new
		observations (force-torque inputs for "Berkeley Peg Insert") and action spaces (joint position
		control in "Berkeley Pick-Up").
		<img src="{base}/exp_setups.jpg" alt="model" class="w-full mt-16 px-2 md:px-8 mx-auto" />
	</p>

	<div class="flex flex-wrap gap-y-4 justify-center mt-16">
		<table class="mr-2 md:mr-4 border-collapse text-center text-xs">
			<thead>
				<tr>
					<th colspan="4" class="text-lg">Zero-shot</th>
				</tr>
				<tr class="border-b border-t-2 border-black">
					<th />
					<th>WidowX</th>
					<th>UR5</th>
					<th>RT-1 Robot</th>
				</tr>
			</thead>
			<tbody>
				<tr class="md:border-b-8 md:border-b-transparent">
					<td>RT-1-X</td>
					<td>0.20</td>
					<td>0.35</td>
					<td>0.60</td>
				</tr>
				<tr class="md:border-b-8 md:border-b-transparent">
					<td>RT-2-X</td>
					<td class="font-bold">0.50</td>
					<td>&mdash;</td>
					<td class="font-bold">0.85</td>
				</tr>
				<tr class="border-b-2 border-black font-bold">
					<td><Octo /></td>
					<td>0.50</td>
					<td>0.70</td>
					<td class="font-normal">0.80</td>
				</tr>
			</tbody>
		</table>
		<table class="ml-2 md:ml-4 border-collapse text-center md:text-xs text-[0.5rem]">
			<thead>
				<tr>
					<th colspan="8" class="text-lg">Finetuning</th>
				</tr>
				<tr class="border-b border-t-2 border-black">
					<th />
					<th>CMU Baking</th>
					<th>Stanford Coffee</th>
					<th>Berkeley Peg Insert<sup>*</sup></th>
					<th>Berkeley Pick-Up<sup>†</sup></th>
					<th>Berkeley Bimanual<sup>†</sup></th>
					<th>Berkeley Coke</th>
					<th>Average</th>
				</tr>
			</thead>
			<tbody>
				<tr class="md:border-b-8 md:border-b-transparent">
					<td>From Scratch</td>
					<td>0.25</td>
					<td>0.45</td>
					<td>0.10</td>
					<td>0.00</td>
					<td>0.20</td>
					<td>0.20</td>
					<td>0.20</td>
				</tr>
				<tr class="md:border-b-8 md:border-b-transparent">
					<td><a href="https://eai-vc.github.io/">VC-1</a></td>
					<td>0.30</td>
					<td>0.00</td>
					<td>0.05</td>
					<td>0.00</td>
					<td>0.50</td>
					<td>0.10</td>
					<td>0.15</td>
				</tr>
				<tr class="border-b-2 border-black font-bold">
					<td><Octo /></td>
					<td>0.50</td>
					<td>0.75</td>
					<td>0.70</td>
					<td>0.60</td>
					<td>0.80</td>
					<td>1.00</td>
					<td>0.72</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="mt-2 flex justify-center text-[0.5rem] md:text-sm">
		<div class="px-4"><sup>*</sup>New observation input (force-torque proprioception)</div>
		<div class="px-4"><sup>†</sup>New action space (joint position control)</div>
	</div>

	<p class="mt-8">
		Out-of-the-box, Octo can control multiple robots in environments from the pretraining data. When
		using natural language to specify tasks, it outperforms <a
			href="https://robotics-transformer-x.github.io/">RT-1-X</a
		>: the current best, openly available generalist robotic policy. It performs similarly to
		<a href="https://robotics-transformer-x.github.io/">RT-2-X</a>, a 55-billion parameter model.
		Additionally, while RT-1-X and RT-2-X only support language conditioning, Octo also supports
		goal image conditioning. On the WidowX tasks, we found that Octo achieved even better
		performance with goal image conditioning &mdash; 25% higher on average &mdash; likely because
		goal images provide more information about how to achieve the task.
	</p>
	<p class="mt-4">
		We also find that finetuning Octo leads to better policies than starting from scratch or with
		the pretrained <a href="https://eai-vc.github.io">VC-1</a> weights. On average across the six evaluation 
		setups, Octo outperforms the next best baseline by 52%. Each task uses &#126;100 target
		demonstrations. Importantly, we use
		<a href="https://github.com/octo-models/octo/blob/main/scripts/configs/finetune_config.py"
			>the same finetuning recipe</a
		> for all evaluation tasks, making this a good default configuration for Octo finetuning. The results 
		also underline Octo’s ability to accommodate new observations (force-torque inputs for “Berkeley Insertion”),
		action spaces (joint position control for “Berkeley Pick-Up”) and new robot embodiments (“Berkeley Bi-Manual” 
		and “Berkeley Coke”). This makes Octo applicable to a wide range of single and dual arm robotic manipulation 
		problems that go beyond a single camera input and end-effector position control.
	</p>

	<SideBySide />

	<!-- citation -->
	<h2 class="text-4xl mt-16">Citation</h2>
	<p class="mt-8">Please use the following BibTeX entry to cite this work:</p>
	<pre class="mt-4 overflow-x-scroll bg-slate-100 p-8">
{`@inproceedings{octo_2023,
    title={Octo: An Open-Source Generalist Robot Policy},
    author = {{Octo Model Team} and Dibya Ghosh and Homer Walke and Karl Pertsch and Kevin Black and Oier Mees and Sudeep Dasari and Joey Hejna and Charles Xu and Jianlan Luo and Tobias Kreiman and {You Liang} Tan and Lawrence Yunliang Chen and Pannag Sanketi and Quan Vuong and Ted Xiao and Dorsa Sadigh and Chelsea Finn and Sergey Levine},
    booktitle = {Proceedings of Robotics: Science and Systems},
    address  = {Delft, Netherlands},
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
