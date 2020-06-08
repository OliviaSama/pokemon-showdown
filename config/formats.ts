// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

export const Formats: (FormatsData | {section: string, column?: number})[] = [

	// APA Gym Challenge
	///////////////////////////////////////////////////////////////////
	{
		name: "APA Gym Challenge",

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
		 'Assist', 'Barrage', 'Barrier', 'Bestow', 'Bide', 'Bone Club', 'Bubble', 'Camouflage', 'Captivate', 'Chip Away',
		 'Clamp', 'Comet Punch', 'Constrict', 'Dizzy Punch', 'Double Slap', 'Dragon Rage', 'Egg Bomb', 'Embargo', 'Feint Attack',
		 'Flame Burst', 'Flash', 'Foresight', 'Frustration', 'Grass Whistle', 'Heal Block', 'Heal Order', 'Heart Stamp', 'Hidden Power',
		 'Ice Ball', 'Ion Deluge', 'Jump Kick', 'Karate Chop', 'Kinesis', 'Lucky Chant', 'Magnet Bomb', 'Magnitude', 'Me First',
		 'Meditate', 'Miracle Eye', 'Mirror Move', 'Mirror Shot', 'Mud Bomb', 'Mud Sport', 'Natural Gift', 'Needle Arm', 'Nightmare',
		 'Odor Sleuth', 'Ominous Wind', 'Psywave', 'Punishment', 'Pursuit', 'Rage', 'Razor Wind', 'Refresh', 'Rock Climb', 'Rolling Kick',
		 'Rototiller', 'Secret Power', 'Sharpen', 'Signal Beam', 'Silver Wind', 'Sky Drop', 'Sky Uppercut', 'Smelling Salts', 'Snatch',
		 'Sonic Boom', 'Spider Web', 'Spike Cannon', 'Spotlight', 'Steamroller', 'Synchronoise', 'Telekinesis', 'Trump Card', 'Twineedle',
		 'Wake-Up Slap', 'Water Sport', 'Wring Out', 'Return'
		 ],
	}
