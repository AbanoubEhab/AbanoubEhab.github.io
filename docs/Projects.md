---
hide:
  - navigation
---

# Projects

## Proxmox

- Having something to host whatever come to your mind is pretty neat , i boat an old PC that i installed Proxmox on it so i can try new things i can self-host easily.
- It can be used to host Virtual Machines or LXC container, you can download some pre-configured servers as LXC container from Turnkey linux directly.

## Host Password Manager

- Bitwarden is a very cool password Manager ,it supports 2FA and can be used offline if you don't have internet connection.
- I have never used password managers before self-host it because i don't trust a big company with my passwords whatever they say about privacy and security , so when i found out that i can self-host it i gave it a try.
## Pfsence firewall inside Proxmox

- If you don't have firewall (hardware) you can install pfsense on a virtual machine and network cards (NIC) can be virtualized.
- You can also install ad-blocker inside your firewall (it block ads using DNS and adding block rules to ad domains and IP addresses ).
## Quota Check Script

- If you have a few internet lines it can be tedious to check the quota every day to all lines so , why not automate it.
- A simple Python script can login to [te.eg](https://te.eg) website check how many GB you have left and how many day you have before renew for all your lines ,you can set it with task schedule to run every day in specific time and send you whats app message with the report .
- Check it out from [here](https://github.com/AbanoubEhab/we_qouta_checker_Egypt).
## Setting Lancache server

- In esports event or in any place where you have a lot of computers that need to download the same files (or games) form the Internet you might not have the enough bandwidth to internet.
- Lancache works in a simple but effective way :
	- you set it up and make it your primary DNS (set it in your DHCP)
	- It intercept any http downloads you make and cache it locally
	- when another computer download the same file it serve it locally without going out to the internet
