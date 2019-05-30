-- name: game_event_first
-- select first game event
select * from game_event limit 1;

-- name: game_event_limit
select processed_results,created_at, draw_datetime,cutoff ,progress from game_event limit 10;
