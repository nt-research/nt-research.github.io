---
sidebar_position: 1
title: What is Morph?
description: Morph is a feature that allows you to change your character's appearance.
---

# What is Morph?

In the game NosTale, a "Morph" (from the word morphing, meaning transformation) is a process in which the player's character dynamically changes form upon equipping and activating a Specialist Card.

From a technical perspective, a Morph is represented by a unique numerical value (known as a **Morph ID**), which is calculated by the server and differs from the ID of the item itself located in the inventory. When a player activates a card, the server transmits this new value in network packets to the game client.

As a result, the game engine receives an instruction to replace the hero's standard appearance. This change involves loading a new character sprite and updating the portrait icon visible in the top-left corner of the interface. Along with this visual transformation, the character also gains powerful stat boosts and an entirely new set of combat skills assigned to that specific class.


| Morph | Description |
| --- | --- |
| ![Morph 0](/assets/morph/morph_0.png) `$morph 0` | By default you are using Morph 0. That will load sprite based on you class |
| ![Morph 20](/assets/morph/morph_20.png) `$morph 20` | When you equip a Specialist Card your Morph is changed |
| ![Morph 1000](/assets/morph/morph_1000.png) `$morph 1000` | That can be used to change your appearance to Monsters too. For monsters `morph_id = 999 + monster_vnum`. Fox have `monster_vnum = 0` |


## How to change Morph?

### OpenNos command

In OpenNos based servers you can change Morph by using the `$morph <morph_id>` command.

### Packetlogger packet

You can also send to yourself `c_mode` packet.

```txt title="Packetlogger packet (pattern)"
c_mode 1 <character_id> <morph_id> 0 0 0 100 0
```

```txt title="Packetlogger packet (example - change your character to Pirate)"
c_mode 1 42067 16 0 0 0 100 0
```

## How to get Morph Icon Id?

1. Find you Specialist Card item Vnum in `Item.dat`.
2. Then read `DATA` row and find 13th value. That will be your Morph Icon Id.

:::info Example

Pirate Specialist Card (Vnum: 4099) <NtItemIcon vnum={4099} label="Pirate Specialist Card" />

```txt title="Item.dat"
	VNUM	4099	0
...
	DATA	1	0	0	0	0	0	0	0	0	0	1	0	15	0	0	0	0	0	10	4
...
```
13th value in `DATA` row is `15`. That is your Morph ID.

Now you need to unpack `NSipData.NOS`

```txt title="Formula"
MaleIconId = 32500 + 2 * Morph_ID
FemaleIconId = 32500 + 2 * Morph_ID + 1
```

In this example it will be: `32530` for male and `32531` for female.
:::

### How to get Morph Icon Id for classes?

| classId | Class Name | Male Icon | Female Icon |
| --- | --- | --- | --- |
| 0 | Adventurer | ![](https://nosapki.com/images/icons/32000.png) | ![](https://nosapki.com/images/icons/32020.png) |
| 1 | Swordsman | ![](https://nosapki.com/images/icons/32040.png) | ![](https://nosapki.com/images/icons/32060.png) |
| 2 | Archer | ![](https://nosapki.com/images/icons/32080.png) | ![](https://nosapki.com/images/icons/32100.png) |
| 3 | Mage | ![](https://nosapki.com/images/icons/32120.png) | ![](https://nosapki.com/images/icons/32140.png) |
| 4 | Martial Artist | ![](https://nosapki.com/images/icons/32160.png) | ![](https://nosapki.com/images/icons/32180.png) |

```txt title="Formula"
MaleIconId = 32000 + classId * 40
FemaleIconId = 32000 + classId * 40 + 20
```

### How to get Monster Icon Id?

Is calculated diffrent way. Read more in [monster.dat](../NOS%20files/NSgtdData/monster_dat#iconid) file.
