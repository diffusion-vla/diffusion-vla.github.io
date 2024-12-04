# INPUT_DIR="/Users/lesjie/WebProjects/divla/divla_cvpr/static/videos/factory_sorting_reasoning/1_factory_sorting_5cars_2x"
# INPUT_DIR="/Users/lesjie/WebProjects/divla/divla_cvpr/static/videos/factory_sorting_reasoning/factory_sorting_zzy"
# INPUT_DIR="/Users/lesjie/WebProjects/divla/divla_cvpr/static/videos/factory_sorting_reasoning/factory_sorting_zzy_2"
# INPUT_DIR="/Users/lesjie/WebProjects/divla/divla_cvpr/static/videos/origin_tasks"
INPUT_DIR="/Users/lesjie/WebProjects/divla/divla_cvpr/static/videos/visual_generalization"

for NAME in $(ls "$INPUT_DIR"); do
    if [[ $NAME == *".mov" ]] && [[ $NAME != "cmu.mov" ]]; then
        if [[ $NAME == "iliad.mov" ]]; then
            VF="setpts=PTS/2,zscale=t=linear:npl=110,tonemap=tonemap=hable:desat=0,format=yuv420p"
        else
            VF="setpts=PTS/2,zscale=t=linear:npl=105,format=gbrpf32le,zscale=p=bt709,tonemap=tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p"
        fi
    else
        VF="setpts=PTS/2,format=yuv420p"
    fi

    INPUT_FILE="$INPUT_DIR/$NAME"
    TEMP_FILE="$INPUT_DIR/temp_${NAME%%.*}.mp4"

    # 获取视频的原始宽度和高度
    VIDEO_SIZE=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$INPUT_FILE")
    WIDTH=$(echo $VIDEO_SIZE | cut -d'x' -f1)
    HEIGHT=$(echo $VIDEO_SIZE | cut -d'x' -f2)

    # 确保宽度和高度是有效的
    if [[ -z "$WIDTH" || -z "$HEIGHT" || "$WIDTH" -le 0 || "$HEIGHT" -le 0 ]]; then
        echo "视频 $NAME 的分辨率无效，跳过此视频"
        continue
    fi

    # 使用原始视频尺寸
    if [[ $NAME == *"rpt_"* ]]; then
        ffmpeg -i "$INPUT_FILE" -s ${WIDTH}x${HEIGHT} -aspect $WIDTH:$HEIGHT -an -vf "$VF" -crf 28 -vcodec libx264 "$TEMP_FILE"
    else
        ffmpeg -i "$INPUT_FILE" -s ${WIDTH}x${HEIGHT} -aspect $WIDTH:$HEIGHT -an -vf "$VF" -crf 28 -vcodec libx264 "$TEMP_FILE"
    fi

    # 替换原始文件并生成缩略图
    mv "$TEMP_FILE" "$INPUT_FILE"
    # ffmpeg -i "$INPUT_FILE" -vf "select=eq(n\\,0)" -q:v 5 "$INPUT_DIR/${NAME%%.*}.jpg"
done

