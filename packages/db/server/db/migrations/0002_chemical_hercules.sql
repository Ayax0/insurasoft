CREATE TABLE `request` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`approved` integer,
	`customer` integer,
	`file` integer NOT NULL,
	FOREIGN KEY (`customer`) REFERENCES `customer`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`file`) REFERENCES `file`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_claim` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`amount` real,
	`customer` integer,
	`file` integer NOT NULL,
	FOREIGN KEY (`customer`) REFERENCES `customer`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`file`) REFERENCES `file`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `claim`;--> statement-breakpoint
ALTER TABLE `__new_claim` RENAME TO `claim`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
