sudo tc qdisc del dev eth1 root
sudo tc qdisc replace dev eth0 root handle 1: htb default 30
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 95mbit
sudo tc class add dev eth0 parent 1:1 classid 1:10 htb rate 5mbit ceil 20mbit prio 1
sudo tc class add dev eth0 parent 1:1 classid 1:20 htb rate 10mbit ceil 20mbit prio 2
sudo tc class add dev eth0 parent 1:1 classid 1:30 htb rate 2mbit ceil 10mbit prio 3
sudo tc qdisc add dev eth0 parent 1:10 fq_codel
sudo tc qdisc add dev eth0 parent 1:20 fq_codel
sudo tc qdisc add dev eth0 parent 1:30 fq_codel
sudo tc filter add dev eth0 parent 1: basic match 'meta(priority eq 6)' classid 1:10
sudo tc filter add dev eth0 parent 1: basic match 'meta(priority eq 2)' classid 1:20
