#!/bin/bash

# 创建一个目录来存放恢复的文件
mkdir -p recovered_files

# 获取所有丢失的 blob 并将其恢复为文件
for blob in $(git fsck --lost-found | grep 'dangling blob' | awk '{print $3}'); do
    git cat-file -p $blob > recovered_files/$blob.bin
done

# 进入恢复文件的目录
cd recovered_files

# 使用 file 工具判断文件类型
for f in *.bin; do
    file_type=$(file --mime-type -b "$f")
    if [[ "$file_type" == video/* ]]; then
        if [[ "$file_type" == "video/quicktime" ]]; then
            mv "$f" "$f.mp4"
            echo "Recovered QuickTime video file: $f -> $f.mp4"
        else
            mv "$f" "$f.video"
            echo "Recovered video file: $f -> $f.mp4"
        fi
    elif [[ "$file_type" == image/* ]]; then
        extension=$(echo "$file_type" | awk -F'/' '{print $2}')
        mv "$f" "$f.$extension"
        echo "Recovered image file: $f -> $f.$extension"
    else
        echo "Non-video/image file: $f ($file_type)"
    fi
done

echo "Recovery and classification completed."
