# ClashWebBatAHK
> 使用Bat脚本和cUrl取代ClashWeb所需的Python环境，部分操作没有跟进，使用方式请参考ClashWeb（链接见下）。

<!-- ## 直接下载，解压使用 -->

## 在您的配置文件里请添加：
> external-controller: 127.0.0.1:9090

> 默认面板为yacd。如需修改请在Bat\OpenWeb.bat修改
## tun/tap模式
> Profile\defaultconfig中修改配置
    
 <!-- Tun模式请用管理打开ClashWeb.exe -->



## 请自行更新：
> clash内核：https://github.com/Dreamacro/clash/releases/tag/premium

> subconverter：https://github.com/tindy2013/subconverter

## 32位系统替换：
> 用文件夹32里的文件替换App中的相应文件，建议替换前备份

> 更新地址：
>> [clash-win64.exe](https://github.com/Dreamacro/clash/releases/tag/premium) ：先择32位内核下载，之后重命名为clash-win64.exe，替换

>> [wintun.dll](https://www.wintun.net/builds/wintun-0.10.zip)：选择32位文件替换

>> [curl](https://curl.se/windows/)：选择32位文件下载，将curl-ca-bundle.crt和curl.exe替换
## 订阅转换：
> 在线接口的隐私问题自行斟酌，建议选择选择本地接口或自行搭建。

> 默认使用T大的订阅转换：https://subcon.py6.pw/

> 如果修改，请在Bat\Subcon.bat中修改地址。

## 感谢：

> clashcmd: https://github.com/tindy2013/clashcmd

> ClashWeb：https://github.com/lzdnico/ClashWeb

> Clash-Web-Bat：https://github.com/pcysanji/Clash-Web-Bat

## 开机启动：
> 不建议使用“开机启动"

> 建议使用[UACWhitelistTool](https://github.com/XIU2/UACWhitelistTool)，将clashweb添加为不弹窗后，将生成的快捷文件放置到 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp中
