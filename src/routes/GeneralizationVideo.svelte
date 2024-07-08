<script>
	import Collapsible from './Collapsible.svelte';
	import { base } from '$app/paths';
	import DiffusionVLA from './dvla.svelte';

	function lazy(isOpen, path, type) {
		return isOpen ? `${base}/videos/generalization/${type}/${path}.mp4` : '';
	}
</script>

<div class="mt-8 md:ml-0 ml-1 text-left">
	<!-- <Collapsible> -->
		<h2 class="text-4xl mt-16 underline" style="color: #ff5733;">Generalization Experiments of our DVLA</h2>
       
        <h3 class="text-3xl mt-6">Instruction generalization</h3>
        
		<div  class="mt-2 ml-2 flex flex-wrap justify-center items-center" >
			<div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br>
                                <span style="font-weight: bold;">Instruction</span>: Upright the tipped-over <span style="color: green;">green</span> mug.<br>
                            </span> 
                            
                        </div>
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
                                src={lazy(true, 'simple_origin', 'instruction')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                                class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                In-domain
                            </span>
                        </div>
                        <div class="flex-1 ml-2 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
                                src={lazy(true, 'simple', 'instruction')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md"
                        >
                            Out-of-domain
                        </span>
                        </div>
                    </div>

				</div>
			</div>
            
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span>
                                <span style="font-weight: bold;">Level</span>: Distinguish <span style="color: red;">Seen</span> objects.<br>
                                <span style="font-weight: bold;">Instruction</span>: Pick the <span style="color: pink;">pink</span> cube.<br>
                                <span style="font-weight: bold;">Notice</span>: Both objects are seen in different tasks. <br>
                                Our policy did not overfit to the seen trajectories but instead picked up the cube and then released it.
                        </span>
                        </div>
                        <div class="w-2/4 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
                                src={lazy(true, 'middle', 'instruction')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                3x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md"
                        >
                            Out-of-domain
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-blue-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span>
                                <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">unseen</span>  & <span style="color: red;">New function</span> of seen objects.<br>
                                <span style="font-weight: bold;">Instruction</span>: Pick the car and place into the box.<br>
                                <span style="font-weight: bold;">Notice</span>: The toy car is total <span style="color: red;">unseen</span> object.<br>
                                  Our policy can recognize the unseen toy car and place it into the box with heman help.
                            </span>
                        </div>

                        <div class="w-2/4 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
                                src={lazy(true, 'hard', 'instruction')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                3x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s text-red-400 px-1 rounded-md"
                        >
                            Out-of-domain
                        </span>
                        </div>

                    </div>

				</div>
			</div>
		</div>

        <h3 class="text-3xl mt-6">Object&Appearance generalization</h3>
		<div  class="mt-2 flex flex-wrap justify-center items-center" >
			
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <!-- <div class="bg-green-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> 
                                <span style="font-weight: bold;">Instruction</span>: Place the tennis ball into the ball box.<br>
                            </span> 
                            
                        </div> -->
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'mug_5', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            in-domain
                        </span>
                        </div>
                        <div class="flex-1 ml-1 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'object_mug_5', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                            Out-of-domain
                        </span>
                        </div>
                        <div class="bg-green-500 ml-1 w-1 h-40 mx-auto"></div>

                     <!-- </div> -->

                        <div class="flex-1 ml-1 rounded-lg overflow-hidden relative">
                        <video
                            controls
                            webkit-playsinline
                            playsinline
                            loop
                            autoplay
                            src={lazy(true, 'drawer2', 'object_appearance')}
                            class="w-full"
                        />
                        <span
                            class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            5x
                        </span>
                        <span
                        class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                    >
                         in-domain
                    </span>
                    </div>

                    <div class="flex-1 ml-1 rounded-lg overflow-hidden relative ">
                        <video
                            controls
                            webkit-playsinline
                            playsinline
                            loop
                            autoplay
                            src={lazy(true, 'object_drawer_5', 'object_appearance')}
                            class="w-full"
                        />
                        <span
                            class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            5x
                        </span>
                        <span
                        class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                    >
                    Out-of-domain
                    </span>
                    </div>
                </div>

				</div>
			</div>

            <!-- <div class="flex flex-row max-w-full mx-1 py-1"> -->
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2" style="width: 100%">
                <div class=" flex justify-center" style="width: 100%">
                    <div class="flex flex-row items-center" style="width: 100%">
                        <div class="bg-green-50 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span>
                            <span style="font-weight: bold;">Instruction</span>: Upright the tipped-over mug.</span>
                        </div>
                        <div class="bg-green-50 ml-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span><span style="font-weight: bold;">Instruction</span>: Close the drawer.</span>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="flex flex-col flex-row max-w-100% mx-1 py-1">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">

                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'box', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                             in-domain
                        </span>
                        </div>
                        <div class="flex-1 ml-1 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'appearance_box_5', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                            Out-of-domain
                        </span>
                        </div>
                        <div class="bg-green-500 ml-1 w-1 h-40 mx-auto"></div>

                        <div class="flex-1 ml-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'mug_5', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                             in-domain
                        </span>
                        </div>
                        <div class="flex-1 ml-1 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'appearance_mug_5', 'object_appearance')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                        Out-of-domain
                    </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2" style="width: 100%">
                <div class=" flex justify-center" style="width: 100%">
                    <div class="flex flex-row items-center" style="width: 100%">
                        <div class="bg-green-50 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span>
                            <span style="font-weight: bold;">Instruction</span>: Open the lid of the box.</span>
                        </div>
                        <div class="bg-green-50 ml-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 50%">
                            <span><span style="font-weight: bold;">Instruction</span>: Upright the tipped-over mug.</span>
                        </div>
                    </div>
                </div>
            </div>
            
		</div>

        <h3 class="text-3xl mt-6">Background generalization</h3>
		<div  class="mt-2 flex flex-wrap justify-center items-center" >
			
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-yellow-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Place the tennis ball into the ball box.<br>
                            </span> 
                            
                        </div>
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'deep_blue', 'background')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Deep blue desk mat
                        </span>
                        </div>
                        <div class="flex-1 ml-2 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'yellow', 'background')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Yellow desk mat
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-yellow-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br>
                            </span> 
                            
                        </div>
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'gray', 'background')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                             Gray desk mat
                        </span>
                        </div>
                        <div class="flex-1 ml-2 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'wooden', 'background')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                        Wooden desk board
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            
		</div>
        <h3 class="text-3xl mt-6">Distractors in bimanual settings</h3>
		<div  class="mt-2 flex flex-wrap justify-center items-center" >
			
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-pink-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Transfer the bread and place it into plate.<br>
                            </span> 
                            
                        </div>
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                muted
                                autoplay
								src={lazy(true, 'transfer_bread', 'distractors')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Origin
                        </span>
                        </div>
                        <div class="flex-1 ml-2 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'transfer_bread_distractor', 'distractors')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                        With distractors
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        <div class="bg-pink-50 mr-2 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 25%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the cubes on top of the plate.<br>
                            </span> 
                            
                        </div>
                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'stack_cube', 'distractors')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                        Origin
                        </span>
                        </div>
                        <div class="flex-1 ml-2 rounded-lg overflow-hidden relative ">
                            <video
                                controls
                                webkit-playsinline
                                playsinline
                                loop
                                autoplay
								src={lazy(true, 'stack_cubes_distractor', 'distractors')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                5x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                        With distractors
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            
		</div>

        <h3 class="text-3xl mt-6">View Generalization</h3>
		<div  class="mt-2 flex flex-wrap justify-center items-center" >
			
            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        
                        <div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br>
                            </span> 
                            
                        </div>

                        <div class="w-5% mr-0 rounded-lg overflow-hidden relative">
                            <img src="{base}/videos/generalization/view/left_orig.png" alt="teaser" class="" />
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Origin
                        </span>
                        </div>
                        <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div>

                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                webkit-playsinline
                                playsinline
                                loop
                                muted
                                autoplay
								src={lazy(true, 'left_-30_2', 'view')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                            LeftView-30°
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        
                        <div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br>
                            </span> 
                            
                        </div>

                        <div class="w-5% mr-0 rounded-lg overflow-hidden relative">
                            <img src="{base}/videos/generalization/view/left_orig.png" alt="teaser" class="" />
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Origin
                        </span>
                        </div>
                        <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div>

                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                webkit-playsinline
                                playsinline
                                loop
                                muted
                                autoplay
								src={lazy(true, 'left_+15_2', 'view')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 left-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                        LeftView+15°
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex mt-4 flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        
                        <div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br>
                            </span> 
                            
                        </div>

                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                webkit-playsinline
                                playsinline
                                loop
                                muted
                                autoplay
								src={lazy(true, 'right_-15_2', 'view')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                            RightView-15°
                        </span>
                        </div>
                        <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div>

                        <div class="w-5% ml-0 rounded-lg overflow-hidden relative">
                            <img src="{base}/videos/generalization/view/right_orig.png" alt="teaser" class="" />
                            <span
                            class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Origin
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            <div class="flex flex-col flex-row max-w-100% mx-2 py-2">
				<div class="flex justify-center">
                    <div class="flex flex-row items-center">
                        
                        <div class="bg-purple-100 mr-1 rounded-lg px-4 py-2 flex items-center" style="height: 100%; width: 13%">
                            <span>
                                <!-- <span style="font-weight: bold;">Level</span>: Understand <span style="color: red;">Unseen</span> color.<br> -->
                                <span style="font-weight: bold;">Instruction</span>: Stack the pink cube on top of the blue cube.<br>
                            </span> 
                            
                        </div>

                        <div class="flex-1 rounded-lg overflow-hidden relative">
                            <video
                                webkit-playsinline
                                playsinline
                                loop
                                muted
                                autoplay
								src={lazy(true, 'right_+15_2', 'view')}
                                class="w-full"
                            />
                            <span
                                class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                            >
                                2x
                            </span>
                            <span
                            class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md text-red-400"
                        >
                        RightView+15°
                        </span>
                        </div>
                        <div class="bg-purple-500 ml-0.5 mr-0.5 w-1 h-40 mx-auto"></div>

                        <div class="w-5% ml-0 rounded-lg overflow-hidden relative">
                            <img src="{base}/videos/generalization/view/right_orig.png" alt="teaser" class="" />
                            <span
                            class="absolute top-0.5 right-0.5 bg-slate-100 bg-opacity-70 text-stone-700 text-s px-1 rounded-md"
                        >
                            Origin
                        </span>
                        </div>
                    </div>

				</div>
			</div>

            

        </div>

</div>

