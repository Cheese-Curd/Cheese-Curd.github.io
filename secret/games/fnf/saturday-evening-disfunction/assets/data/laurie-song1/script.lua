function onCreate()
	-- CHARACTER
	setPropertyFromClass('GameOverSubstate', 'characterName', 'laurie-dead');
	
	--SOUNDS
	setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'fnf_loss_sfx'); --file goes inside sounds/ folder
	setPropertyFromClass('GameOverSubstate', 'loopSoundName', 'gameOver-pixel'); --file goes inside music/ folder
	setPropertyFromClass('GameOverSubstate', 'endSoundName', 'gameOverEnd-pixel'); --file goes inside music/ folder
end

-- function onCountdownTick(counter)   
-- 	if counter == 0 then -- three
-- 		playSound('eliana/intro3',0.3);
-- 	elseif counter == 1 then -- two
-- 		playSound('eliana/intro2',0.3);
-- 	elseif counter == 2 then -- one
-- 		playSound('eliana/intro1',0.3);
-- 	elseif counter == 3 then -- go
-- 		playSound('eliana/introGo',0.3);
-- 	end
-- end