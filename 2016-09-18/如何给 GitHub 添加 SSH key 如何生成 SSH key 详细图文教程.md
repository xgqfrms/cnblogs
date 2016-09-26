# 

1

1

1

    如何给 GitHub 添加  SSH key， 如何生成  SSH key 详细图文教程！

     

    一、 生成  SSH key

     

    https://ide.c9.io/xgqfrms/

    创建一个空项目：(或使用真实 Linux 主机) PS： windows 类似（？ CMD） ReadMore

    https://ide.c9.io/xgqfrms/demo

    打开 shell(bash), 输入：

    $ npm install -g git-it

     

    生成 SSH-Key

    $ ssh-keygen -t rsa -b 4096 -C "username@email.com"

     

     

    检查，添加 ssh-key 到，linux client:

    $ eval "$(ssh-agent -s)"
    $ ssh-add ~/.ssh/id_rsa

     


    复制 ssh-key public 到 剪切板：

    $ clip < ~/.ssh/id_rsa.pub

     如果不好使， 使用vim 打开，复制即可！

    $ cd /home/ubuntu/.ssh/

    $ ls -l

    $ vim id_rsa.pub

     

     

    PS: 退出 vim 方法：

    1. 点击 esc 键，进入vim命令模式 输入 :q

    ：q

     

    2. 点击 Enter 即可退出！

     

    NEW:   after add ssh key ,you should close the terminal & restart a new terminal!

     

    二、 给 GitHub 添加  SSH key

     

    1. 打开 设置>SSH and GPG Keys> New SSH key ,

    2. 将复制的 id_rsa.pub 的 key 值，粘贴到 key 文本框，点击 Add SSH key 即可!

     ok!

     

     

     NEW:   after add ssh key ,you should close the terminal & restart a new terminal!

1

1

1

     
    Checking for existing SSH keys

    https://help.github.com/articles/checking-for-existing-ssh-keys/#platform-linux

     
    Adding a new SSH key to your GitHub account

    https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

     
     

     

     

     

     

1

1

1

1

    Multi Account for GitHub！

     

    new path

    创建 config,配置 multi account for GitHub！
    touch config
    编辑 config
    vim config

     

     

    NEW:   after add ssh key ,you should close the terminal & restart a new terminal!

     

     

     

     

1

1

1

1

1

1

1

1

     
    Generating a new SSH key and adding it to the ssh-agent

        MAC
        WINDOWS
        LINUX

    After you've checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.
    Generating a new SSH key

        Open Terminal.

        Paste the text below, substituting in your GitHub email address.

        ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
        # Creates a new ssh key, using the provided email as a label
        Generating public/private rsa key pair.

         

        When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

        Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

         using new path in case of override your other SSH-keys
         Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

         

        $ Enter a file in which to save the key (/Users/you/.ssh/id_rsa): /Users/you/.ssh/id_rsa_github [Type a passphrase]

         

        At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".

        Enter passphrase (empty for no passphrase): [Type a passphrase]
        Enter same passphrase again: [Type passphrase again]

       

     
    Adding your SSH key to the ssh-agent

    Before adding a new SSH key to the ssh-agent, you should have checked for existing SSH keys andgenerated a new SSH key.

        Ensure ssh-agent is enabled:

        # start the ssh-agent in the background
        $ eval "$(ssh-agent -s)"
        Agent pid 59566

         

        Add your SSH key to the ssh-agent. If you used an existing SSH key rather than generating a new SSH key, you'll need to replace id_rsa in the command with the name of your existing private key file.

        $ ssh-add ~/.ssh/id_rsa

         

        Add the SSH key to your GitHub account.

     

1

1

1

1

1

1

 
 评论列表
  修改删除
#1楼[楼主] 2016-09-18 04:16 xgqfrms  
一台机器上管理多个Github帐号的SSH Key
支持(1)反对(0)
  修改删除
#2楼[楼主] 2016-09-18 04:26 xgqfrms  
Quick Tip: How to Work with GitHub and Multiple Accounts
https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574

Multiple SSH Keys settings for different github account
https://gist.github.com/jexchan/2351996
支持(0)反对(0)
  修改删除
#3楼[楼主] 2016-09-18 20:45 xgqfrms  
linux 查看隐藏文件
1
	
$ ls -a
支持(0)反对(0)
  修改删除
#4楼[楼主] 2016-09-18 20:54 xgqfrms  
支持(1)反对(0)
  修改删除
#5楼[楼主] 2016-09-18 21:26 xgqfrms  
引用
http://www.liaoxuefeng.com/wiki/git
远程仓库
http://blog.csdn.net/u010520912/article/details/18993001
使用Git将本地代码上传到GitHub
支持(0)反对(0)
  修改删除
#6楼[楼主] 2016-09-18 22:11 xgqfrms  
https://help.github.com/articles/testing-your-ssh-connection/
支持(1)反对(0)
  修改删除
#7楼[楼主] 2016-09-18 22:32 xgqfrms  
https://help.github.com/articles/testing-your-ssh-connection/#platform-linux
Testing your SSH connection
https://help.github.com/articles/error-permission-denied-publickey/#platform-linux
Verify the public key is attached to your account

How to update OpenSSH ?
支持(1)反对(0)
  修改删除
#8楼[楼主] 2016-09-18 23:07 xgqfrms  
linux下查看文件内容的几种命令如下：

cat：由第一行开始显示文件所有内容；
tac：从最后一行开始显示文件的所有内容，注意 tac 与cat 写法正好相反；

cat [-n] 文件名
-n 显示时，连行号一起显示到屏幕
tac 文件名

more：一页一页的显示文件内容，只能向后翻页；
less：也是一页一页显示文件内容，但是可以通过键盘上的【pagedown】，【pageup】控制向后，向前翻页；

more 文件名
less 文件名
在less打开的文件中，通过输入：
“/word” 在文件中查找word这个字符串；
q：退出less画面；


head：显示一个文件的前几行；
tail：显示一个文件的后几行；

head [-n number]
tail [-n number]

number：要是显示的行数；
支持(0)反对(0)
  修改删除
#9楼[楼主] 2016-09-18 23:08 xgqfrms  
linux中查看文件的命令如下：
cat： 由第一行开始显示档案内容
tac： 从最后一行开始显示，可以看出 tac 是 cat 的反向显示！
nl： 显示的时候，随便输出行号！
more： 一页一页的显示档案内容less 与 more 类似，但是比 more 更好的是，他可以[pg dn][pg up]翻页！
head： 查看头几行
tail： 查看尾几行
od： 以二进制的方式读取档案内容！
支持(1)反对(0)
  修改删除
#10楼[楼主] 2016-09-18 23:45 xgqfrms  
Linux 创建/编辑/查看 文件的命令汇总

Linux 创建文件的命令
Linux,编辑文件的命令
Linux 查看文件的命令
touch,vim,vi,gedit,
cat,ls -a, ls -l,pwd,cd ../,:wq,:q,Ctrl + C,
支持(1)反对(0)
  修改删除
#11楼[楼主] 2016-09-19 00:22 xgqfrms  
Quick Tip: How to Work with GitHub and Multiple Accounts
https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574
1. create SSH key
1
	
$ ssh-keygen -t rsa -b 4096 -C "xgqfrms@xgqfrms.xyz"


using new path in case of override your other SSH-keys
Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
1
	
$Enter a file in which to save the key (/Users/you/.ssh/id_rsa): /Users/you/.ssh/id_rsa_github
支持(1)反对(0)
  修改删除
#12楼[楼主] 2016-09-19 00:33 xgqfrms  
引用
using global-user/global-user-email to avoid to input password each push commits

???
支持(1)反对(0)
  修改删除
#13楼[楼主] 2016-09-20 01:35 xgqfrms  
引用
git global user & global email config


avoid to input password each push commits



不指定密码即可
支持(1)反对(0)
  修改删除
#14楼[楼主] 2016-09-20 01:43 xgqfrms  
http://chinacheng.iteye.com/blog/1173838

git config --global user.name "user_name"
git config --global user.email user@email.com
git remote add origin git@github.com:user_name/project_name.git
git push -u origin master
支持(1)反对(0)
  修改删除
#15楼[楼主] 2016-09-20 01:44 xgqfrms  
http://callmepeanut.blog.51cto.com/7756998/1304912

引用
根据《github初试-403错误》将地址由https改为ssh方式:
git remote set-url origin https://username@github.com/username/CentOS.git
支持(1)反对(0)
  修改删除
#16楼[楼主] 2016-09-20 01:47 xgqfrms  
引用
[root@localhost CentOS]# ssh -T git@github.com
Warning: Permanently added the RSA host key for IP address '192.30.252.130' to the list of known hosts.
Hi username! You've successfully authenticated, but GitHub does not provide shell access.


Warning: Permanently added the RSA host key for IP address '192.30.252.130' to the list of known hosts.

虽然 Warning, 但不是 Error, 所以不影响正常使用！

just let go!
支持(1)反对(0)
  修改删除
#17楼[楼主] 2016-09-20 01:48 xgqfrms  
https://help.github.com/articles/error-repository-not-found/
支持(1)反对(0)
  修改删除
#18楼[楼主] 2016-09-20 02:08 xgqfrms  
https://github.com/integrations

引用
Use your favorite tools with GitHub.
Powerful integrations that help you and your team build software better, together.
支持(1)反对(0)
  修改删除
#19楼[楼主] 2016-09-21 02:06 xgqfrms  


Let's Encrypt

HTTPS
支持(1)反对(0)
  修改删除
#20楼[楼主] 2016-09-21 02:06 xgqfrms  


支持(1)反对(0)
 
 
